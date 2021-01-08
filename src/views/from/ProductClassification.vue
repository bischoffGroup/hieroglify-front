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
  FROM_PRODUCT_CLASSIFICATIONS_GENERATE_PRODUCT_CLASSIFICATIONS
} from '@/store/modules/enums/actionTypes';

export default {
  name: 'ProductClassification',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'productClassifications',
      tag: 'data',
      actionName: FROM_PRODUCT_CLASSIFICATIONS_GENERATE_PRODUCT_CLASSIFICATIONS,
      search: 'Buscar Classif. Produto',
      title: 'classif. produtos',
    };
  },
  mounted() {
    this.generateProductClassif();
  },
  methods: {
    generateProductClassif() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
