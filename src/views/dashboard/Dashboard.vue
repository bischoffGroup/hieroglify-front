<template>
  <v-container>
    <molecular-tasks :namespace="namespace" :division="division" :tag="tag" />
  </v-container>
</template>
<script>
import MolecularTasks from '@/components/molecules/concrete/MolecularTasks';
import { SYSTEM_TASK_GENERATE_TASKS } from '@/store/modules/enums/actionTypes';

export default {
  components: { MolecularTasks },
  data() {
    return {
      namespace: 'system',
      division: 'tasks',
      tag: 'data',
      actionName: SYSTEM_TASK_GENERATE_TASKS,
    };
  },
  mounted() {
    this.generateTasks();
  },
  methods: {
    generateTasks() {
      this.$store.dispatch(
        `${this.namespace}/${this.division}/${this.actionName}`
      );
    },
  },
};
</script>
