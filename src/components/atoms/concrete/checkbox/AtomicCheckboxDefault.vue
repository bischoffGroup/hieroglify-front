<template>
  <atomic-checkbox
    v-bind="{ ...$props, ...$attrs }"
    :label="label"
    @change="checkboxChange"
  />
</template>

<script>
import AtomicCheckbox from '@/components/atoms/abstract/checkbox/AtomicCheckbox';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import { FieldPathPropsMixin } from '@/mixins/FieldPathPropsMixin';
import { DtoPropsMixin } from '@/mixins/DtoPropsMixin';

export default {
  name: 'AtomicCheckboxDefault',
  components: { AtomicCheckbox },
  mixins: [
    NamespacePropsMixin,
    DivisionPropsMixin,
    TagPropsMixin,
    FieldPathPropsMixin,
    DtoPropsMixin,
  ],
  props: {
    vBind: {
      type: Object,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    checkboxChange(event) {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/DEFAULT_CHECKBOX`,
        { value: event, dto: this.dto },
      );
    },
  },
};
</script>

<style scoped></style>
