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
  FROM_COLLECTIONS_GENERATE_COLLECTIONS
} from '@/store/modules/enums/actionTypes';

export default {
  name: 'Collection',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'collections',
      tag: 'data',
      actionName: FROM_COLLECTIONS_GENERATE_COLLECTIONS,
      search: 'Buscar Coleções',
      title: 'coleções',
    };
  },
  mounted() {
    this.generateCollections();
  },
  methods: {
    generateCollections() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
