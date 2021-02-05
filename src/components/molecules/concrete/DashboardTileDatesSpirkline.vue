<template>
  <atomic-card-default class="mt-4 mx-auto">
    <v-sheet
      class="v-sheet--offset mx-auto pa-10"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <single-line-chart-abstract
        :categories-x="labels"
        :series-values="values"
        label-x="Datas de importações"
        label-y="Produtos importados"
        series-name="Produtos importados"
        font-color-y="#FFF"
        font-color-x="#FFF"
        common-color="#FFF"
      />
    </v-sheet>
    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">{{title}}</div>
      <div class="subheading font-weight-light grey--text">{{description}}</div>
      <v-divider class="my-2"></v-divider>
      <span class="caption grey--text font-weight-light">{{addInformation}}</span>
    </v-card-text>
  </atomic-card-default>
</template>
<script>
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import { getDeepValueByPath } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import moment from 'moment';
import SingleLineChartAbstract from '@/components/molecules/abstract/SingleLineChartAbstract';
import AtomicCardDefault from '@/components/atoms/concrete/card/AtomicCardDefault';

export default {
  name: 'DashboardTileDatesSpirkline',
  components: { AtomicCardDefault, SingleLineChartAbstract },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    addInformation: { type: String, required: false, default() { return ''; } },
    labelsPropertiesNames: { type: String, required: true },
    valuesPropertiesNames: { type: String, required: true }
  },
  data() {
    return {};
  },
  computed: {
    values() {
      const path = `${this.namespace}.${this.division}.${this.tag}`;
      const values = getDeepValueByPath(this.$store.state, path);
      if (values === undefined) return [];
      return values.map(t => parseInt(t[this.valuesPropertiesNames], 10));
    },
    labels() {
      const path = `${this.namespace}.${this.division}.${this.tag}`;
      const values = getDeepValueByPath(this.$store.state, path);
      if (values === undefined) return [];
      return values.map(t => `${moment(t[this.labelsPropertiesNames]).format('DD/MM/YYYY')}`);
    }
  },
};
</script>

<style scoped>
.v-sheet {
  position: relative;
  top: -24px;
}
</style>
