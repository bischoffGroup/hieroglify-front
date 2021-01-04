<template>
  <v-list-item-subtitle v-bind="$attrs.vBind">
    <slot name="listItemSubtitleContent"></slot>
  </v-list-item-subtitle>
</template>

<script>
export default {
  name: "AtomicListItemSubtitle"
};
</script>

<style scoped></style>
