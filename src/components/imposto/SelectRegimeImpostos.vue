<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          label="Regime de impostos"
          v-model="regimeImpostos"
          @change="returnRegimeImpostos"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    validate: Boolean
  },
  data: () => ({
    regimeImpostos: ''
  }),
  methods: {
    returnRegimeImpostos() {
      this.$emit('returnRegimeImpostos', this.regimeImpostos);
    }
  }
};
</script>

<style scoped></style>
