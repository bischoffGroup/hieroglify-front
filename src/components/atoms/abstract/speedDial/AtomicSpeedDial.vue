<template>
  <v-speed-dial
    v-model="fabModel"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
    :absolute="absolute"
  >
    <template #activator>
      <slot name="activator" :props="fabModel"/>
    </template>
    <slot name="content" />
  </v-speed-dial>
</template>

<script>
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';
import { AtomicSpeedDialPropsMixin } from '@/mixins/AtomicSpeedDialPropsMixin';

export default {
  name: 'AtomicSpeedDial',
  mixins: [GetAllSlotsMixin, AtomicSpeedDialPropsMixin],
  data: () => ({
    fabModel: false,
    transition: 'slide-x-reverse-transition',
  }),
};
</script>

<style scoped></style>
