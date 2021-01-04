<template>
  <v-data-table v-bind="$attrs.vBind" :headers="headers" :items="items">
    <template v-slot:header>
      <slot name="header" />
    </template>
    <template v-slot:footer>
      <slot name="footer" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "AtomicDataTable",
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
