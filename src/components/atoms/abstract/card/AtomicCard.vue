<template>
  <v-card v-bind="$attrs.vBind">
    <slot name="cardContent"></slot>
  </v-card>
</template>

<script>
export default {
  name: 'AtomicCard',
};
</script>

<style scoped></style>
