export default {
  name: 'GetAllSlotsMixin',
  computed: {
    slotsGetAllSlots() {
      return Object.keys({ ...this.$slots, ...this.$scopedSlots });
    }
  }
};
