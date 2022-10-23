<script setup lang="ts">
import { Clock, Memo, Setting, View, EditPen, Delete, Finished, Switch, Notification } from '@element-plus/icons-vue';
const members = [{
  name: 'Trương Gia Huy',
  id: 'TruongGiaHuy'
},
{
  name: 'Nguyễn Thanh Sơn',
  id: 'NguyenThanhSon'
},
{
  name: 'Nguyễn Thanh Sang',
  id: 'NguyenThanhSang'
},
{
  name: 'Phan Tấn đạt',
  id: 'PhanTanDat'
}];
</script>
//TODO
// [ ] Tách component
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
  <v-contextmenu ref="contextmenu">
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
  <el-row>
    <el-col :span="13">
      <MemberComponent />
      <div class="d-flex gap-1" />
      <div class="task-list">
        <el-scrollbar height="75vh" view-class="d-flex flex-column gap-3 p-2">
          <div v-for="member in members" :id="member.id" :key="member.id" class="member-task d-flex flex-column gap-1">
            <div class="member-name mb-2 pb-2">
              <span>{{ member.name }}</span>
            </div>
            <div class="member-task d-flex flex-wrap gap-3 p-1">
              <el-card
                v-for="item in 6" :key="item" v-contextmenu:contextmenu :body-style="{height:'100%'}"
                :class="'task-item ' + ['','done','custom'][Math.floor(Math.random()*3)]" shadow="hover"
              >
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
            </div>
          </div>
        </el-scrollbar>
      </div>
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
          <el-card shadow="hover" class="widget-estimate">
            <el-progress type="dashboard" :percentage="95" :width="100">
              <template #default>
                <div class="d-flex flex-column gap-1">
                  <span>32/40</span>
                  <span>Số giờ</span>
                </div>
              </template>
            </el-progress>
          </el-card>
          <el-card shadow="hover" class="widget-task-progress">
            <el-progress type="dashboard" :percentage="80" :width="100">
              <template #default="{ percentage }">
                <div class="d-flex flex-column gap-1">
                  <span>{{ percentage }}%</span>
                  <span>Tiến độ</span>
                </div>
              </template>
            </el-progress>
          </el-card>
          <el-card shadow="hover" class="widget-task-done">
            <el-progress type="dashboard" :percentage="55" :width="100">
              <template #default>
                <div class="d-flex flex-column gap-1">
                  <span>7/13</span>
                  <span>Hoàn thành</span>
                </div>
              </template>
            </el-progress>
          </el-card>
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
          <el-scrollbar height="50vh" view-class="p-2">
            <el-card
              v-for="item in 10" :key="item" shadow="hover" :body-style="{ padding: '20px'}"
              class="week-goal-item my-2"
            >
              <template #header>
                <div>
                  <span>Sang chuyển giao Tài Chính cho anh Hậu hỗ trợ trong T8</span>
                </div>
              </template>
              <div class="d-flex gap-3">
                <div class="d-flex flex-column">
                  <div>
                    <span class="fw-bold">Hậu</span>
                  </div>
                  <div>
                    <span class="text-muted"><small>Người phụ trách</small></span>
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <div>
                    <span class="fw-bold">20/9/2022</span>
                  </div>
                  <div>
                    <span class="text-muted"><small>Deadline</small></span>
                  </div>
                </div>
              </div>
            </el-card>
          </el-scrollbar>
        </div>
      </div>
    </el-col>
  </el-row>
</template>


<style scoped>
.widget-estimate {
  cursor: pointer;
}

.week-goal-item {
  /* height: 55px;
  margin: 10px; */
  border-radius: 10px;
  /* background: var(--el-bg-color-1); */
}

.member-name {
  background: var(--el-bg-color);
  color: var(--el-color-primary);
  position: sticky;
  top: 0;
  z-index: 1;
}

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
  /* border-color: var(--el-color-warning); */
}
</style>
