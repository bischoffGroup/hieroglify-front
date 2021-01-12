export const AtomicSpeedDialPropsMixin = {
  props: {
    direction: {
      type: String,
      required: false,
      default: () => 'top'
    },
    fling: {
      type: Boolean,
      required: true,
    },
    hover: {
      type: Boolean,
      required: false,
      default: () => false
    },
    absolute: {
      type: Boolean,
      required: false,
      default: () => false
    },
    top: {
      type: Boolean,
      required: false,
      default: () => false
    },
    right: {
      type: Boolean,
      required: false,
      default: () => false
    },
    bottom: {
      type: Boolean,
      required: false,
      default: () => false
    },
    left: {
      type: Boolean,
      required: false,
      default: () => false
    },
  }
};
