<template>
  <atomic-button v-bind="{ ...$props, ...$attrs }" @atomicBtnClick="click">
    <template v-slot:buttonContent>
      <slot name="buttonContent" />
    </template>
  </atomic-button>
</template>

<script>
import AtomicButton from '@/components/atoms/abstract/btn/AtomicButton';

export default {
  name: 'AtomicBtnDefault',
  components: { AtomicButton },
  extends: AtomicButton,
  props: {
    vBind: {
      type: Object,
      required: false
    }
  },
  methods: {
    click() {
      this.$emit('click', 'click');
    }
  }
};
</script>

<style scoped></style>
