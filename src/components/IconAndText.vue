<template>
  <span class="d-flex align-items-center">
    <svgicon
      :name="icon"
      :title="alt"
      width="14px"
    />
    <span class="ml-1">{{ text }}</span>
  </span>
</template>

<script>
import './icons';

export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style>

</style>
