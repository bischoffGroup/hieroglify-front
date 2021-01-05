<template>
  <v-snackbar
    v-model="snack"
    v-bind="{ ...$props, ...$attrs }"
    :timeout="$props.timeout"
  >
    {{ $props.timeout }}
    <slot name="snackContent"></slot>
  </v-snackbar>
</template>

<script>
export default {
  name: 'AtomicSnackBar',
  props: {
    snack: {
      type: Boolean,
      required: true,
    },
    /* timeout: {
            type: Number,
            required: true
        } */
  },
};
</script>

<style scoped></style>
