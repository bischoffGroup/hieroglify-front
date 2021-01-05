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
// import { mapActions } from 'vuex';

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
      this.$store.dispatch('abstractContext/inputs/INPUT_TEXTFIELD_ABSTRACT', { path: [this.namespace, this.division, this.fieldPath], value: event });
    },
    // ...mapActions('abstractContext/inputs', [
    //   'INPUT_TEXTFIELD_ABSTRACT',
    // ]),
  },
};
</script>

<style scoped></style>
