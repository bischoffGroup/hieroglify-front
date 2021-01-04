<template>
  <v-app id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="4">
            <v-card outlined>
              <v-card-text align="center">
                <v-img
                  src="../../assets/hieroglyfy_512px.png"
                  width="200"
                  height="200"
                />
                <h2>HierogliFY</h2>
                <h3>{{ version }}</h3>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    label="E-mail"
                    name="E-mail"
                    v-model="email"
                    prepend-icon="fa-user"
                    type="text"
                    required
                    :rules="emailRules"
                  />
                  <v-text-field
                    v-model="password"
                    label="Senha"
                    prepend-icon="fa-lock"
                    type="password"
                    :rules="passwordRules"
                    required
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="dark" @click="validate" block>Login</v-btn>
              </v-card-actions>
              <preloader-component />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Alert ref="alert" />
  </v-app>
</template>
<script>
import PreloaderComponent from "../../components/templates/PreloaderComponent";
import Alert from "../../components/snacks/Alert";
export default {
  components: {
    "preloader-component": PreloaderComponent,
    Alert
  },
  data: () => ({
    valid: true,
    password: "",
    email: "",
    passwordRules: [v => !!v || "Informe a senha!"],
    emailRules: [
      v => !!v || "Informe o e-mail!",
      v => /.+@.+\..+/.test(v) || "O e-mail informado não é válido!"
    ]
  }),
  computed: {
    version() {
      return this.$store.state.version.version;
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.login();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    login() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(() => {
          location.reload();
          // this.$router.push('dashboard').catch(error => {});
        })
        .catch(error => {
          this.$refs.alert.show("error", error.response.data.error);
        });
    }
  }
};
</script>
