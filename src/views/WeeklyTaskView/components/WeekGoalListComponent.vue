<script setup lang='ts'>

</script>

<template>
  <el-scrollbar height="50vh" view-class="p-2">
    <WeekGoalItemComponent v-for="item in 10" :key="item" />
  </el-scrollbar>
</template>

  
<style scoped>
.week-goal-item {
  border-radius: 10px;
}
</style>
  