<template>
  <v-container>
    <molecular-data-table-with-card
      :search-label="search"
      :namespace="namespace"
      :division="division"
      :title="title"
      :tag="tag"
    />
  </v-container>
</template>
<script>
import MolecularDataTableWithCard from "@/components/molecules/MolecularDataTableWithCard";
import { FROM_SUPPLIERS_GENERATE_SUPPLIERS } from "@/store/types/actionTypes";

export default {
  name: "Supplier",
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: "from",
      division: "supplier",
      tag: "data",
      actionName: FROM_SUPPLIERS_GENERATE_SUPPLIERS,
      search: "Buscar Fornecedores",
      title: "fornecedores"
    };
  },
  mounted() {
    this.generateSuppliers();
  },
  methods: {
    generateSuppliers() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`
      );
    }
  }
};
</script>

<style scoped></style>
