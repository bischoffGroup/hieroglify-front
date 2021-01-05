<template>
  <atomic-list v-bind="{ ...$props, ...$attrs }" ref="atomicList">
    <template #content>
      <slot name="content" :value="list">
        <atomic-list-item v-for="(item, index) in list" :key="index">
          <template #listItemContent>
            <atomic-card-default :v-bind="{ width: '100%' }">
              <template #cardContent>
                <v-container>
                  <v-row
                    v-for="(key, keyIndex) in splitObject(item)"
                    :key="keyIndex"
                  >
                    <v-col cols="12">
                      <span>{{ formatItem(key, item) }} </span>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </atomic-card-default>
          </template>
        </atomic-list-item>
      </slot>
    </template>
  </atomic-list>
</template>

<script>
import AtomicList from '@/components/atoms/abstract/list/AtomicList';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import AtomicListItem from '@/components/atoms/abstract/list/AtomicListItem';
import AtomicCardDefault from '@/components/atoms/concrete/card/AtomicCardDefault';

export default {
  name: 'AtomicListDefault',
  components: {
    AtomicCardDefault,
    AtomicListItem,
    AtomicList,
  },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  props: {
    vBind: {
      type: Object,
      required: false,
    },
  },
  computed: {
    list() {
      return this.$store.state[this.namespace][this.division][this.tag];
    },
  },
  methods: {
    splitObject(itemProp) {
      return Object.getOwnPropertyNames(itemProp);
    },
    formatItem(key, item) {
      return `${key}: ${item[key]}`;
    },
  },
};
</script>

<style scoped></style>
