<template>
  <v-icon v-bind="{...$attrs}">{{ icon }}</v-icon>
</template>

<script>
export default {
  name: 'AtomicIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
