<template>
  <v-card v-bind="$attrs">
    <slot name="cardContent"></slot>
  </v-card>
</template>

<script>
export default {
  name: 'AtomicCard',
};
</script>

<style scoped></style>
