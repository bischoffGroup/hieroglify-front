<template>
  <atomic-button
    v-show="display"
    title="gerar"
    v-bind="{ ...$props, ...$attrs }"
    @atomicBtnClick="execute"
  >
    <template v-slot:buttonContent>
      <p v-if="title !== undefined">{{ titleValidation }}</p>
      <atomic-icon
        v-if="icon !== undefined"
        :icon="icon"
        v-bind="{ ...$props, ...$attrs }"
      />
    </template>
  </atomic-button>
</template>

<script>
import AtomicButton from '@/components/atoms/abstract/btn/AtomicButton';
import AtomicIcon from '@/components/atoms/abstract/icon/AtomicIcon';

export default {
  components: { AtomicIcon, AtomicButton },
  props: {
    vBind: {
      type: Object,
      required: false,
    },
    executeAction: {
      type: String,
      required: true,
    },
    valueToAction: {
      required: false,
    },
    pathToValues: {
      type: String,
      required: false,
      default: () => undefined,
    },
    displayWithConditionPopulated: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: () => undefined,
    },
    icon: {
      type: String,
      required: false,
      default: () => undefined,
    },
  },
  computed: {
    display() {
      if (!this.displayWithConditionPopulated) return true;
      return this.getValueFromStoreWithPath().length > 0;
    },
    titleValidation() {
      return this.pathToValues !== undefined && this.valueToAction !== undefined
        ? 'ERROR'
        : this.title;
    },
  },
  methods: {
    execute() {
      if (this.titleValidation !== 'ERROR') {
        if (this.valueToAction !== undefined) {
          this.$store.dispatch(`${this.executeAction}`, this.valueToAction);
        } else if (this.pathToValues !== undefined) {
          const values = this.getValueFromStoreWithPath();
          this.$store.dispatch(`${this.executeAction}`, values);
        } else {
          this.$store.dispatch(`${this.executeAction}`);
        }
      }
    },
    getValueFromStoreWithPath() {
      return this.pathToValues.split('.').reduce((o, k) => o && o[k], this.$store.state);
    },
  },
};
</script>

<style scoped></style>
