<template>
  <v-data-table v-bind="$attrs.vBind" :headers="headers" :items="items">
    <template v-slot:header>
      <slot name="header" />
    </template>
    <template v-slot:footer>
      <slot name="footer" />
    </template>
  </v-data-table>
</template>

<script>
import { AtomicTablePropsMixin } from '@/mixins/AtomicTablePropsMixin';

export default {
  name: 'AtomicDataTable',
  mixins: [AtomicTablePropsMixin],
};
</script>

<style scoped></style>
