<template>
  <atomic-speed-dial-default v-bind="{ ...$props, ...$attrs }"  @click="click">
    <template #activatorContent>
      <atomic-btn-default
        :only-icon="true"
        :enable-icon="true"
        icon="fas fa-download"
        v-bind="{fab: true, color: 'blue darken-4', dark: true,  }"
      />
    </template>
    <template #speedDialContent>
      <slot name="content" />
    </template>
  </atomic-speed-dial-default>
</template>

<script>

import AtomicSpeedDialDefault from '@/components/atoms/concrete/speedDial/AtomicSpeedDialDefault';
import AtomicBtnDefault from '@/components/atoms/concrete/btn/AtomicBtnDefault';
import { AtomicSpeedDialPropsMixin } from '@/mixins/AtomicSpeedDialPropsMixin';

export default {
  name: 'MolecularSpeedDialDownload',
  components: { AtomicBtnDefault, AtomicSpeedDialDefault },
  props: {
    vBind: {
      type: Object,
      required: false,
    },
  },
  mixins: [AtomicSpeedDialPropsMixin],
  methods: {
    click() {
    }
  }
};
</script>

<style scoped>

</style>
