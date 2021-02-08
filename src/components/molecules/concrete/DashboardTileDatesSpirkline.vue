<template>
  <atomic-card-default class="mt-4 mx-auto">
    <v-sheet
      class="v-sheet--offset mx-auto pa-10"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-row>
        <v-col class="d-flex">
          <dot-color-picker-abstract
            type-return="hexa"
            :rapid-refresh="false"
            @dotColorPickerAbstractEvent="showColor"
          />
        </v-col>
      </v-row>
      <single-line-chart-abstract
        :categories-x="labels"
        :series-values="values"
        :label-x="labelX"
        :label-y="labelY"
        :series-name="seriesName"
        width="100%"
        height="400px"
        :font-color-y="colorPicker"
        :font-color-x="colorPicker"
        :common-color="colorPicker"
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
import DotColorPickerAbstract from '@/components/molecules/abstract/DotColorPickerAbstract';

export default {
  name: 'DashboardTileDatesSpirkline',
  components: { DotColorPickerAbstract, AtomicCardDefault, SingleLineChartAbstract },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    addInformation: { type: String, required: false, default() { return ''; } },
    labelsPropertiesNames: { type: String, required: true },
    valuesPropertiesNames: { type: String, required: true },
    labelX: { type: String, required: false },
    labelY: { type: String, required: false },
    seriesName: { type: String, required: false }
  },
  data() {
    return {
      colorPicker: ''
    };
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
  methods: {
    showColor(ev) {
      this.colorPicker = ev;
    }
  }
};
</script>

<style scoped>
.v-sheet {
  position: relative;
  top: -24px;
}
</style>
