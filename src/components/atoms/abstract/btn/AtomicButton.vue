<template>
  <v-btn @click="click" v-bind="{ ...$attrs.vBind, ...$attrs.vBindBtn }">
    <slot name="buttonContent" />
  </v-btn>
</template>

<script>
export default {
  name: 'AtomicButton',
  props: {},
  methods: {
    click() {
      this.$emit('atomicBtnClick');
    },
  },
};
</script>

<style scoped></style>
