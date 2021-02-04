<template>
  <v-card v-bind="$attrs">
    <slot />
  </v-card>
</template>

<script>
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';

export default {
  name: 'AtomicCard',
  mixins: [GetAllSlotsMixin]
};
</script>

<style scoped></style>
