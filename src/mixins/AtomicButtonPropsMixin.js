export const AtomicButtonPropsMixin = {
  props: {
    enableIcon: {
      type: Boolean,
      required: true
    },
    icon: {
      type: String,
      required: true,
    },
    onlyIcon: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: () => 'DEFAULT_BUTTON'
    },
    absolute: {
      type: Boolean,
      required: false,
      default: () => false
    },
  }
};
