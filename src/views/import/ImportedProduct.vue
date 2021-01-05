<template>
  <v-container>
    <molecular-data-table-with-card path-to-data="import.importProduct" />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import MolecularDataTableWithCard from '@/components/molecules/MolecularDataTableWithCard';

export default {
  name: 'Material',
  components: { MolecularDataTableWithCard },
  mounted() {
    this.importedProducts();
  },
  methods: {
    ...mapActions({
      importedProducts: 'import/product/generateImportedProducts',
    }),
  },
};
</script>
