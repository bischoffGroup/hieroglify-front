<template>
  <v-card-subtitle v-bind="$attrs.vBind">
    <slot name="cardSubtitleContent" />
  </v-card-subtitle>
</template>

<script>
export default {
  name: "AtomicCardSubtitle"
};
</script>

<style scoped></style>
