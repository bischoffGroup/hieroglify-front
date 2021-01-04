<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="campos"
          :items-per-page="5"
          class="elevation-1"
        />
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
          text: "X3",
          align: "left",
          sortable: false,
          value: "x3.campo"
        },
        {
          text: "Linx",
          align: "left",
          sortable: false,
          value: "linx.campo"
        },
        { text: "Descrição", value: "descricao" }
      ]
    };
  }
};
</script>

<style scoped></style>
