<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="campos"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    campos: Array
  },
  data() {
    return {
      headers: [
        {
          text: "Campo",
          align: "left",
          sortable: false,
          value: "campo"
        },
        { text: "Exemplo", value: "exemplo_valor" },
        { text: "Contexto", value: "contexto" },
        { text: "Descrição", value: "descricao" },
        { text: "Conjunto", value: "campo_conjunto" }
      ]
    };
  }
};
</script>

<style scoped></style>
