<template>
  <v-container>
    <molecular-data-table-with-card
      :search-label="search"
      :namespace="namespace"
      :division="division"
      :title="title"
      :tag="tag"
    >
      <template #contentDataTable>
        <atomic-card-text>
          <template #cardTextContent>
            <atomic-data-table-default
              :v-bind="{ height: 360, dense: true }"
              :namespace="namespace"
              :division="division"
              :tag="tag"
              class="elevation-1"
            >
              <template v-slot:item._LINX_CHANGE_STATUS="{ item }">
                <v-chip :color="getColor(item._LINX_CHANGE_STATUS)" dark>{{getLabel(item._LINX_CHANGE_STATUS)}}</v-chip>
              </template>
            </atomic-data-table-default>
          </template>
        </atomic-card-text>
      </template>
    </molecular-data-table-with-card>
  </v-container>
</template>
<script>
import MolecularDataTableWithCard from '@/components/molecules/MolecularDataTableWithCard';
import {
  REPORT_CHANGE_STATUS_PRODUCTS_GENERATE
} from '@/store/modules/enums/actionTypes';
import AtomicCardText from '@/components/atoms/abstract/card/AtomicCardText';
import AtomicDataTableDefault from '@/components/atoms/concrete/dataTable/AtomicDataTableDefault';

export default {
  name: 'Category',
  components: { AtomicDataTableDefault, AtomicCardText, MolecularDataTableWithCard },
  data() {
    return {
      namespace: 'report',
      division: 'changeStatusProducts',
      tag: 'data',
      actionName: REPORT_CHANGE_STATUS_PRODUCTS_GENERATE,
      search: 'Buscar Produtos',
      title: 'produtos com status alterados',
    };
  },
  mounted() {
    this.generateCategories();
  },
  methods: {
    getColor(_LINX_CHANGE_STATUS) {
      return (_LINX_CHANGE_STATUS) ? 'green' : 'red';
    },
    getLabel(_LINX_CHANGE_STATUS) {
      return (_LINX_CHANGE_STATUS) ? 'Alteração efetuada' : 'Alteração pendente';
    },
    generateCategories() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`,
      );
    },
  },
};
</script>

<style scoped></style>
