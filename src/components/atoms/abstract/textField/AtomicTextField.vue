<template>
  <v-text-field
    v-bind="{ ...$props, ...$attrs }"
    v-model="atomicTextFieldModel"
    @input="input"
  />
</template>

<script>
export default {
  name: "AtomicTextField",
  data: () => ({
    atomicTextFieldModel: null
  }),
  props: {
    label: {
      type: String,
      required: true
    },
    clearModelAfterSearch: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    input() {
      this.$emit("atomicTextFieldInput", this.atomicTextFieldModel);
      if (this.clearModelAfterSearch) this.atomicTextFieldModel = null;
    }
  }
};
</script>

<style scoped></style>
