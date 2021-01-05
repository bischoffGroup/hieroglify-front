<template>
  <atomic-card v-bind="{ ...$props, ...$attrs }">
    <template v-slot:cardContent>
      <slot name="cardTitle"></slot>
      <slot name="cardContent"></slot>
      <slot name="cardActions"></slot>
    </template>
  </atomic-card>
</template>

<script>
import AtomicCard from "@/components/atoms/abstract/card/AtomicCard";
export default {
  name: "AtomicCardDefault",
  components: { AtomicCard }
};
</script>

<style scoped></style>
