<template>
  <atomic-card-default>
    <template v-slot:cardTitle>
      <slot name="title">
        <atomic-card-title>
          <template v-slot:cardTitleContent>
            {{ title }}
          </template>
        </atomic-card-title>
      </slot>
    </template>
    <template v-slot:cardContent>
      <slot name="contentSearch">
        <atomic-card-text class="pb-0">
          <template v-slot:cardTextContent>
            <atomic-text-field-list
              class="pb-0"
              :v-bind="{
                label: 'Produto',
                outlined: true,
                appendIcon: 'far fa-keyboard'
              }"
              path-to-values="search.list"
              execute-action="addItemToSearchList"
            />
          </template>
        </atomic-card-text>
      </slot>
      <slot name="contentList">
        <atomic-card-text class="pt-0">
          <template v-slot:cardTextContent>
            <atomic-list-default
              class="pa-0"
              :listen-store="true"
              getter="searchList"
              :v-bind="{
                dense: true,
                height: 170,
                maxHeight: 170,
                class: 'overflow-y-auto'
              }"
            />
          </template>
        </atomic-card-text>
      </slot>
    </template>
    <template v-slot:cardActions>
      <slot name="contentActions">
        <atomic-card-action>
          <template v-slot:cardActionContent>
            <atomic-btn-action
              :v-bind="{
                block: true,
                dark: true,
                color: 'green',
                outlined: true
              }"
              :execute-action="action"
              path-to-values="utils.search.list"
              :display-with-condition-populated="true"
              v-text="'gerar'"
            />
          </template>
        </atomic-card-action>
      </slot>
    </template>
  </atomic-card-default>
</template>

<script>
import AtomicCardTitle from "@/components/atoms/abstract/card/AtomicCardTitle";
import AtomicCardText from "@/components/atoms/abstract/card/AtomicCardText";
import AtomicListDefault from "@/components/atoms/concrete/list/AtomicListDefault/AtomicListDefault";
import AtomicTextFieldList from "@/components/atoms/concrete/textField/AtomicTextFieldList";
import AtomicCardAction from "@/components/atoms/abstract/card/AtomicCardAction";
import AtomicBtnAction from "@/components/atoms/concrete/btn/AtomicBtnAction";
import AtomicCardDefault from "@/components/atoms/concrete/card/AtomicCardDefault";
export default {
  name: "MolecularSearchAddList",
  components: {
    AtomicCardDefault,
    AtomicBtnAction,
    AtomicCardAction,
    AtomicTextFieldList,
    AtomicCardText,
    AtomicCardTitle,
    AtomicListDefault
  },
  props: {
    title: {
      type: String,
      required: false
    },
    action: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
