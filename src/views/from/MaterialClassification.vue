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
  FROM_MATERIAL_CLASSIFICATIONS_GENERATE_MATERIAL_CLASSIFICATIONS
} from '@/store/modules/enums/actionTypes';

export default {
  name: 'MaterialClassification',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'materialClassifications',
      tag: 'data',
      actionName: FROM_MATERIAL_CLASSIFICATIONS_GENERATE_MATERIAL_CLASSIFICATIONS,
      search: 'Buscar Classif. Material',
      title: 'classif. materiais',
    };
  },
  mounted() {
    this.generateMaterialClassification();
  },
  methods: {
    generateMaterialClassification() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
