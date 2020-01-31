<template>
  <div class="timeline">
    <timeline-list
    />
  </div>
</template>

<script>
import TimelineList from '../components/TimelineList.vue';

export default {
  name: 'home',
  components: {
    TimelineList,
  },
};
</script>

<style lang="scss">
  .timeline {
    margin-top: 2em;
  }
</style>
