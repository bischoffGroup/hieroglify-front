<template>
  <atomic-data-table
    v-bind="{ ...$props, ...$attrs }"
    :headers="headers"
    :items="items"
  >
    <template #header>
      <slot name="header" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </atomic-data-table>
</template>

<script>
import AtomicDataTable from "@/components/atoms/abstract/dataTable/AtomicDataTable";
import { NamespacePropsMixin } from "@/mixins/NamespacePropsMixin";
import { DivisionPropsMixin } from "@/mixins/DivisionPropsMixin";
import { TagPropsMixin } from "@/mixins/TagPropsMixin";
import valuesFromStoreMixin from "@/mixins/valuesFromStoreMixin";
export default {
  name: "AtomicDataTableDefault",
  components: { AtomicDataTable },
  mixins: [
    NamespacePropsMixin,
    DivisionPropsMixin,
    TagPropsMixin,
    valuesFromStoreMixin
  ],
  props: {
    vBind: {
      type: Object,
      required: false
    }
  },
  computed: {
    headers() {
      return this.getValueFromStoreWithStringPath(
        `${this.namespace}.${this.division}.columnNames`
      );
    },
    items() {
      return this.getValueFromStoreWithStringPath(
        `${this.namespace}.${this.division}.data`
      );
    }
  },
  methods: {
    isNumber(value) {
      return value.match(/^[0-9]+$/) !== null;
    }
  }
};
</script>

<style scoped></style>
