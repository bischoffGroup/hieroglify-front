<template>
  <v-container>
    <molecular-data-table-with-card
      :namespace="namespace"
      :division="division"
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
      actionName: FROM_SUPPLIERS_GENERATE_SUPPLIERS
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
