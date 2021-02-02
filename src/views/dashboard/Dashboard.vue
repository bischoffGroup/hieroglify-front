<template>
  <v-container>
    <v-row>
      <v-col sm="12" lg="4" md="4">
        <molecular-tasks :namespace="namespace" :division="division" :tag="tag" />
      </v-col>
      <v-col sm="12" lg="3">
        <dashboard-tile-amount
          tile-color="red"
          :countable="countNotImportableProducts"
          title="Produtos não importáveis"
          sub-title="Quantidade de produtos que não passaram na validação"
          :add-information="notImportableProductsAddInformation"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MolecularTasks from '@/components/molecules/concrete/MolecularTasks';
import { IMPORT_PRODUCTS_GENERATE, SYSTEM_TASK_GENERATE_TASKS } from '@/store/modules/enums/actionTypes';
import { STORE_MAIN_IMPORTABLE_MODULE } from '@/store/StoreNamesEnum';
import DashboardTileAmount from '@/components/molecules/concrete/DashboardTileAmount';
import { getDeepValueByPath } from '@hieroglify/lib-commons/src/utils/ObjUtils';

export default {
  components: { DashboardTileAmount, MolecularTasks },
  data() {
    return {
      namespace: 'system',
      division: 'tasks',
      tag: 'data',
      actionName: SYSTEM_TASK_GENERATE_TASKS,
      importNamespace: STORE_MAIN_IMPORTABLE_MODULE,
      importableProductsDivision: 'importableProducts',
      actionNameImportProductsGenerate: IMPORT_PRODUCTS_GENERATE
    };
  },
  mounted() {
    this.generateTasks();
    this.generateImportableProducts();
  },
  computed: {
    notImportableProductsAddInformation() {
      const date = new Date();
      return `Última atualização em:  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    },
    countNotImportableProducts() {
      const path = `${this.importNamespace}.${this.importableProductsDivision}.notImportable.data`;
      const total = getDeepValueByPath(this.$store.state, path);
      return total.length;
    }
  },
  methods: {
    generateImportableProducts() {
      this.$store.dispatch(`${this.importNamespace}/${this.importableProductsDivision}/${this.actionNameImportProductsGenerate}`, { valid: true });
      this.$store.dispatch(`${this.importNamespace}/${this.importableProductsDivision}/${this.actionNameImportProductsGenerate}`, { valid: false });
    },
    generateTasks() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`
      );
    },

  },
};
</script>
