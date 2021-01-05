<template>
  <div>
    <show-erro-importacao :erros="erros" />
  </div>
</template>

<script>
import ShowErroImportacao from '../../components/log/ShowErroImportacao';

export default {
  components: {
    'show-erro-importacao': ShowErroImportacao,
  },
  data: () => ({
    erros: [],
  }),
  mounted() {
    this.loadLogImportacoesErros();
  },
  methods: {
    loadLogImportacoesErros() {
      this.$store
        .dispatch('loadLogImportacoesErros')
        .then((response) => {
          this.erros = response.data.success;
        })
        .catch(() => {
          this.$emit('alerta', {
            type: 'error',
            text: 'Erro ao buscar log de importação',
          });
        });
    },
  },
};
</script>

<style scoped></style>
