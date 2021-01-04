<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="3" lg="3">
        <molecular-search-add-list
          title="Lista de Produtos"
          action="translator/generateProducts"
        />
      </v-col>
      <v-col sm="12" md="9" lg="9">
        <molecular-data-table-with-card path-to-data="translator.product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MolecularSearchAddList from "@/components/molecules/MolecularSearchAddList";
import MolecularDataTableWithCard from "@/components/molecules/MolecularDataTableWithCard";
export default {
  name: "ProductSearch",
  components: { MolecularDataTableWithCard, MolecularSearchAddList }
};
</script>

<style scoped></style>
