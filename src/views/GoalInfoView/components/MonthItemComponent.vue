<script setup lang='ts'>
import { Notification } from '@element-plus/icons-vue';

</script>

<template>
  <el-card v-contextmenu:contextmenu shadow="hover">
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item>
        <div class="d-flex gap-2">
          <el-icon>
            <Notification />
          </el-icon>
          <span>Ghim</span>
        </div>
      </v-contextmenu-item>
    </v-contextmenu>
    <template #header>
      <div>
        <span>Sang chuyển giao Tài Chính cho anh Hậu hỗ trợ trong T8</span>
      </div>
    </template>
    <div class="d-flex gap-3">
      <div class="d-flex flex-column">
        <div>
          <span class="fw-bold">Mầm non</span>
        </div>
        <div>
          <span class="text-muted"><small>Phân hệ</small></span>
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
</template>
  

<style scoped>
</style>
  