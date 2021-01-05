<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="3" lg="3">
        <molecular-search-add-list
          title="Lista de Produtos"
          action="translator/generateProductsInformation"
        />
      </v-col>
      <v-col sm="12" md="9" lg="9">
        <molecular-data-table-with-card
          path-to-data="translator.productInformation"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MolecularSearchAddList from "@/components/molecules/MolecularSearchAddList";
import MolecularDataTableWithCard from "@/components/molecules/MolecularDataTableWithCard";
export default {
  components: {
    MolecularDataTableWithCard,
    MolecularSearchAddList
  },
  data: () => ({
    pathToData: "translator.productInformation.commonData",
    actionsToFiles: [
      {
        type: "xlsx",
        action: "translator/productsInformationXlsx"
      }
    ]
  })
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
