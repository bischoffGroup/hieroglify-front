<template>
  <v-card class="mt-4 mx-auto text-center" max-width="400">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="red"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-container>
        <v-row>
          <v-col>
            <v-icon color="white" size="44">fas fa-broadcast-tower</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">Requisições do tipo GET</div>
      <div class="subheading font-weight-light grey--text">
        Hoje : {{ contagem_hoje }}
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small>
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light"
        >Últimos cinco dias : {{ contagem_total }}</span
      >
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    contagem_total: "",
    contagem_hoje: ""
  }),
  methods: {
    loadLogEntradasGet() {
      this.zerar();
      this.$store
        .dispatch("loadLogEntradasGet")
        .then(response => {
          this.setTotal(response.data.success.length);
          response.data.success.map(e => {
            if (
              new Date(e.created_at).getFullYear() === new Date().getFullYear()
            ) {
              if (new Date(e.created_at).getMonth() === new Date().getMonth()) {
                if (new Date(e.created_at).getDate() === new Date().getDate()) {
                  this.contagem_hoje++;
                }
              }
            }
          });
        })
        .catch(error => {});
    },
    setTotal(valor) {
      for (let i = 0; i <= valor; i++) {
        setTimeout(() => {
          this.contagem_total++;
        }, 1000);
      }
    },
    zerar() {
      this.contagem_hoje = 0;
      this.contagem_total = 0;
    }
  }
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
