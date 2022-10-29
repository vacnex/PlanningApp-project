<script setup lang='ts'>

</script>

<template>
  <el-card shadow="hover" class="widget widget-estimate">
    <el-progress type="dashboard" :percentage="95" :width="100">
      <template #default>
        <div class="d-flex flex-column gap-1">
          <span>32/40</span>
          <span>Số giờ</span>
        </div>
      </template>
    </el-progress>
  </el-card>
  <el-card shadow="hover" class="widget widget-task-progress">
    <el-progress type="dashboard" :percentage="80" :width="100">
      <template #default="{ percentage }">
        <div class="d-flex flex-column gap-1">
          <span>{{ percentage }}%</span>
          <span>Tiến độ</span>
        </div>
      </template>
    </el-progress>
  </el-card>
  <el-card shadow="hover" class="widget widget-task-done">
    <el-progress type="dashboard" :percentage="55" :width="100">
      <template #default>
        <div class="d-flex flex-column gap-1">
          <span>7/13</span>
          <span>Hoàn thành</span>
        </div>
      </template>
    </el-progress>
  </el-card>
</template>

  
<style  scoped>
.widget {
  cursor: pointer;
}
</style>
  