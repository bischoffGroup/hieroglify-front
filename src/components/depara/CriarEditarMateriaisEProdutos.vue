<template>
  <div>
    <v-row justify="center">
      <v-btn color="black" class="ma-2" dark @click="dialog = true">
        NOVO
      </v-btn>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Classificação {{ tipoClassificao }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="X3_FAM_ESTAT_1_COD"
                  v-model="classif.x3FamEstat1Cod"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="X3_FAM_ESTAT_1_DESC"
                  v-model="classif.x3FamEstat1Desc"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="X3_FAM_ESTAT_2_COD"
                  v-model="classif.x3FamEstat2Cod"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="X3_FAM_ESTAT_2_DESC"
                  v-model="classif.x3FamEstat2Desc"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="X3_FAM_ESTAT_3_COD"
                  v-model="classif.x3FamEstat3Cod"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="X3_FAM_ESTAT_3_DESC"
                  v-model="classif.x3FamEstat3Desc"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="LINX_GRUPO_COD"
                  v-model="classif.linxGrupoCod"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="LINX_GRUPO_DESC"
                  v-model="classif.linxGrupoDesc"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="LINX_SUBGRUPO_COD"
                  v-model="classif.linxSubGrupoCod"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="LINX_SUBGRUPO_DESC"
                  v-model="classif.linxSubGrupoDesc"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="LINX_TIPO"
                  v-model="classif.linxTipo"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="limparForm">
            FECHAR
          </v-btn>
          <v-btn color="blue darken-1" text @click="salvar">
            SALVAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    tipoClassificao: {
      type: String,
      required: true
    }
  },
  data: () => ({
    dialog: false,
    classif: {
      tipo: null,
      x3FamEstat1Cod: "",
      x3FamEstat2Cod: "",
      x3FamEstat3Cod: "",
      linxGrupoCod: "",
      linxSubGrupoCod: "",
      linxTipo: "",
      x3FamEstat1Desc: "",
      x3FamEstat2Desc: "",
      x3FamEstat3Desc: "",
      linxGrupoDesc: "",
      linxSubGrupoDesc: ""
    }
  }),
  methods: {
    ...mapActions(["criarClassificacao"]),
    salvar() {
      this.classif.tipo = this.tipoClassificao;
      this.criarClassificacao(this.classif)
        .then(response => {
          console.log(response);
          this.$emit("alerta", {
            type: "success",
            text: response.data.success
          });
          this.limparForm();
        })
        .catch(error => {
          this.dialog = false;
          console.log("deu ruim");
          console.log(error);
          this.$emit("alerta", {
            type: "error",
            text: "deuruim"
          });
        });
    },
    limparForm() {
      this.classif.tipo = null;
      this.classif.x3FamEstat1Cod = "";
      this.classif.x3FamEstat2Cod = "";
      this.classif.x3FamEstat3Cod = "";
      this.classif.linxGrupoCod = "";
      this.classif.linxSubGrupoCod = "";
      this.classif.linxTipo = "";
      this.classif.x3FamEstat1Desc = "";
      this.classif.x3FamEstat2Desc = "";
      this.classif.x3FamEstat3Desc = "";
      this.classif.linxGrupoDesc = "";
      this.classif.linxSubGrupoDesc = "";
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
