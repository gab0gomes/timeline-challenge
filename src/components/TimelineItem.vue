<template>
  <div class="timeline-item"
    :class="icon"
  >
    <div class="header">
      <slot name="header"/>
    </div>
    <div class="content">
      <slot />
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
// * {
//   box-sizing: border-box;
// }

/* Container around content */
.timeline-item {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 50%;

  &.success {
    &::after {
      background-image: url('../assets/fonts/icons/check.svg');
      background-repeat: no-repeat;
      background-size: 1.5em;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    right: -17px;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: -16px;
  }

  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  &.content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
  }
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  .timeline-item  {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0%;

    &::before {
      left: 60px;
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
