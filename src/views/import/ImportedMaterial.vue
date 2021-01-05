<template>
  <v-container>
    <molecular-data-table-with-card path-to-data="import.importMaterial" />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import MolecularDataTableWithCard from '@/components/molecules/MolecularDataTableWithCard';

export default {
  name: 'Material',
  components: { MolecularDataTableWithCard },
  mounted() {
    this.clear();
    this.importedMaterials();
  },
  methods: {
    ...mapActions({
      importedMaterials: 'import/material/generateImportedMaterials',
      clear: 'import/material/clearState',
    }),
  },
};
</script>
