<template>
  <v-speed-dial v-bind="$attrs.vBind">
    <template v-slot:activator>
      <slot name="activator" />
    </template>
    <slot name="speedContent" />
  </v-speed-dial>
</template>

<script>
export default {
  name: 'AtomicSpeedDial'
};
</script>

<style scoped></style>
