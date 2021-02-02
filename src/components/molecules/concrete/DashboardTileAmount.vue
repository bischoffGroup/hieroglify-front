<template>
  <atomic-card-default>
    <template #cardTitle>
      <v-sheet
        class="v-sheet--offset mx-auto"
        :color="tileColor"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <v-col class="title text-center">
          <atomic-icon icon="fas fa-exclamation-triangle"  v-bind="{xLarge: true, color: 'white'}"></atomic-icon>
          <div class="white--text">{{ countable }}</div>
        </v-col>
      </v-sheet>
    </template>
    <template #cardContent>
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
    </template>
  </atomic-card-default>
</template>

<script>
import AtomicCardDefault from '@/components/atoms/concrete/card/AtomicCardDefault';
import AtomicIcon from '@/components/atoms/abstract/icon/AtomicIcon';

export default {
  name: 'DashboardTileAmount',
  components: { AtomicIcon, AtomicCardDefault },
  props: {
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
  data() {
    return {

    };
  }
};
</script>

<style scoped>

</style>
