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
import { FROM_GRIDS_GENERATE_GRIDS } from '@/store/modules/enums/actionTypes';

export default {
  name: 'Grid',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'grids',
      tag: 'data',
      actionName: FROM_GRIDS_GENERATE_GRIDS,
      search: 'Buscar Grades',
      title: 'grades',
    };
  },
  mounted() {
    this.generateGrids();
  },
  methods: {
    generateGrids() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
