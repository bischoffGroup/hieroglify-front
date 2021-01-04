<template>
  <v-list-item-icon v-bind="$attrs.vBind">
    <slot name="listItemIconContent"></slot>
  </v-list-item-icon>
</template>

<script>
export default {
  name: "AtomicListItemIcon"
};
</script>

<style scoped></style>
