<template>
  <v-card>
    <v-card-title>
      {{ tarifa }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="artigos"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    tarifa: String,
    artigos: Array
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "PLI", value: "PLI" },
        { text: "PLICRD", value: "PLICRD" },
        { text: "PLISTRDAT", value: "PLISTRDAT" },
        { text: "PLIENDDAT", value: "PLIENDDAT" },
        { text: "CPNITMREF", value: "CPNITMREF" },
        { text: "PLICRI1", value: "PLICRI1" },
        { text: "PLILIN", value: "PLILIN" },
        { text: "PRI", value: "PRI" }
      ]
    };
  }
};
</script>
