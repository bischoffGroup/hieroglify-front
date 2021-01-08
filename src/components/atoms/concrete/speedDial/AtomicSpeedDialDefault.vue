<template>
  <atomic-speed-dial v-bind="{ ...$props, ...$attrs }">
    <template v-slot:activator>
      <slot name="speedDialActivator">
        <atomic-btn-default
          :v-bind="{
            circle: true,
            fab: true,
            color: 'blue darken-2',
            dark: true
          }"
        >
          <template v-slot:buttonContent>
            <atomic-icon icon="fas fa-question" />
          </template>
        </atomic-btn-default>
      </slot>
    </template>
    <template v-slot:speedContent>
      <slot name="speedDialContent" />
    </template>
  </atomic-speed-dial>
</template>

<script>
import AtomicSpeedDial from '@/components/atoms/abstract/speedDial/AtomicSpeedDial';
import AtomicBtnDefault from '@/components/atoms/concrete/btn/AtomicBtnDefault';
import AtomicIcon from '@/components/atoms/abstract/icon/AtomicIcon';

export default {
  name: 'AtomicSpeedDialDefault',
  components: {
    AtomicIcon,
    AtomicBtnDefault,
    AtomicSpeedDial
  },
  props: {
    vBind: {
      type: Object,
      required: false
    }
  }
};
</script>

<style scoped></style>
