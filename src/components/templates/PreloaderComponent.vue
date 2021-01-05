<template>
  <v-overlay :absolute="absolute" :value="overlay">
    <v-progress-circular indeterminate color="white"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({
    absolute: true,
  }),
  computed: {
    overlay() {
      return this.$store.state.preloader.loading;
    },
  },
};
</script>

<style scoped></style>
