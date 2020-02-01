<template>
  <div class="timeline-list">
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
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
  .timeline-list::after {
    left: 31px;
  }
}
</style>
