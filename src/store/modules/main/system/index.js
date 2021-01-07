import task from '@/store/modules/main/system/task/task';

export default {
  use: () => ({
    tasks: task.use({})
  })
};
