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
import { FROM_LAUNCHIES_GENERATE_LAUNCHIES } from '@/store/modules/enums/actionTypes';

export default {
  name: 'Launch',
  components: { MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'from',
      division: 'launchies',
      tag: 'data',
      actionName: FROM_LAUNCHIES_GENERATE_LAUNCHIES,
      search: 'Buscar Lançamentos',
      title: 'lançamentos',
    };
  },
  mounted() {
    this.generateLaunchies();
  },
  methods: {
    generateLaunchies() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
