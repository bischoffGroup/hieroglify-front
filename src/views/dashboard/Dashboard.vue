<template>
  <v-container>
    <v-row>
      <v-col sm="12" lg="3">
        <v-row>
          <v-col cols="12">
            <dashboard-tile-amount
                tile-color="red"
                :countable="countNotImportableProducts"
                icon="fas fa-exclamation-triangle"
                title="Produtos não importáveis"
                sub-title="Quantidade de produtos com erros na validação e que não poderão ser importados"
                :add-information="notImportableProductsAddInformation"
            />
          </v-col>
          <v-col cols="12">
            <dashboard-tile-amount
                tile-color="green"
                :countable="countImportableMaterials"
                icon="fas fa-thumbs-up"
                title="Materiais importáveis"
                sub-title="Quantidade de materiais aprovados na validação e aguardando para serem importados"
                :add-information="notImportableProductsAddInformation"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="12" lg="6" md="6">
        <molecular-tasks :namespace="namespace" :division="division" :tag="tag" />
      </v-col>
      <v-col sm="12" lg="3">
        <v-row>
          <v-col cols="12">
            <dashboard-tile-amount
                tile-color="green"
                :countable="countImportableProducts"
                title="Produtos importáveis"
                icon="fas fa-thumbs-up"
                sub-title="Quantidade de produtos aprovados na validação e aguardando para serem importados"
                :add-information="notImportableProductsAddInformation"
            />
          </v-col>
          <v-col cols="12">
            <dashboard-tile-amount
                tile-color="red"
                :countable="countNotImportableMaterials"
                icon="fas fa-exclamation-triangle"
                title="Materiais não importáveis"
                sub-title="Quantidade de materiais com erros na validação e que não poderão ser importados"
                :add-information="notImportableProductsAddInformation"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import MolecularTasks from '@/components/molecules/concrete/MolecularTasks';
import {
  IMPORT_MATERIALS_GENERATE,
  IMPORT_PRODUCTS_GENERATE,
  SYSTEM_TASK_GENERATE_TASKS
} from '@/store/modules/enums/actionTypes';
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
      importableMaterialsDivision: 'importableMaterials',
      actionNameImportMaterialsGenerate: IMPORT_MATERIALS_GENERATE,
      actionNameImportProductsGenerate: IMPORT_PRODUCTS_GENERATE
    };
  },
  mounted() {
    this.generateTasks();
    this.generateImportableProducts();
    this.generateImpotableMaterials();
  },
  computed: {
    notImportableProductsAddInformation() {
      const date = new Date();
      return `Última atualização em:  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
    countNotImportableProducts() {
      const path = `${this.importNamespace}.${this.importableProductsDivision}.notImportable.data`;
      const total = getDeepValueByPath(this.$store.state, path);
      return total.length;
    },
    countImportableProducts() {
      const path = `${this.importNamespace}.${this.importableProductsDivision}.importable.data`;
      const total = getDeepValueByPath(this.$store.state, path);
      return total.length;
    },
    countNotImportableMaterials() {
      const path = `${this.importNamespace}.${this.importableMaterialsDivision}.notImportable.data`;
      const total = getDeepValueByPath(this.$store.state, path);
      return total.length;
    },
    countImportableMaterials() {
      const path = `${this.importNamespace}.${this.importableMaterialsDivision}.importable.data`;
      const total = getDeepValueByPath(this.$store.state, path);
      return total.length;
    }
  },
  methods: {
    generateImpotableMaterials() {
      this.$store.dispatch(`${this.importNamespace}/${this.importableMaterialsDivision}/${this.actionNameImportMaterialsGenerate}`, { valid: true });
      this.$store.dispatch(`${this.importNamespace}/${this.importableMaterialsDivision}/${this.actionNameImportMaterialsGenerate}`, { valid: false });
    },
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
