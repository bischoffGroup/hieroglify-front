<template>
  <v-data-footer v-bind="$attrs.vBind">
    <slot name="dataTableFooterContent" />
  </v-data-footer>
</template>

<script>
export default {
  name: "AtomicDataTableFooter"
};
</script>

<style scoped></style>
