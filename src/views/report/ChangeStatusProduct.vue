<template>
  <v-container fluid>
    <v-row>
      <v-col sm="12" md="12" lg="12">
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
                  :v-bind="{ height: 500, dense: true }"
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
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <molecular-speed-dial-download
          direction="right"
          :fling="true"
          :absolute="true"
          :left="true"
          :bottom="true"
        >
          <template #content>
            <molecular-btn-excel-download
              v-bind="{small: true, color: 'green darken-4', fab: true, dark: true}"
              :namespace="namespace"
              :division="division"
              :tag="tag"
              file-name="changeStatusProducts"
            />
          </template>
        </molecular-speed-dial-download>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MolecularDataTableWithCard from '@/components/molecules/MolecularDataTableWithCard';
import {
  REPORT_CHANGE_STATUS_PRODUCTS_GENERATE
} from '@/store/modules/enums/actionTypes';
import AtomicCardText from '@/components/atoms/abstract/card/AtomicCardText';
import AtomicDataTableDefault from '@/components/atoms/concrete/dataTable/AtomicDataTableDefault';
import MolecularSpeedDialDownload from '@/components/molecules/abstract/MolecularSpeedDialDownload';
import MolecularBtnExcelDownload from '@/components/molecules/abstract/MolecularBtnExcelDownload';

export default {
  name: 'Category',
  components: {
    MolecularBtnExcelDownload,
    MolecularSpeedDialDownload,
    AtomicDataTableDefault,
    AtomicCardText,
    MolecularDataTableWithCard
  },
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
