<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Listagem de artigos x3
            <v-spacer />
            <v-text-field
              v-model="search"
              label="Buscar..."
              outlined
              single-line
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="artigos"
            :search="search"
            v-model="selected"
            :single-select="singleSelect"
            item-key="ITMREF"
            show-select
          >
            <template v-slot:item.TCLCOD="{ item }">
              <v-chip :color="getColor(item.TCLCOD)" dark>{{
                item.TCLCOD
              }}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    artigos: Array
  },
  data: () => ({
    singleSelect: false,
    selected: [],
    search: '',
    headers: [
      { text: 'ITMREF', value: 'ITMREF' },
      { text: 'C2', value: 'ITMREF_DES' },
      { text: 'TCLCOD', value: 'TCLCOD' },
      { text: 'ITMSTA', value: 'ITMSTA' },
      { text: 'ITMSTA_LBL', value: 'ITMSTA_LBL' },
      { text: 'EANCOD', value: 'EANCOD' },
      { text: 'SEAKEY', value: 'SEAKEY' },
      { text: 'CREDAT', value: '' },
      { text: 'UPDDAT', value: 'UPDDAT' }
    ]
  }),
  methods: {
    getColor(categoria) {
      if (categoria === 'PAC02') return 'red';
      if (categoria === 'PCA02') return 'blue';
      if (categoria === 'PCO02') return 'green';
      return 'gray';
    },
    importArtigo() {
      this.$store.dispatch('importArtigo');
    }
  }
};
</script>
<style>
.alert {
  color: red;
  text-justify: auto;
}
</style>
