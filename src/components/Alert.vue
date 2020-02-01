<template>
  <div
    class="alert"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang='scss' scoped>
.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}
</style>
