<template>
  <apexchart :width="width" :height="height"   type="line" :options="options" :series="values"   />
</template>

<script>
export default {
  name: 'SingleLineChartAbstract',
  props: {
    width: { type: [String, Number], required: true },
    height: { type: [String, Number], required: true },
    labelY: { type: String, required: false, default() { return ''; } },
    labelX: { type: String, required: false, default() { return ''; } },
    fontColorY: { type: String, required: true },
    fontColorX: { type: String, required: true },
    categoriesX: { type: [Object, Array], required: true },
    commonColor: { type: String, required: true },
    seriesName: { type: String, required: true },
    seriesValues: { type: Array, required: true }
  },
  computed: {
    values() {
      return [{ name: this.seriesName, data: this.seriesValues }];
    },
    options() {
      return {
        xaxis: {
          categories: [...this.categoriesX],
          labels: {
            style: {
              colors: this.fontColorX
            }
          },
          title: {
            text: this.labelX,
            style: {
              color: this.fontColorX
            }
          }
        },
        colors: [this.commonColor],
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: this.fontColorY
            },
            labels: {
              style: {
                colors: this.fontColorY
              }
            },
            title: {
              text: this.labelY,
              style: {
                color: this.fontColorX
              }
            }
          }
        ]
      };
    },
  }
};
</script>

<style scoped>

</style>
