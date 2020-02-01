<template>
  <div class="timeline">
      <timeline-item
        v-for="(item) in data"
        :key="item.transactionId"
        status="success"
      >
        <template v-slot:header>
          <div class="d-flex justify-between flex-wrap">
            <icon-and-text
              icon="calendar"
              :text="getFormattedDate(item.timestamp)"
              alt="Data"
              class="mt-1"
            />
            <icon-and-text
              icon="clock"
              :text="getFormattedTime(item.timestamp)"
              alt="Hora"
              class="mt-1"
            />
            <icon-and-text
              icon="place"
              :text="item.storeName"
              alt="Local"
              class="mt-1"

            />
            <icon-and-text
              icon="money"
              :text="getFormattedValue(item.revenue)"
              alt="Valor"
              class="mt-1"
            />
          </div>
        </template>

        <template v-slot:default>
          <Table
            :fields="fields"
            :data="item.products"
          />
        </template>
      </timeline-item>
  </div>
</template>

<script>
import axios from 'axios';

import TimelineItem from '../components/timeline/TimelineItem.vue';
import IconAndText from '../components/IconAndText.vue';
import Table from '../components/Table.vue';

import tableConfig from '../configs/timelineTable';

export default {
  name: 'timeline',
  components: {
    TimelineItem,
    IconAndText,
    Table,
  },
  data() {
    return {
      fields: tableConfig.fields,
      data: [],
    };
  },

  beforeMount() {
    axios.get('https://storage.googleapis.com/dito-questions/events.json')
      .then(({ data }) => {
        this.data = this.groupData(data);
      });
  },

  methods: {
    groupData(data) {
      const purchases = data.events
        .filter(purchase => purchase.event === 'comprou');
      const productPurchases = data.events
        .filter(productPurchase => productPurchase.event === 'comprou-produto');

      return purchases.map((purchase) => {
        const transactionId = purchase.custom_data
          .filter(customData => customData.key === 'transaction_id')[0].value;

        const products = productPurchases.filter(
          productPurchase => (productPurchase.custom_data
            .filter(customData => customData.key === 'transaction_id')[0].value)
          === transactionId,
        ).map((product) => {
          const name = product.custom_data
            .filter(customData => customData.key === 'product_name')[0].value;
          const price = product.custom_data
            .filter(customData => customData.key === 'product_price')[0].value;

          return {
            product: name,
            price,
          };
        });

        const storeName = purchase.custom_data
          .filter(customData => customData.key === 'store_name')[0].value;

        return {
          revenue: purchase.revenue,
          timestamp: purchase.timestamp,
          storeName,
          products,
          transactionId,
        };
      });
    },
    getFormattedDate(timestamp) {
      const date = new Date(timestamp);
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();

      return `${mm}/${dd}/${yyyy}`;
    },
    getFormattedTime(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${hours}:${minutes}`;
    },

    getFormattedValue(value) {
      return `R$ ${value},00`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .timeline {
    margin-top: 2em;
  }
</style>
