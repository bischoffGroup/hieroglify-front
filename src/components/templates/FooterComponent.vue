<template>
  <v-footer :inset="footer_inset" app>
    <span class="px-4">Bischoff Group &copy; {{ current }}</span>
  </v-footer>
</template>

<script>
export default {
  props: {
    current: Number,
    footer_inset: Boolean
  }
};
</script>

<style scoped></style>
