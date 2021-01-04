<template>
  <atomic-text-field
    v-bind="{ ...$props, ...$attrs }"
    @atomicTextFieldChange="add"
  />
</template>

<script>
import AtomicTextField from "@/components/atoms/abstract/textField/AtomicTextField";
export default {
  components: { AtomicTextField },
  props: {
    vBind: {
      type: Object,
      required: false
    },
    executeAction: {
      type: String,
      required: true
    },
    pathToValues: {
      type: String,
      required: false,
      default: () => {
        return undefined;
      }
    }
  },
  mounted() {
    this.clear();
  },
  methods: {
    add(result) {
      this.$store.dispatch(this.executeAction, result);
    },
    clear() {
      this.$store.dispatch("clearSearchList");
    }
  }
};
</script>

<style scoped></style>
