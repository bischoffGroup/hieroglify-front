<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          label="Operação Fiscal"
          v-model="op_fiscal"
          @change="returnOpFiscal"
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
    op_fiscal: ""
  }),
  methods: {
    returnOpFiscal() {
      this.$emit("returnOpFiscal", this.op_fiscal);
    }
  }
};
</script>

<style scoped></style>
