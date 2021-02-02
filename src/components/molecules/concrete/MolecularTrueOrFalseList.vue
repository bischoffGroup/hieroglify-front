<template>
  <atomic-card-default>
    <template #cardContent>
      <atomic-card-text>
        <template #cardTextContent>
          <div class="col-12 title">{{title}}</div>
          <atomic-list-default
            :namespace="namespace"
            :division="division"
            :tag="tag"
            :v-bind="{ width: '100%'}"
          >
            <template #content="props">
              <atomic-list-item
                v-for="(prop, index) in props.value"
                :key="index"
                v-bind="{selectable: true, dense: true, color: 'success'}"
              >
                <template #listItemContent>
                  <atomic-list-item-content>
                    <template #content>
                      <v-row>
                        <v-col  v-for="(key, index) in properties(prop)" :key="index">
                          <p class="ma-0 pa-0">{{key + ': ' + prop[key]}}</p>
                        </v-col>
                      </v-row>
                    </template>
                  </atomic-list-item-content>
                </template>
              </atomic-list-item>
            </template>
          </atomic-list-default>
        </template>
      </atomic-card-text>
    </template>
  </atomic-card-default>
</template>

<script>
import AtomicCardDefault from '@/components/atoms/concrete/card/AtomicCardDefault';
import AtomicCardText from '@/components/atoms/abstract/card/AtomicCardText';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import AtomicListDefault from '@/components/atoms/concrete/list/AtomicListDefault/AtomicListDefault';
import AtomicListItem from '@/components/atoms/abstract/list/AtomicListItem';
import AtomicListItemContent from '@/components/atoms/abstract/list/AtomicListItemContent';
import { getPropertyKeys } from '@hieroglify/lib-commons/src/utils/ObjUtils';

export default {
  name: 'MolecularTrueOrFalseList',
  components: {
    AtomicListItemContent,
    AtomicListItem,
    AtomicListDefault,
    AtomicCardText,
    AtomicCardDefault
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  methods: {
    properties(object) {
      return getPropertyKeys(object);
    }
  }
};
</script>

<style scoped>

</style>
