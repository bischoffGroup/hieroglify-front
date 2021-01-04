<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-card-title>
        Criar contextos
      </v-card-title>
      <v-row class="mb-6 mt-6">
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field
            label="X3"
            v-model="x3"
            :rules="rules"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field
            label="Linx"
            v-model="linx"
            :rules="rules"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn block color="dark" dark @click="validate"
            >Salvar contexto</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    x3: "",
    linx: "",
    rules: [v => !!v || "Campo necessário!"]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.storeContexto();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    storeContexto() {
      this.$store
        .dispatch("storeContexto", {
          contexto: { x3: this.x3, linx: this.linx }
        })
        .then(response => {
          this.$store.dispatch("alert", { type: "success", message: response });
          this.$emit("reload");
        })
        .catch(error => {
          this.$store.dispatch("alert", { type: "error", message: error });
        })
        .finally(() => {
          this.reset();
        });
    },
    clear() {
      this.x3 = "";
      this.linx = "";
    }
  }
};
</script>

<style scoped></style>
