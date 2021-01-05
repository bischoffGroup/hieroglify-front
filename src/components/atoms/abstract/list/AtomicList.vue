<template>
  <v-list v-bind="$attrs.vBind">
    <template #default>
      <slot name="content"></slot>
    </template>
  </v-list>
</template>

<script>
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';

export default {
  name: 'AtomicList',
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  computed: {
    list() {
      return this.$store.state[this.namespace][this.division][this.tag];
    },
  },
};
</script>

<style scoped></style>
