<template>
  <div>
    <v-checkbox
      :label="label"
      v-bind="$attrs.vBind"
      :input-value="model"
      @change="$emit('change', !model)"
    />
  </div>
</template>

<script>
import { NamespacePropsMixin } from "@/mixins/NamespacePropsMixin";
import { DivisionPropsMixin } from "@/mixins/DivisionPropsMixin";
import { TagPropsMixin } from "@/mixins/TagPropsMixin";
import { FieldPathPropsMixin } from "@/mixins/FieldPathPropsMixin";
import valuesFromStoreMixin from "@/mixins/valuesFromStoreMixin";

export default {
  name: "AtomicCheckbox",
  props: {
    label: {
      type: String,
      required: true
    }
  },
  mixins: [
    NamespacePropsMixin,
    DivisionPropsMixin,
    TagPropsMixin,
    FieldPathPropsMixin,
    valuesFromStoreMixin
  ],
  data() {
    return {};
  },
  computed: {
    state() {
      return this.$store.state[this.namespace];
    },
    model() {
      return this.getValueFromStoreWithStringPath(
        `${this.namespace}.${this.division}.${this.tag}.${this.fieldPath}`
      );
    }
  }
};
</script>

<style scoped></style>
