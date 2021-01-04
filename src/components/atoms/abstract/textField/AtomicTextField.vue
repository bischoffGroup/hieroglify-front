<template>
  <v-text-field
    v-bind="$attrs.vBind"
    v-model="atomicTextFieldModel"
    @change="change"
  />
</template>

<script>
export default {
  name: "AtomicTextField",
  data: () => ({
    atomicTextFieldModel: null
  }),
  methods: {
    change() {
      this.$emit("atomicTextFieldChange", this.atomicTextFieldModel);
      this.atomicTextFieldModel = null;
    }
  }
};
</script>

<style scoped></style>
