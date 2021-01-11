<template>
  <v-data-table v-bind="$attrs.vBind" :headers="headers" :items="items" :search="search">
    <template v-slot:header>
      <slot name="header" />
    </template>
    <template v-slot:footer>
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
  </v-data-table>
</template>

<script>
import { AtomicTablePropsMixin } from '@/mixins/AtomicTablePropsMixin';
import GetAllSlotsMixin from '@/mixins/GetAllSlotsMixin';

export default {
  name: 'AtomicDataTable',
  mixins: [AtomicTablePropsMixin, GetAllSlotsMixin],
};
</script>

<style scoped></style>
