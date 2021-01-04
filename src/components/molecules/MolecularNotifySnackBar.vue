<template>
  <atomic-snack-bar
    v-bind="{ color: color, top: true, right: true }"
    :text="message"
    :snack="notify"
    :timeout="2000"
  />
</template>

<script>
import AtomicSnackBar from "@/components/atoms/concrete/snackbar/AtomicSnackBar";
export default {
  name: "MolecularNotifySnackBar",
  components: { AtomicSnackBar },
  computed: {
    notify() {
      return this.$store.state.notifications.notify;
    },
    color() {
      return this.$store.state.notifications.type === "success"
        ? "green"
        : "red";
    },
    message() {
      return this.$store.state.notifications.message;
    }
  }
};
</script>

<style scoped></style>
