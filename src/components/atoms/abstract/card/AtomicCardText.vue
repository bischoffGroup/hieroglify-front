<template>
  <v-card-text v-bind="$attrs.vBind">
    <slot name="cardTextContent" />
  </v-card-text>
</template>

<script>
export default {
  name: 'AtomicCardText',
};
</script>

<style scoped></style>
