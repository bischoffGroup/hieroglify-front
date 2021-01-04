<template>
  <v-container>
    <v-row v-if="notImportedMaterialsCategories.length > 0">
      <v-col
        v-for="category in notImportedMaterialsCategories"
        :key="category.id"
        cols="12"
        sm="12"
        md="6"
        lg="6"
      >
        <v-card>
          <v-card-title class="text-uppercase">
            {{ category.text }}
          </v-card-title>
          <v-card-text>
            <molecular-data-table-with-card
              path-to-data="import.importMaterial"
              :full-path-to-data="path(category.text)"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MolecularDataTableWithCard from "@/components/molecules/MolecularDataTableWithCard";
export default {
  name: "NotImportedMaterial",
  components: { MolecularDataTableWithCard },
  mounted() {
    this.notImportedMaterials();
  },
  computed: {
    ...mapGetters({
      notImportedMaterialsCategories: "import/notImportedMaterialsCategories"
    })
  },
  methods: {
    ...mapActions({
      notImportedMaterials: "import/material/generateNotImportedMaterials"
    }),
    path(stringPath) {
      return `import.importMaterial.data.${stringPath}`;
    }
  }
};
</script>

<style scoped></style>
