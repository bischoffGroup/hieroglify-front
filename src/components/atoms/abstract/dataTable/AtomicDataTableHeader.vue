<template>
  <v-data-table-header v-bind="$attrs.vBind">
    <slot name="dataTableHeaderContent" />
  </v-data-table-header>
</template>

<script>
export default {
  name: "AtomicDataTableHeader"
};
</script>

<style scoped></style>
