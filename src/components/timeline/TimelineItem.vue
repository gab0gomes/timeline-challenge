<template>
  <div class="timeline-item-container">
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

<style lang="scss" scoped>
.timeline-item-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::after { //ruler
    content: '';
    position: absolute;
    width: 2px;
    background-color: #D8D8D8;
    top: 0;
    bottom: 0;
    left: 25%;
    margin-left: -3px;
  }
}

.timeline-item {
  padding: 10px 30px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 25%;

  &.success {
    &::after {
      background-image: url('../../assets/fonts/icons/check.svg');
      background-repeat: no-repeat;
      background-size: 2em;
    }
  }
  &::after { //circles
    content: "";
    position: absolute;
    width: 2em;
    height: 2em;
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
    top: 24px;
    width: 0;
    z-index: 1;
    left: 20px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .content {
    background-color: white;
    position: relative;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
    overflow: hidden;

    .header {
      padding: 10px 20px 10px 20px ;
    }

    .body {
      background-color: #F8F8F8;
      padding: 10px 20px 10px 20px;
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
    }

    &::after {
      left: 15px;
    }
  }

  .timeline-item-container::after {
    left: 31px;
  }

}
@media screen and (min-width: 600px) and (max-width: 768px) {
  .timeline-item  {
    width: 80%;
    padding-left: 60px;
    padding-right: 25px;
    left: 10%;

    &::before { //arrow
      left: 50px;
    }

    &::after { //circles
      left: 15px;
    }
  }

  .timeline-item-container::after { //ruler
    left: 10%;
    margin-left: 28px;

  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .timeline-item  {
    width: 70%;
    padding-left: 60px;
    padding-right: 25px;
    left: 15%;

    &::before { //arrow
      left: 50px;
    }

    &::after { //circles
      left: 15px;
    }
  }

  .timeline-item-container::after { //ruler
    left: 15%;
    margin-left: 28px;

  }
}
</style>
