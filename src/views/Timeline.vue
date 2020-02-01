<template>
  <div class="timeline">
    <timeline-list
    >
      <timeline-item
        status="success"
      >
        <template v-slot:header>
          <div class="d-flex justify-between">
            <icon-and-text
              icon="calendar"
              text="22/10/1990"
              alt="Data"
            />
            <icon-and-text
              icon="clock"
              text="13:57"
              alt="Hora"
            />
            <icon-and-text
              icon="place"
              text="Teste"
              alt="Local"
            />
            <icon-and-text
              icon="money"
              text="R$ 250,00"
              alt="Valor"
            />
          </div>
        </template>

        <template v-slot:default>
          <Table
            :fields="fields"
            :data="data"
          />
        </template>

      </timeline-item>
    </timeline-list>
  </div>
</template>

<script>
import axios from 'axios';

import TimelineList from '../components/timeline/TimelineList.vue';
import TimelineItem from '../components/timeline/TimelineItem.vue';
import IconAndText from '../components/IconAndText.vue';
import Table from '../components/Table.vue';

import tableConfig from '../configs/timelineTable';

export default {
  name: 'timeline',
  components: {
    TimelineList,
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
        this.data = data.events;
      });
  },
};
</script>

<style lang="scss" scoped>
  .timeline {
    margin-top: 2em;
  }
</style>
