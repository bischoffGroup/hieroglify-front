<template>
  <v-footer :inset="footerInset" app>
    <span class="px-4">Bischoff Group &copy; {{ current }}</span>
  </v-footer>
</template>

<script>
export default {
  props: {
    current: Number,
    footerInset: Boolean,
  },
};
</script>

<style scoped></style>
