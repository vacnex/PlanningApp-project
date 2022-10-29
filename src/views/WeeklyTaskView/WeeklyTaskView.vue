<script setup lang="ts">
import {  Setting, View } from '@element-plus/icons-vue';

</script>
//TODO
// [x] Tách component
// [ ] Dùng data từ api
// [ ] Chỉnh màu text ở dark mode
// [ ] Phân quyền quyền theo user đăng nhập
// [ ] Danh sách task theo project
// [ ] Chức năng trong contextmenu (xem chi tiết)
// [ ] Bổ sung component filter, nút thêm
// [ ] Bổ sung panel cho widget
// [ ] Bổ sung component filter, nút thêm
// [ ] Bổ sung trạng thái chuyển của task
// [ ] Bổ sung component filter, nút thêm

<template>
  <el-row>
    <el-col :span="13">
      <MemberComponent />
      <TaskListComponent />
    </el-col>
    <el-col :span="11">
      <div class="widget-wrapper">
        <div class="widget-header d-flex justify-content-between align-items-center mb-3">
          <div class="widget-header-text fw-bold">
            <span>Widget Cá nhân</span>
          </div>
          <div class="widget-header-config">
            <el-button :icon="Setting" circle />
          </div>
        </div>
        <div class="widget-content d-flex gap-2">
          <WidgetListComponent />
        </div>
      </div>
      <el-divider />
      <div class="week-goal-wrapper">
        <div class="week-goal-header d-flex justify-content-between align-items-center mb-3">
          <div class="widget-header-text fw-bold">
            <span>Mục tiêu tuần</span>
          </div>
          <div class="widget-header-config">
            <el-link>
              Mục tiêu tháng team / cá nhân <el-icon class="el-icon--right">
                <View />
              </el-icon>
            </el-link>
          </div>
        </div>
        <div class="widget-content">
          <WeekGoalListComponent />
        </div>
      </div>
    </el-col>
  </el-row>
</template>


<style scoped>



</style>
