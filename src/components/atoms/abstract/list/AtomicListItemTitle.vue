<template>
  <v-list-item-title v-bind="$attrs.vBind">
    <slot name="listItemTitleContent"></slot>
  </v-list-item-title>
</template>

<script>
export default {
  name: 'AtomicListItemTitle',
};
</script>

<style scoped></style>
