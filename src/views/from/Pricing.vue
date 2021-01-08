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
import { FROM_PRINCINGS_GENERATE_PRINCINGS } from '@/store/modules/enums/actionTypes';

export default {
  name: 'Pricing',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'pricings',
      tag: 'data',
      actionName: FROM_PRINCINGS_GENERATE_PRINCINGS,
      search: 'Buscar Preços',
      title: 'preços',
    };
  },
  mounted() {
    this.generatePricings();
  },
  methods: {
    generatePricings() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
