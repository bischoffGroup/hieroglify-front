<template>
  <atomic-card-default>
    <template v-slot:cardTitle>
      <slot name="titleDataTable">
        <atomic-card-text>
          <template #cardTextContent>
            <v-row>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <p class="title text-uppercase">{{ title }}</p>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <molecular-search
                  :clear-model-after-search="false"
                  v-bind="{ outlined: true }"
                  :namespace="namespace"
                  :label="searchLabel"
                  :division="division"
                  :field-path="fieldPath"
                />
              </div>
            </v-row>
          </template>
        </atomic-card-text>
      </slot>
    </template>
    <template v-slot:cardContent>
      <slot name="contentDataTable">
        <atomic-card-text>
          <template #cardTextContent>
            <atomic-data-table-default
              :v-bind="{ height: 360, dense: true }"
              :namespace="namespace"
              :division="division"
              :tag="tag"
              class="elevation-1"
            />
          </template>
        </atomic-card-text>
      </slot>
    </template>
  </atomic-card-default>
</template>

<script>
import AtomicDataTableDefault from '@/components/atoms/concrete/dataTable/AtomicDataTableDefault';
import AtomicCardDefault from '@/components/atoms/concrete/card/AtomicCardDefault';
import { NamespacePropsMixin } from '@/mixins/NamespacePropsMixin';
import { DivisionPropsMixin } from '@/mixins/DivisionPropsMixin';
import { TagPropsMixin } from '@/mixins/TagPropsMixin';
import AtomicCardText from '@/components/atoms/abstract/card/AtomicCardText';
import MolecularSearch from '@/components/molecules/abstract/MolecularSearch';
import { capitalizeFirstLetter } from '@hieroglify/lib-commons/src/utils/StringsUtils';

export default {
  name: 'MolecularDataTableWithCard',
  mixins: [NamespacePropsMixin, DivisionPropsMixin, TagPropsMixin],
  components: {
    MolecularSearch,
    AtomicCardText,
    AtomicCardDefault,
    AtomicDataTableDefault,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: () => 'DEFAULT TITLE',
    },
    searchLabel: {
      type: String,
      required: false,
      default: () => 'DEFAULT SEARCH',
    },
  },
  computed: {
    fieldPath() {
      return `search${capitalizeFirstLetter(this.division)}`;
    }
  }
};
</script>

<style scoped></style>
