<template>
  <v-card-actions v-bind="$attrs.vBind">
    <slot name="cardActionContent"></slot>
  </v-card-actions>
</template>

<script>
export default {
  name: 'AtomicCardAction',
};
</script>

<style scoped></style>
