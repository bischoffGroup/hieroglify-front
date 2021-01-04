<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          label="Regime de impostos"
          v-model="regime_impostos"
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
    regime_impostos: ""
  }),
  methods: {
    returnRegimeImpostos() {
      this.$emit("returnRegimeImpostos", this.regime_impostos);
    }
  }
};
</script>

<style scoped></style>
