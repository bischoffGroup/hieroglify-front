<template>
  <v-card-title v-bind="$attrs.vBind">
    <slot name="content" />
  </v-card-title>
</template>

<script>
export default {
  name: 'AtomicCardTitle',
};
</script>

<style scoped></style>
