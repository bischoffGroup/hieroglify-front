<template>
  <div>
    <v-breadcrumbs :items="items" divider=">" />
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
  watch: {
    $route() {
      this.items = [];
      const rotas = this.$route.path.split('/');
      rotas.shift();
      rotas.forEach((e) => {
        this.items.push({
          text: e.toUpperCase(),
          disable: true,
          href: '',
        });
      });
    },
  },
};
</script>

<style scoped></style>
