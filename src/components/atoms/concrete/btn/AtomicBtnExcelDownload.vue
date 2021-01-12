<template>
  <atomic-button  v-bind="{ ...$props, ...$attrs }" @atomicBtnClick="click">
    <template
      v-for="slot in slotsGetAllSlots"
      :slot="slot"
      slot-scope="props"
    >
      <slot
        :name="slot"
        v-bind="props"
      />
    </template>
  </atomic-button>
</template>
<script>
import AtomicButton from '@/components/atoms/abstract/btn/AtomicButton';
import { AtomicButtonPropsMixin } from '@/mixins/AtomicButtonPropsMixin';
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';

export default {
  name: 'AtomicBtnExcelDownload',
  components: { AtomicButton },
  mixins: [AtomicButtonPropsMixin, GetAllSlotsMixin],
  methods: {
    click() {
      this.$emit('atomicBtnClick');
    }
  }
};
</script>

<style scoped>

</style>
