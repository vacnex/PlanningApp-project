<script setup lang="ts">
// import { Search } from '@element-plus/icons-vue';
import { Search, Setting, Bell, Files } from '@element-plus/icons-vue';
// import { toggleDark } from '../composables/DarkTheme';
// import { ref } from 'vue';

const curUser = useUserInfoStore().get_user_infor();
// const searchBox = ref();

const ToggleConfig = () => {
  emitter.emit('openPanel' as any);
};
const ToggleSelectProject = () => {
  emitter.emit('openProjectPanel' as any);
};

</script>

//TODO
// [ ] Chức năng search
// [ ] Chức năng logout

<template>
  <div class="d-flex justify-content-between align-items-center p-3">
    <BreadcrumbComponent />
    <div class="d-flex gap-2">
      <el-button size="large" text circle>
        <el-icon :size="24">
          <Search />
        </el-icon>
      </el-button>
      <el-button size="large" text circle>
        <el-icon :size="24">
          <Bell />
        </el-icon>
      </el-button>
      <el-button size="large" text circle @click="ToggleSelectProject">
        <el-icon :size="24">
          <Files />
        </el-icon>
      </el-button>
      <div class="profileSection-info d-flex">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <span class=" ps-3 text-nowrap"><span class="text-muted user-select-none"><small>{{ curUser['role']
        }}</small></span><br><span class="fw-semibold user-select-none">{{ curUser['name'] }}</span></span>
      </div>
      <el-button size="large" text circle @click="ToggleConfig">
        <el-icon :size="24">
          <Setting />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>
<style scoped>
.profileSection-info {
  cursor: pointer
}
</style>