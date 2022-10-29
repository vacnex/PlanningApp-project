<script setup lang='ts'>
import { Clock, Memo, View, EditPen, Delete, Finished, Switch, Notification } from '@element-plus/icons-vue';
</script>

<template>
  <el-card
    v-contextmenu:TaskContextmenu :body-style="{ height: '100%' }"
    :class="'task-item ' + ['', 'done', 'custom'][Math.floor(Math.random() * 3)]" shadow="hover"
  >
    <v-contextmenu ref="TaskContextmenu">
      <v-contextmenu-item>
        <div class="d-flex gap-2">
          <el-icon>
            <View />
          </el-icon>
          <span>Xem chi tiết</span>
        </div>
      </v-contextmenu-item>
      <v-contextmenu-item>
        <div class="d-flex gap-2">
          <el-icon>
            <EditPen />
          </el-icon>
          <span>Chỉnh sửa</span>
        </div>
      </v-contextmenu-item>
      <v-contextmenu-item>
        <div class="d-flex gap-2">
          <el-icon>
            <Finished />
          </el-icon>
          <span>Hoàn thành</span>
        </div>
      </v-contextmenu-item>
      <v-contextmenu-item>
        <div class="d-flex gap-2">
          <el-icon>
            <Notification />
          </el-icon>
          <span>Ghim</span>
        </div>
      </v-contextmenu-item>
      <v-contextmenu-item>
        <div class="d-flex gap-2">
          <el-icon>
            <Switch />
          </el-icon>
          <span>Dời</span>
        </div>
      </v-contextmenu-item>
      <v-contextmenu-divider />
      <v-contextmenu-item>
        <div class="d-flex gap-2 text-danger">
          <el-icon>
            <Delete />
          </el-icon>
          <span>Xoá</span>
        </div>
      </v-contextmenu-item>
    </v-contextmenu>
    <div class="task-container d-flex flex-column h-100">
      <div class="title">
        <h4 class="m-0">
          Hiển thị điểm học sinh
        </h4>
      </div>
      <div class="tag d-flex gap-1 my-1 ">
        <el-tag v-for="tag in 3" :key="tag" effect="light">
          tag {{ tag }}
        </el-tag>
      </div>
      <div class="info d-flex gap-2 mt-auto">
        <div class="estimate d-flex">
          <span class="d-flex align-items-center gap-1 user-select-none">
            <el-icon>
              <Clock />
            </el-icon>
            <span class="fw-bold">8</span>
            <span class="text-muted"> Tiếng</span>
          </span>
        </div>
        <div class="estimate d-flex">
          <span class="d-flex align-items-center gap-1 user-select-none">
            <el-icon>
              <Memo />
            </el-icon>
            <span class="text-muted">Học vụ</span>
          </span>
        </div>
      </div>
    </div>
  </el-card>
</template>
  
<style scoped>
.task-item {
  width: calc(100% * (1/2) - 10px - 1px);
  border-radius: 16px;
  height: 140px;
}
.task-item.done {
  background-color: var(--el-color-success-light-9);
  border-color: var(--el-color-success);
}

.task-item.custom {
  background-color: var(--el-color-warning-light-9);
}
</style>
  