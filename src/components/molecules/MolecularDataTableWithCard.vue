<template>
  <atomic-card-default>
    <template v-slot:cardContent>
      <slot name="contentDataTable">
        <atomic-data-table-default
          :path-to-values="pathToData"
          :v-bind="{ height: 360, dense: true }"
          :clear-data-on-mounted="true"
          :full-path="fullPathToData"
        />
      </slot>
    </template>
  </atomic-card-default>
</template>

<script>
import AtomicDataTableDefault from "@/components/atoms/concrete/dataTable/AtomicDataTableDefault";
export default {
  name: "MolecularDataTableWithCard",
  components: { AtomicDataTableDefault },
  props: {
    pathToData: {
      type: String,
      required: true
    },
    fullPathToData: {
      type: String,
      required: false,
      default: () => {
        return undefined;
      }
    }
  }
};
</script>

<style scoped></style>
