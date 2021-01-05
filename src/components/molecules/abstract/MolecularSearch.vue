<template>
  <atomic-text-field
    v-bind="{ ...$props, ...$attrs }"
    @atomicTextFieldCInput="atomicTextFieldCInput"
  />
</template>

<script>
import AtomicTextField from "@/components/atoms/abstract/textField/AtomicTextField";
import { NamespacePropsMixin } from "@/mixins/NamespacePropsMixin";
import { DivisionPropsMixin } from "@/mixins/DivisionPropsMixin";
import { FieldPathPropsMixin } from "@/mixins/FieldPathPropsMixin";
export default {
  name: "MolecularSearch",
  components: { AtomicTextField },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, FieldPathPropsMixin],
  props: {
    vBind: {
      type: Object,
      required: false
    },
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
    atomicTextFieldCInput(event) {
      console.log(event);
    }
  }
};
</script>

<style scoped></style>
