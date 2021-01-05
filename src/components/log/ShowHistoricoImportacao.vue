<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ formatData }}</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-card-title>
          Histórico de importações: {{ formatData }}
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar..."
            single-line
            hide-details
            outlined
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="importacoes"
          :search="search"
          v-if="importacoes.length > 0"
        >
          <template v-slot:item.DATA_CADASTRAMENTO="{ item }">
            {{ format(item.DATA_CADASTRAMENTO) }}
          </template>
        </v-data-table>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  props: {
    importacoes: Array,
    data: String,
  },
  computed: {
    formatData() {
      return this.format(this.data);
    },
  },
  data: () => ({
    search: '',
    headers: [
      { text: 'PRODUTO', sortable: true, value: 'PRODUTO' },
      { text: 'DATA', sortable: false, value: 'DATA_CADASTRAMENTO' },
    ],
  }),
  methods: {
    format(data) {
      const d = data.split('-');
      return `${d[2]}/${d[1]}/${d[0]}`;
    },
  },
};
</script>
