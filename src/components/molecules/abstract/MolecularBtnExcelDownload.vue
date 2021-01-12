<template>
  <atomic-btn-excel-download
    :enable-icon="true"
    icon="fas fa-file-excel"
    label="Exportar Excel"
    :only-icon="true"
    v-bind="{...$attrs}"
    @atomicBtnClick="atomicBtnClick"
  />
</template>
<script>
import AtomicBtnExcelDownload from '@/components/atoms/concrete/btn/AtomicBtnExcelDownload';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import {
  ABSTRACT_BTN_EXCEL_DOWNLOAD_CLICK
} from '@hieroglify/lib-hieroglify-abstracts/src/store/DispatchesEnum';

export default {
  name: 'MolecularBtnExcelDownload',
  components: { AtomicBtnExcelDownload },
  props: {
    vBind: {
      type: Object,
    },
    fileName: {
      type: String,
      required: true,
    }
  },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  methods: {
    atomicBtnClick() {
      this.$store.dispatch(`${this.namespace}/${this.division}/${ABSTRACT_BTN_EXCEL_DOWNLOAD_CLICK}`, { path: this.tag, fileName: this.fileName });
    }
  }
};
</script>

<style scoped>

</style>
