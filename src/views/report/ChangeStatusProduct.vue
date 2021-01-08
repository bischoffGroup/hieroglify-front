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
import {
  REPORT_CHANGE_STATUS_PRODUCTS_GENERATE
} from '@/store/modules/enums/actionTypes';

export default {
  name: 'Category',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'report',
      division: 'changeStatusProducts',
      tag: 'data',
      actionName: REPORT_CHANGE_STATUS_PRODUCTS_GENERATE,
      search: 'Buscar Produtos',
      title: 'produtos com status alterados',
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
