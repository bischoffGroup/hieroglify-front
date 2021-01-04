<template>
  <atomic-pre v-bind="{ ...$props, ...$attrs }" class="text-wrap">
    <template slot="preContent">
      {{ display }}
    </template>
  </atomic-pre>
</template>

<script>
import validationRequirementsMixin from "@/mixins/validationRequirementsMixin";
import valuesFromStoreMixin from "@/mixins/valuesFromStoreMixin";
import AtomicPre from "@/components/atoms/abstract/pre/AtomicPre";
export default {
  name: "AtomicPreDefault",
  components: { AtomicPre },
  mixins: [validationRequirementsMixin, valuesFromStoreMixin],
  props: {
    vBind: {
      type: Object,
      required: false
    },
    pathToValues: {
      type: String,
      required: false,
      default: () => {
        return undefined;
      }
    },
    concreteValues: {
      required: false,
      default: () => {
        return undefined;
      }
    }
  },
  data() {
    return {
      validationRequirements: ["concreteValues", "pathToValues"]
    };
  },
  computed: {
    display() {
      return this.concreteValues === undefined
        ? this.getValueFromStoreWithPath()
        : this.concreteValues;
    }
  },
  methods: {
    /* getValueFromStoreWithPath() {
            return this.pathToValues.split('.').reduce((o, k) => {
                return o && o[k]
            }, this.$store.state)
        }, */
  }
};
</script>

<style scoped></style>
