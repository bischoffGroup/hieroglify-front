<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Produtos Importados
            <v-spacer />
            <v-text-field
              v-model="produtoSearch"
              label="Buscar..."
              outlined
              single-line
            />
          </v-card-title>
          <v-data-table
            :headers="produtoHeaders"
            :items="produtos"
            :search="produtoSearch"
            v-model="produtoSelected"
            :single-select="produtoSingleSelect"
            item-key="PRODUTO"
            show-select
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-row justify="end">
                        <v-btn
                          v-if="produtoSelected.length > 0"
                          color="black"
                          dark
                          @click="deleteArtigos"
                          >Excluir os {{ produtoSelected.length }} produtos
                          selecionados</v-btn
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-toolbar>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Materiais Importados
            <v-spacer />
            <v-text-field
              v-model="materialSearch"
              label="Buscar..."
              outlined
              single-line
            />
          </v-card-title>
          <v-data-table
            :headers="materialHeaders"
            :items="materiais"
            :search="materialSearch"
            item-key="MATERIAL"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    produtos: Array,
    materiais: Array
  },
  data: () => ({
    produtoSingleSelect: false,
    produtoSelected: [],
    produtoSearch: "",
    produtoHeaders: [
      { text: "PRODUTO", value: "PRODUTO" },
      { text: "DESC_PRODUTO", value: "DESC_PRODUTO" },
      { text: "MATERIAL", value: "MATERIAL" },
      { text: "GRUPO_PRODUTO", value: "GRUPO_PRODUTO" },
      { text: "SUBGRUPO_PRODUTO", value: "SUBGRUPO_PRODUTO" }
    ],
    materialSearch: "",
    materialHeaders: [
      { text: "MATERIAL", value: "MATERIAL" },
      { text: "DESC_MATERIAL", value: "DESC_MATERIAL" },
      { text: "TIPO", value: "TIPO" },
      { text: "GRUPO", value: "GRUPO" },
      { text: "SUBGRUPO", value: "SUBGRUPO" }
    ]
  }),
  methods: {
    deleteArtigos() {
      this.$store
        .dispatch(
          "deleteArtigos",
          this.produtoSelected.map(e => {
            return e.PRODUTO;
          })
        )
        .then(response => {
          this.$emit("alerta", {
            type: "success",
            text: response
          });
        })
        .catch(error => {
          this.$emit("alerta", {
            type: "error",
            text: error.response.data.error
          });
        });
    }
  }
};
</script>

<style scoped></style>
