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
  FROM_COLORS_GENERATE_COLORS
} from '@/store/modules/enums/actionTypes';

export default {
  name: 'Color',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'colors',
      tag: 'data',
      actionName: FROM_COLORS_GENERATE_COLORS,
      search: 'Buscar Cores',
      title: 'cores',
    };
  },
  mounted() {
    this.generateColors();
  },
  methods: {
    generateColors() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
