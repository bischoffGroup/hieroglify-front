<template>
  <atomic-card-default>
    <template v-slot:cardContent>
      <slot name="contentDataTable">
        <atomic-data-table-default
          :v-bind="{ height: 360, dense: true }"
          :namespace="namespace"
          :division="division"
          :tag="tag"
        />
      </slot>
    </template>
  </atomic-card-default>
</template>

<script>
import AtomicDataTableDefault from "@/components/atoms/concrete/dataTable/AtomicDataTableDefault";
import AtomicCardDefault from "@/components/atoms/concrete/card/AtomicCardDefault";
import { NamespacePropsMixin } from "@/mixins/NamespacePropsMixin";
import { DivisionPropsMixin } from "@/mixins/DivisionPropsMixin";
import { TagPropsMixin } from "@/mixins/TagPropsMixin";
export default {
  name: "MolecularDataTableWithCard",
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  components: { AtomicCardDefault, AtomicDataTableDefault }
};
</script>

<style scoped></style>
