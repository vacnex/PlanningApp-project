<script setup lang='ts'>
defineProps<{
  id?: string
  name?: string
  tasks?: number
}>();
</script>

<template>
  <div :id="id" class="member-task d-flex flex-column gap-1">
    <div class="member-name mb-2 pb-2">
      <span>{{ name }}</span>
    </div>
    <div class="member-task d-flex flex-wrap gap-3 p-1">
      <TaskItemComponent v-for="item in tasks" :key="item" />
    </div>
  </div>
</template>
  
<style scoped>
.member-name {
  background: var(--el-bg-color);
  color: var(--el-color-primary);
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
  