export const AtomicTablePropsMixin = {
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: true
    }
  }
};
