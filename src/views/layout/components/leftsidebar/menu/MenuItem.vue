<script setup lang="ts">
import {
  ArrowDown
} from '@element-plus/icons-vue';
const visible = ref(false);
const props = defineProps<{
  menu: { id: number, text: String, hasSubMenu: boolean, submenu: { id: any, text: String }[] },
  shrink: boolean
}>();
const { shrink } = toRefs(props);

const showCollapseSubMenu = ref(false);

const ToggleSubMenu = () => {
  console.log(showCollapseSubMenu.value, shrink.value);
  showCollapseSubMenu.value = !showCollapseSubMenu.value;
};
</script>
<template>
  <div v-if="menu.hasSubMenu" class="w-100">
    <el-tooltip :content="menu.text" placement="right">
      <a class="w-auto" @click="ToggleSubMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="sidebar-listIcon"
        >
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path
            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
          />
        </svg>
        <span class="sidebar-listItemText">{{ menu.text }}</span>
        <el-icon class="ms-auto submenu-icon" style="transform: none;" :class="showCollapseSubMenu?'submenu-shrink':''">
          <ArrowDown />
        </el-icon>
      </a>
    </el-tooltip>

    <el-collapse-transition>
      <ul v-show="showCollapseSubMenu" class="list-unstyled ms-3 sidebar-submenu">
        <li v-for="subMenuItem in menu.submenu" :key="subMenuItem.id">
          <SubmenuItem :sub-menu-item="subMenuItem" />
        </li>
      </ul>
    </el-collapse-transition>
  </div>
  <el-tooltip v-else :content="menu.text" placement="right" :visible="visible">
    <a @mouseenter="visible = true" @mouseleave="visible = false">
      <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="sidebar-listIcon"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      <span class="sidebar-listItemText">{{ menu.text }}</span>
    </a>
  </el-tooltip>
</template>
<style scoped>
.sidebar-listItem {
  display: flex;
  align-items: center;
  -webkit-animation: fadeInItem 0.6s forwards;
  animation: fadeInItem 0.6s forwards;
  transition: background 0.2s ease-in;
  transform: translatex(-16px);
  opacity: 0;
  padding: 8px 0;
  position: relative;
}

.shrink .sidebar-listItem span {
  display: none;
}

.sidebar-listItem.active a {
  background-color: var(--el-bg-color-2);
  border-radius: 12px;
}

.sidebar-listItem:not(.active) a:hover {
  background-color: var(--el-bg-color-2);
  border-radius: 12px;
}

.sidebar-listItem a {
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.sidebar-listIcon {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px;
  flex-shrink: 0;
}

.shrink .sidebar-listIcon {
  margin-right: 0;
}

.sidebar-listItemText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  user-select: none;
}

.submenu-icon {
  transition: transform var(--el-transition-duration);
}

.submenu-shrink {
  transform: rotate(90deg) !important;
}

.shrink .sidebar-submenu,
.shrink .submenu-icon {
  display: none;
}
</style>