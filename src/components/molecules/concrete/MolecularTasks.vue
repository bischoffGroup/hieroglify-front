<template>
  <atomic-card-default>
    <template #cardContent>
      <atomic-card-text>
        <template #cardTextContent>
          <div class="col-12 title">Tasks de importações</div>
          <atomic-list-default
            :namespace="namespace"
            :division="division"
            :tag="tag"
            :v-bind="{ twoLine: true, width: '100%' }"
          >
            <template #content="props">
              <atomic-list-item
                v-for="(prop, index) in props.value"
                :key="index"
              >
                <template #listItemContent>
                  <atomic-list-item-content>
                    <template #content>
                      <div class="col-sm-12 col-md-10 col-lg-10">
                        <atomic-list-item-title v-text="prop.TAREFA" />
                        <atomic-list-item-subtitle
                          v-text="prop._ID"
                          class="text--primary"
                        ></atomic-list-item-subtitle>
                        <atomic-list-item-subtitle v-text="prop.DESCRICAO" />
                      </div>
                    </template>
                    <template #actions>
                      <div class="col-sm-12 col-md-2 col-lg-2">
                        <atomic-checkbox-default
                          label="Ativa"
                          :namespace="namespace"
                          :division="division"
                          :tag="tag"
                          :field-path="`${index}.ATIVA`"
                          :dto="prop"
                          :v-bind="{ color: 'black' }"
                        />
                      </div>
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
// import AtomicCardTitle from '@/components/atoms/abstract/card/AtomicCardTitle';
import AtomicCardText from '@/components/atoms/abstract/card/AtomicCardText';
import AtomicListDefault from '@/components/atoms/concrete/list/AtomicListDefault/AtomicListDefault';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import AtomicListItem from '@/components/atoms/abstract/list/AtomicListItem';
import AtomicListItemContent from '@/components/atoms/abstract/list/AtomicListItemContent';
import AtomicListItemTitle from '@/components/atoms/abstract/list/AtomicListItemTitle';
import AtomicListItemSubtitle from '@/components/atoms/abstract/list/AtomicListItemSubtitle';
import AtomicCheckboxDefault from '@/components/atoms/concrete/checkbox/AtomicCheckboxDefault';

export default {
  name: 'MolecularTasks',
  components: {
    AtomicCheckboxDefault,
    AtomicListItemSubtitle,
    AtomicListItemTitle,
    AtomicListItemContent,
    AtomicListItem,
    AtomicListDefault,
    AtomicCardText,
    // AtomicCardTitle,
    AtomicCardDefault,
  },
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  computed: {},
};
</script>

<style scoped></style>
