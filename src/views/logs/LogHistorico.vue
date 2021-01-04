<template>
  <div v-if="historico.length">
    <v-expansion-panels :accordion="true">
      <show-historico-component
        v-for="(data, key) in datas"
        :key="key"
        :importacoes="historico[key]"
        :data="data"
      />
    </v-expansion-panels>
  </div>
</template>
<script>
import ShowHistoricoImportacao from "../../components/log/ShowHistoricoImportacao";
export default {
  components: {
    "show-historico-component": ShowHistoricoImportacao
  },
  data: () => ({
    historico: [],
    datas: []
  }),
  mounted() {
    this.loadLogImportacoesHistorico();
  },
  methods: {
    loadLogImportacoesHistorico() {
      this.$store
        .dispatch("loadLogImportacoesHistorico")
        .then(response => {
          this.datas = response.data.success.datas_importacoes;
          this.historico = response.data.success.produtos_importados.map(
            function(e) {
              return e;
            }
          );
        })
        .catch(() => {
          this.$emit("alerta", {
            type: "error",
            text: "Erro na busca de históricos"
          });
        });
    }
  }
};
</script>
<style scoped></style>
