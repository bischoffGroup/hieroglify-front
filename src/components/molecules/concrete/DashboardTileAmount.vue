<template>
    <atomic-card-default class="mt-4 mx-auto">
        <v-sheet
            class="v-sheet--offset mx-auto"
            :color="tileColor"
            elevation="12"
            max-width="calc(100% - 32px)"
        >
          <v-col class="title text-center">
            <atomic-icon :icon="icon"  v-bind="{xLarge: true, color: 'white'}"></atomic-icon>
            <div class="white--text">{{ countable }}</div>
          </v-col>
        </v-sheet>
        <v-container>
          <v-row>
            <v-col class="pl-8">
              <div class="title font-weight-light mb-2">{{title}}</div>
              <div class="subheading font-weight-light grey--text">{{subTitle}}</div>
              <v-divider class="my-2"></v-divider>
              <span class="caption grey--text font-weight-light">{{addInformation}}</span>
            </v-col>
          </v-row>
        </v-container>
    </atomic-card-default>
</template>

<script>
import AtomicCardDefault from '@/components/atoms/concrete/card/AtomicCardDefault';
import AtomicIcon from '@/components/atoms/abstract/icon/AtomicIcon';

export default {
  name: 'DashboardTileAmount',
  components: { AtomicIcon, AtomicCardDefault },
  props: {
    icon: {
      type: String,
      required: true
    },
    tileColor: {
      type: String,
      required: true
    },
    countable: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false,
      default() {
        return '';
      }
    },
    addInformation: {
      type: String,
      required: false,
      default() {
        return '';
      }
    }
  },

};
</script>

<style scoped>
.v-sheet {
  position: relative;
  top: -24px;
}
</style>
