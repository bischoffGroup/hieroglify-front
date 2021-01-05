<template>
  <atomic-speed-dial-default
    :v-bind="{ absolute: true, right: true, bottom: true }"
  >
    <template v-slot:speedDialActivator>
      <atomic-btn-default
        :v-bind="{ color: 'blue darken-2', dark: true, fab: true }"
      >
        <template v-slot:buttonContent>
          <atomic-icon icon="fas fa-file-download" />
        </template>
      </atomic-btn-default>
    </template>
    <template v-slot:speedDialContent>
      <atomic-btn-action
        v-for="(file, i) in files"
        :key="i"
        :display-with-condition-populated="false"
        :execute-action="file.action"
        :icon="translateIcons(file.type)"
        :value-to-action="getValueFromStoreWithPath"
        :v-bind="{ fab: true, small: true, color: 'green', dark: true }"
      >
      </atomic-btn-action>
    </template>
  </atomic-speed-dial-default>
</template>

<script>
import AtomicSpeedDialDefault from '@/components/atoms/concrete/speedDial/AtomicSpeedDialDefault';
import AtomicBtnDefault from '@/components/atoms/concrete/btn/AtomicBtnDefault';
import AtomicIcon from '@/components/atoms/abstract/icon/AtomicIcon';
import AtomicBtnAction from '@/components/atoms/concrete/btn/AtomicBtnAction';

export default {
  name: 'MolecularSpeedDialDownload',
  components: {
    AtomicBtnAction,
    AtomicIcon,
    AtomicBtnDefault,
    AtomicSpeedDialDefault,
  },
  props: {
    files: {
      type: Array,
      required: true,
    },
    pathToData: {
      type: String,
      required: true,
    },
  },
  methods: {
    translateIcons(type) {
      switch (type) {
        case 'xlsx':
          return 'far fa-file-excel';
      }
      return '';
    },
    getValueFromStoreWithPath() {
      const v = this.pathToData.split('.').reduce((o, k) => o && o[k], this.$store.state);
      return v.map((e) => {
        e = e.COD;
      });
    },
  },
};
</script>

<style scoped></style>
