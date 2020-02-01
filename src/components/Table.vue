<template>
  <table>
    <col width="80%">
    <col width="20%">
    <tr class="border-bottom">
      <th
        v-for="field in fields"
        :key="field.key"
        :class="field.class"
        class="font-weight-semibold"
      >
        {{ field.name }}
      </th>
    </tr>
    <tr
      v-for="(row, index) in data"
      :key="index"
      :class="{ 'border-bottom': index !== data.length - 1 }"
    >
      <td
        v-for="field in fields"
        :key="field.key"
        :class="field.class"
      >
        {{ row[field.key] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    fields: {
      required: true,
      type: Array,
      default: () => ([]),
    },
    data: {
      required: true,
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
  }
  th {
    padding: 0 0 0.6em 0;
    margin: 0 0 1.5em 0;
  }
  td {
    padding: 0.6em 0 0.6em 0;
  }
</style>
