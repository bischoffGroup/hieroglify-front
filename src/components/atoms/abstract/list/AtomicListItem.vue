<template>
  <v-list-item v-bind="$attrs.vBind">
    <slot name="listItemContent"></slot>
  </v-list-item>
</template>

<script>
export default {
  name: 'AtomicListItem',
};
</script>

<style scoped></style>
