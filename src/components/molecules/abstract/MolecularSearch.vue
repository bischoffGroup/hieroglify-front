<template>
  <atomic-text-field
    v-bind="{ ...$props, ...$attrs }"
    @atomicTextFieldInput="atomicTextFieldInput"
  />
</template>

<script>
import AtomicTextField from '@/components/atoms/abstract/textField/AtomicTextField';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { FieldPathPropsMixin } from '@/mixins/FieldPathPropsMixin';
import { ABSTRACT_TEXT_FIELD_INPUT } from '@hieroglify/lib-hieroglify-abstracts/src/store/DispatchesEnum';

export default {
  name: 'MolecularSearch',
  components: { AtomicTextField },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, FieldPathPropsMixin],
  props: {
    vBind: {
      type: Object,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    clearModelAfterSearch: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    atomicTextFieldInput(event) {
      this.$store.dispatch(`${this.namespace}/${this.division}/${ABSTRACT_TEXT_FIELD_INPUT}`,
        { path: [this.fieldPath], value: event });
    },
  },
};
</script>

<style scoped></style>
