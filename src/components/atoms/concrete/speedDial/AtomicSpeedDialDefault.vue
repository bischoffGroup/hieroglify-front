<template>
  <atomic-speed-dial v-bind="{ ...$props, ...$attrs }"  >
    <template v-slot:activator>
      <slot name="activatorContent" />
    </template>
    <template v-slot:content>
      <slot name="speedDialContent" />
    </template>
  </atomic-speed-dial>
</template>

<script>
import AtomicSpeedDial from '@/components/atoms/abstract/speedDial/AtomicSpeedDial';
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';
import { AtomicSpeedDialPropsMixin } from '@/mixins/AtomicSpeedDialPropsMixin';

export default {
  name: 'AtomicSpeedDialDefault',
  components: {
    AtomicSpeedDial
  },
  mixins: [GetAllSlotsMixin, AtomicSpeedDialPropsMixin],
  props: {
    vBind: {
      type: Object,
      required: false
    }
  },
};
</script>

<style scoped></style>
