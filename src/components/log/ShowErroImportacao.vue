<template>
  <v-card>
    <v-card-title>
      Importações com erros
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
      :items="erros"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    erros: Array
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Id",
        align: "start",
        value: "id"
      },
      { text: "Protocolo", sortable: true, value: "request_id" },
      { text: "Erro", value: "erro" },
      { text: "Data", value: "data" },
      { text: "created_at", value: "created_at" },
      { text: "updated_at", value: "updated_at" }
    ]
  })
};
</script>
