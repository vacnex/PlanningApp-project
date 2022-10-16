<script setup lang="ts">
defineProps<{
  subMenuItem: { id: number, text: String }
}>();


</script>
<template >
  <el-tooltip :content="subMenuItem.text" placement="right">
    <a class="w-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" class="sidebar-listIcon">
        <rect x="3" y="3" rx="2" ry="2" class="sidebar-listIcon"></rect>
        <path d="M3 9h18M9 21V9"></path>
      </svg>
      <span class="sidebar-listItemText">{{subMenuItem.text}}</span>
    </a>
  </el-tooltip>
  
</template>
<style scoped>
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
}

.shrink .sidebar-listItemText {
  position: absolute;
  padding: 8px;
  left: 100%;
  opacity: 0;
  background-color: var(--secondary-bg);
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  transition: left 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>