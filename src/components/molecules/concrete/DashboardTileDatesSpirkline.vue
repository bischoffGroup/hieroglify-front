<template>
  <v-card
    class="mt-4 mx-auto"
  >
    <v-sheet
      class="v-sheet--offset mx-auto pa-10"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <apexchart width="100%" height="400"   type="line" :options="options" :series="values"  />
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        User Registrations
      </div>
      <div class="subheading font-weight-light grey--text">
        Last Campaign Performance
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template>
<script>
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import { getDeepValueByPath } from '@hieroglify/lib-commons/src/utils/ObjUtils';
import moment from 'moment';

export default {
  name: 'DashboardTileDatesSpirkline',
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  props: {
    labelsPropertiesNames: {
      type: String,
      required: true
    },
    valuesPropertiesNames: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'series-2',
        data: [20, 45, 50, 55, 49, 60, 70, 91]
      }
      ]
    };
  },
  computed: {
    options() {
      return {
        xaxis: {
          categories: [...this.labels()],
          labels: {
            style: {
              colors: '#FFF'
            }
          },
          title: {
            text: 'Períodos de importação',
            style: {
              color: '#FFF',
            }
          }
        },
        colors: ['#FFF'],
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#FFF'
            },
            labels: {
              style: {
                colors: '#FFF'
              }
            },
            title: {
              text: 'Produtos importados',
              style: {
                color: '#FFF',
              }
            }
          }
        ]
      };
    },
    values() {
      const path = `${this.namespace}.${this.division}.${this.tag}`;
      const values = getDeepValueByPath(this.$store.state, path);
      if (values === undefined) return [];
      // return values.map(t => parseInt(t[this.valuesPropertiesNames], 10));
      return [{
        name: 'importProducts',
        data: [...values.map(t => parseInt(t[this.valuesPropertiesNames], 10))]
      }];
    }
  },
  methods: {
    labels() {
      const path = `${this.namespace}.${this.division}.${this.tag}`;
      const values = getDeepValueByPath(this.$store.state, path);
      if (values === undefined) return [];
      return values.map(t => `${moment(t[this.labelsPropertiesNames]).format('DD/MM/YYYY')}`);
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
