<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="mb-6 mt-6" no-gutters>
        <v-col cols="12" sm="12" md="4" lg="4" class="pa-2">
          <v-text-field
            label="Campo"
            v-model="campo"
            :rules="rules"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" class="pa-2">
          <v-text-field
            label="Valor de exemplo"
            v-model="valor_exemplo"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" class="pa-2">
          <v-text-field
            label="Contexto"
            v-model="contexto"
            :rules="rules"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="12" lg="12" class="pa-2">
          <v-text-field
            label="Descrição"
            v-model="descricao"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn block color="dark" dark @click="validate">Salvar campo</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    campo: "",
    valor_exemplo: "",
    contexto: "",
    descricao: " ",
    rules: [v => !!v || "Campo necessário!"]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.storeCampoLinx();
      }
    },
    storeCampoLinx() {
      this.$store
        .dispatch("storeCampoLinx", {
          campo: this.campo,
          exemplo: this.valor_exemplo,
          contexto: this.contexto,
          descricao: this.descricao
        })
        .then(response => {
          this.$store.dispatch("alert", {
            type: "success",
            message: response.data.success
          });
          this.clear();
          this.$emit("reload");
        })
        .catch(error => {
          this.$store.dispatch("alert", {
            type: "error",
            message: error.response.data.error
          });
        });
    },
    clear() {
      this.campo = "";
      this.valor_exemplo = "";
      this.contexto = "";
      this.descricao = "";
    }
  }
};
</script>

<style scoped></style>
