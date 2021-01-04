<template>
  <atomic-snack-bar
    v-bind="{ ...$props, ...$attrs }"
    :timeout="timeout"
    :snack="snack"
  >
    <template slot="snackContent">
      {{ text }}
    </template>
  </atomic-snack-bar>
</template>
<script>
import AtomicSnackBar from "@/components/atoms/abstract/snackbar/AtomicSnackBar";
export default {
  components: { AtomicSnackBar },
  props: {
    vBind: {
      type: Object,
      required: false
    },
    text: {
      type: String,
      required: true
    },
    snack: {
      type: Boolean,
      required: true
    },
    timeout: {
      type: Number,
      required: true
    }
  }
};
</script>
