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
import MolecularDataTableWithCard from '@/components/molecules/MolecularDataTableWithCard';
import { FROM_CATEGORIES_GENERATE_CATEGORIES } from '@/store/modules/enums/actionTypes';

export default {
  name: 'Category',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'categories',
      tag: 'data',
      actionName: FROM_CATEGORIES_GENERATE_CATEGORIES,
      search: 'Buscar Categorias',
      title: 'categorias',
    };
  },
  mounted() {
    this.generateCategories();
  },
  methods: {
    generateCategories() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
