<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Artigos não importados
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
            <template v-slot:top>
              <v-toolbar height="150" flat>
                <v-container fluid>
                  <v-row>
                    <v-col sm="12" md="6" lg="6">
                      <v-row justify="start">
                        <v-btn
                          v-if="selected.length > 0"
                          color="teal darken-1"
                          dark
                          @click="validateArtigo"
                        >
                          Validar os {{ selected.length }} artigos selecionados
                        </v-btn>
                      </v-row>
                    </v-col>
                    <v-col sm="12" md="6" lg="6">
                      <v-row justify="end">
                        <v-btn
                          v-if="selected.length > 0"
                          color="black"
                          dark
                          @click="importArtigo"
                        >
                          Importar os {{ selected.length }} artigos selecionados
                        </v-btn>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-toolbar>
            </template>
            <template v-slot:item.TCLCOD="{ item }">
              <v-chip :color="getColor(item.TCLCOD)" dark>{{
                item.TCLCOD
              }}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                v-text="aprovados.length === 0 ? '' : validarIcon(item.ITMREF)"
                :color="aprovados.length === 0 ? '' : validarColor(item.ITMREF)"
              >
              </v-icon>
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
    aprovados: [],
    search: "",
    headers: [
      { text: "ITMREF", value: "ITMREF" },
      { text: "ITMDES1", value: "ITMDES1" },
      { text: "TCLCOD", value: "TCLCOD" },
      { text: "UPDDATTIM", value: "UPDDATTIM" },
      { text: "YDEVPRO", value: "YDEVPRO" },
      { text: "", value: "actions", sortable: false }
    ]
  }),
  methods: {
    validarIcon(item) {
      if (this.aprovados.some(aprovado => aprovado.item === item))
        return this.aprovados.some(
          aprovado => aprovado.item === item && aprovado.aprovado === true
        )
          ? "fas fa-check"
          : "fas fa-bug";
      return "";
    },
    validarColor(item) {
      if (this.aprovados.some(aprovado => aprovado.item === item))
        return this.aprovados.some(
          aprovado => aprovado.item === item && aprovado.aprovado === true
        )
          ? "green"
          : "red";
      return "";
    },
    getColor(categoria) {
      if (categoria === "PCA01") return "red";
      if (categoria === "PAC01") return "blue";
      if (categoria === "PCO01") return "green";
      else return "gray";
    },
    validateArtigo() {
      this.$store
        .dispatch(
          "validateArtigo",
          this.selected.map(a => a.ITMREF)
        )
        .then(response => {
          this.$emit("alerta", {
            type: "success",
            text: "Validação finalizada"
          });
          this.selected
            .map(a => a.ITMREF)
            .forEach(e => {
              response.data.success.includes(e)
                ? this.aprovados.push({ item: e, aprovado: true })
                : this.aprovados.push({ item: e, aprovado: false });
            });
        })
        .catch(() => {
          this.$emit("alerta", {
            type: "error",
            text: "Validação interrompida"
          });
        });
    },
    importArtigo() {
      this.$store
        .dispatch(
          "importArtigo",
          this.selected.map(a => a.ITMREF)
        )
        .then(response => {
          this.$emit("alerta", {
            type: "success",
            text: response.data.success
          });
          setTimeout(() => {
            this.$emit("refresh");
          }, 3000);
        })
        .catch(error => {
          let artigos = "";
          error.response.data.error.map(e => {
            artigos = artigos + " " + e.artigo;
          });
          this.$emit("alerta", {
            type: "error",
            text:
              "PROTOCOLO : " +
              error.response.data.protocolo +
              ".  " +
              "Erro na inserção dos seguintes artigos :" +
              artigos
          });
        });
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
