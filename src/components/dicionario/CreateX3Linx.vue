<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="mb-6 mt-6" no-gutters>
        <v-col cols="12" sm="12" md="6" lg="6" class="pa-2">
          <v-select
            :items="campos_x3"
            item-text="campo"
            item-value="id"
            label="Campos do X3"
            :rules="rules"
            v-model="campoX3"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" class="pa-2">
          <v-select
            :items="campos_linx"
            item-text="campo"
            item-value="id"
            label="Campos do Linx"
            :rules="rules"
            v-model="campoLinx"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="mb-6 mt-6" no-gutters>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-textarea
            outlined
            label="Descrição"
            v-model="descricao"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
          <v-btn block color="dark" dark @click="validate">Salvar campo</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  props: {
    campos_x3: Array,
    campos_linx: Array
  },
  data: () => ({
    valid: true,
    campoX3: "",
    campoLinx: "",
    descricao: "",
    rules: [v => !!v || "Campo necessário!"]
  }),
  methods: {
    validate() {
      console.log(this.campoX3);
      if (this.$refs.form.validate()) {
        this.storeCamposX3Linx();
      }
    },
    storeCamposX3Linx() {
      this.$store
        .dispatch("storeCamposX3Linx", {
          campoX3: this.campoX3,
          campoLinx: this.campoLinx,
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
      this.campoX3 = "";
      this.campoLinx = "";
      this.descricao = "";
    }
  }
};
</script>

<style scoped></style>
