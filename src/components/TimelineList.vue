<template>
  <div class="timeline-list">
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
        Teste
      </template>

    </timeline-item>
  </div>
</template>

<script>
import TimelineItem from './TimelineItem.vue';
import IconAndText from './IconAndText.vue';

export default {
  components: {
    TimelineItem,
    IconAndText,
  },
};
</script>

<style lang="scss">
.timeline-list {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after { //ruler
    content: '';
    position: absolute;
    width: 2px;
    background-color: #DFE2E9;
    top: 0;
    bottom: 0;
    left: 33%;
    margin-left: -5px;
  }
}

@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline-list::after {
    left: 31px;
  }
}
</style>
