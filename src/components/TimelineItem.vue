<template>
  <div class="timeline-item"
    :class="icon"
  >
    <div class="content">
      <div class="header">
        <slot name="header"/>
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      required: true,
      type: String,
      default: 'none',
    },
  },

  computed: {
    icon() {
      const availableIcons = ['success'];

      return availableIcons.includes(this.status)
        ? this.status
        : 'none';
    },
  },
};
</script>

<style lang="scss">
.timeline-item {
  padding: 10px 30px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 33%;

  &.success {
    &::after {
      background-image: url('../assets/fonts/icons/check.svg');
      background-repeat: no-repeat;
      background-size: 1.5em;
    }
  }
  &::after { //circles
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    right: -15px;
    top: 20px;
    border-radius: 50%;
    z-index: 1;
    left: -16px;
  }

  &::before { //arrows
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 20px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .content {
    // padding: 15px 20px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
    overflow: hidden;

    .header {
      padding: 10px 20px 10px 15px ;

      // height: 3em;
    }

    .body {
      background-color: #F8F8F8;
      padding: 10px 20px 10px 15px;
    }
  }
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  .timeline-item  {
    width: 100%;
    padding-left: 60px;
    padding-right: 25px;
    left: 0%;

    &::before { //arrow
      left: 50px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    &::after {
      left: 15px;
    }
  }
}
</style>
