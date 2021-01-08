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
import { FROM_SIZES_GENERATE_SIZES } from '@/store/modules/enums/actionTypes';

export default {
  name: 'Size',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'sizes',
      tag: 'data',
      actionName: FROM_SIZES_GENERATE_SIZES,
      search: 'Buscar Tamanhos',
      title: 'tamanhos',
    };
  },
  mounted() {
    this.generateSizes();
  },
  methods: {
    generateSizes() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
