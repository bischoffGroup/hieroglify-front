<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-title>
          Contextos
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="fa-search"
            label="Buscar..."
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="contextos" :search="search" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    contextos: Array
  },
  data: () => ({
    search: "",
    headers: [
      { text: "Id", sortable: false, value: "id" },
      { text: "X3", sortable: true, value: "x3" },
      { text: "Linx", sortable: true, value: "linx" }
    ]
  })
};
</script>

<style scoped></style>
