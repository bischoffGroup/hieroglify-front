<template>
  <v-list-item v-bind="{...$props, ...$attrs}">
    <slot name="listItemContent"></slot>
  </v-list-item>
</template>

<script>
export default {
  name: 'AtomicListItem',
  props: {
    vBind: {
      type: Object
    }
  }
};
</script>

<style scoped></style>
