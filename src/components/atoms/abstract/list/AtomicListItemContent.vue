<template>
  <v-list-item-content v-bind="$attrs.vBind">
    <slot name="content" />
    <slot name="actions" />
  </v-list-item-content>
</template>

<script>
export default {
  name: 'AtomicListItemContent',
};
</script>

<style scoped></style>
