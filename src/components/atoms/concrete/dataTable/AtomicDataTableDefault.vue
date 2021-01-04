<template>
  <atomic-data-table
    v-bind="{ ...$props, ...$attrs }"
    :headers="headers"
    :items="items"
  />
</template>

<script>
import AtomicDataTable from "@/components/atoms/abstract/dataTable/AtomicDataTable";
export default {
  name: "AtomicDataTableDefault",
  components: { AtomicDataTable },
  props: {
    pathToValues: {
      type: String,
      required: true
    },
    vBind: {
      type: Object,
      required: false
    },
    clearDataOnMounted: {
      type: Boolean,
      required: true
    },
    fullPath: {
      type: String,
      required: false,
      default: () => {
        return undefined;
      }
    }
  },
  computed: {
    headers() {
      const fullPathToHeaders = `${this.pathToValues}.columnNames`;
      return fullPathToHeaders.split(".").reduce((o, k) => {
        return o && o[k];
      }, this.$store.state);
    },
    items() {
      if (this.fullPath === undefined) {
        const fullPathToItems = `${this.pathToValues}.data`;
        const items = fullPathToItems.split(".").reduce((o, k) => {
          return o && o[k];
        }, this.$store.state);

        if (!this.isNumber(Object.getOwnPropertyNames(items)[0])) return [];
        return items === undefined || items.length === 0 || false ? [] : items;
      }
      const items = this.fullPath.split(".").reduce((o, k) => {
        return o && o[k];
      }, this.$store.state);
      return items === undefined ? [] : items;
    }
  },
  methods: {
    isNumber(value) {
      return value.match(/^[0-9]+$/) !== null;
    }
  }
};
</script>

<style scoped></style>
