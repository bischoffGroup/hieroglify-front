<template>
  <v-container>
    <v-row v-if="notImportedProductsCategories.length > 0">
      <v-col
        v-for="category in notImportedProductsCategories"
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
              path-to-data="import.importProduct"
              :full-path-to-data="path(category.text)"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MolecularDataTableWithCard from '@/components/molecules/MolecularDataTableWithCard';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NotImportedProduct',
  components: { MolecularDataTableWithCard },
  mounted() {
    this.notImportedProducts();
  },
  computed: {
    ...mapGetters({
      notImportedProductsCategories: 'import/notImportedProductsCategories',
    }),
  },
  methods: {
    ...mapActions({
      notImportedProducts: 'import/product/generateNotImportedProducts',
    }),
    path(stringPath) {
      return `import.importProduct.data.${stringPath}`;
    },
  },
};
</script>

<style scoped></style>
