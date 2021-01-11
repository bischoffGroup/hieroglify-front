<template>
  <atomic-data-table
    v-bind="{ ...$props, ...$attrs }"
    :headers="headers"
    :items="items"
    :search="search"
  >
    <template #header>
      <slot name="header" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
    <template
      v-for="slot in slotsGetAllSlots"
      :slot="slot"
      slot-scope="props"
    >
      <slot
        :name="slot"
        v-bind="props"
      />
    </template>
  </atomic-data-table>
</template>

<script>
import AtomicDataTable from '@/components/atoms/abstract/dataTable/AtomicDataTable';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import valuesFromStoreMixin from '@/mixins/valuesFromStoreMixin';
import { capitalizeFirstLetter } from '@hieroglify/lib-commons/src/utils/StringsUtils';
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';

export default {
  name: 'AtomicDataTableDefault',
  components: { AtomicDataTable },
  mixins: [
    NamespacePropsMixin,
    DivisionPropsMixin,
    TagPropsMixin,
    valuesFromStoreMixin,
    GetAllSlotsMixin
  ],
  props: {
    vBind: {
      type: Object,
      required: false,
    },
  },
  computed: {
    headers() {
      return this.getValueFromStoreWithStringPath(
        `${this.namespace}.${this.division}.columnNames`,
      );
    },
    items() {
      return this.getValueFromStoreWithStringPath(
        `${this.namespace}.${this.division}.data`,
      );
    },
    search() {
      return this.getValueFromStoreWithStringPath(`${this.namespace}.${this.division}.search${capitalizeFirstLetter(this.division)}`);
    }
  },
  methods: {
    isNumber(value) {
      return value.match(/^[0-9]+$/) !== null;
    },
  },
};
</script>

<style scoped></style>
