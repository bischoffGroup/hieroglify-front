<template>
  <v-container>
    <molecular-data-table-with-card path-to-data="from.fromMaterial" />
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import MolecularDataTableWithCard from "@/components/molecules/MolecularDataTableWithCard";
export default {
  name: "Material",
  components: { MolecularDataTableWithCard },
  mounted() {
    this.grouping();
  },
  methods: {
    ...mapActions({
      grouping: "from/generateMaterialGroupings"
    })
  }
};
</script>
