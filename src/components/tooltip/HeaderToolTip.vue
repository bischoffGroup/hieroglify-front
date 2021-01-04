<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge left color="red">
            <template v-slot:badge>
              <span v-if="importacao_error > 0">{{ importacao_error }}</span>
            </template>
            <v-icon color="grey lighten-1">far fa-thumbs-down</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span>Importações interrompidas!</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge left color="green">
            <template v-slot:badge>
              <span v-if="importacao_success > 0">{{
                importacao_success
              }}</span>
            </template>
            <v-icon color="grey lighten-1">far fa-thumbs-up</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span>Importações realizadas com sucesso!</span>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    importacao_success: 0,
    importacao_error: 0
  }
};
</script>
<style scoped></style>
