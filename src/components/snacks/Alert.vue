<template>
  <v-snackbar
    v-model="snack"
    :bottom="y === 'bottom'"
    :color="color"
    :left="x === 'left'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'top'"
    :vertical="vertical"
  >
    {{ text }}
    <v-btn dark text @click="snack = false">
      Fechar
    </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  data: () => ({
    color: "",
    mode: "",
    text: "",
    timeout: 10000,
    x: "right",
    y: "top",
    snack: false,
    vertical: true
  }),
  methods: {
    show(color, text) {
      this.color = color;
      this.text = text;
      this.snack = true;
    }
  }
};
</script>
