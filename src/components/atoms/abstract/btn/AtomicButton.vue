<template>
  <v-btn @click="click" v-bind=" {...$attrs}" class="ma-2">
    <v-icon dark v-if="enableIcon">{{icon}}</v-icon>
    {{ (onlyIcon) ? '' : label }}
  </v-btn>
</template>

<script>
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';
import { AtomicButtonPropsMixin } from '@/mixins/AtomicButtonPropsMixin';

export default {
  name: 'AtomicButton',
  mixins: [GetAllSlotsMixin, AtomicButtonPropsMixin],
  methods: {
    click() {
      this.$emit('atomicBtnClick');
    },
  },
};
</script>

<style scoped></style>
