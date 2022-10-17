<script setup lang="ts">
import {
  Setting
} from '@element-plus/icons-vue';
const isShrink = ref(false);
const isActive = ref(false);
const visible = ref(false);
// [ ] Menus vào json server
const menus = reactive([
  {
    id: 1, text: 'Menu 1', hasSubMenu: true, submenu: [
      { id: 1, text: 'Sub menu 1' },
      { id: 2, text: 'Sub menu 2' },
      { id: 3, text: 'Sub menu 3' }
    ]
  },
  { id: 2, text: 'Menu 2', hasSubMenu: false, submenu: [] },
  { id: 3, text: 'Menu 3', hasSubMenu: false, submenu: [] },
  { id: 4, text: 'Menu 4', hasSubMenu: false, submenu: [] },
  {
    id: 5, text: 'Menu 5', hasSubMenu: true, submenu: [
      { id: 1, text: 'Sub menu 1' },
      { id: 2, text: 'Sub menu 2' },
      { id: 3, text: 'Sub menu 3' }
    ]
  },
  { id: 6, text: 'Menu 6', hasSubMenu: false, submenu: [] },
  {
    id: 7, text: 'Menu 7', hasSubMenu: true, submenu: [
      { id: 1, text: 'Sub menu 1' },
      { id: 2, text: 'Sub menu 2' },
      { id: 3, text: 'Sub menu 3' }
    ]
  },
  {
    id: 8, text: 'Menu 8', hasSubMenu: true, submenu: [
      { id: 1, text: 'Sub menu 1' },
      { id: 2, text: 'Sub menu 2' },
      { id: 3, text: 'Sub menu 3' }
    ]
  },
  { id: 9, text: 'Menu 9', hasSubMenu: false, submenu: [] },
]);
const ShrinkSideBar = () => {
  isShrink.value = !isShrink.value;
};
const ActiveItem = () => {
  isActive.value = !isActive.value;
};

</script>
<!-- TODO -->
<!-- [ ] Chuyển svg thành component-->
<!-- [ ] Show submenu dạng dropdown khi sidebar shrink-->
<!-- [ ] Load thông tin user lên sidebar-profileSection-->
<!-- [ ] Chuyển các css của component menu và submenu sang css dùng chung-->

<template>
  <div class="sidebar-container align-self-center" :class="isShrink?'shrink':''">
    <button class="sidebar-viewButton" type="button" aria-label="Đóng Sidebar" title="Đóng" @click="ShrinkSideBar">
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    <div class="sidebar-wrapper">
      <div class="sidebar-profileSection">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <span class="profileSection-info"><span class="text-muted"><small>Thành viên</small></span><br><span
          class="fw-semibold"
        >Trương Gia Huy</span></span>
      </div>
      <el-divider class="my-2" />
      <ul class="sidebar-list">
        <li class="sidebar-listItem" :class="isActive?'active':''" @click="ActiveItem">
          <el-tooltip content="Dashboard" placement="right" :visible="visible">
            <a @mouseenter="visible = true" @mouseleave="visible = false">
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sidebar-listIcon"
              >
                <rect x="3" y="3" rx="2" ry="2" class="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span class="sidebar-listItemText">Dashboard</span>
            </a>
          </el-tooltip>
        </li>
        <el-scrollbar max-height="70vh" tag="ul" view-class="list-unstyled">
          <li v-for="menu in menus" :key="menu.id" class="sidebar-listItem">
            <MenuItem :menu="menu" :shrink="isShrink" />
          </li>
        </el-scrollbar>
      </ul>
      <el-divider class="my-2" />
      <div class="sidebar-settingSection">
        <a>
          <el-icon :size="20">
            <Setting />
          </el-icon>
          <span class="sidebar-listItemText">Cài đặt</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --Shrink-bg: #251d33
}

html.dark {
  --Shrink-bg: var(--el-bg-color-2)
}
</style>
<style scoped>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-container {
  background-color: var(--el-bg-color-1);
  border: .5px solid var(--el-bg-color-2);
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  backdrop-filter: blur(80px);
  border-radius: 16px;
  padding: 16px;
  width: 240px;
  position: relative;
  transition: width 0.2s ease-in-out;
}

.sidebar-container.shrink {
  width: 92px;
}

.sidebar-viewButton {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  right: -10px;
  top: 32px;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: var(--Shrink-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-viewButton:hover {
  opacity: 0.8;
}

.sidebar-viewButton svg {
  width: 16px;
}

.shrink .sidebar-viewButton {
  transform: rotatey(-180deg);
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
}

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

.sidebar-profileSection {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  overflow: hidden;
  height: 60px;
  flex-shrink: 0;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
}

.sidebar-profileSection span.profileSection-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shrink .sidebar-profileSection span.profileSection-info {
  display: none;
}


.sidebar-listItemText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  user-select: none;
}


.sidebar-settingSection {
  display: flex;
  align-items: center;
  -webkit-animation: fadeInItem-40f750b8 0.6s forwards;
  animation: fadeInItem-40f750b8 0.6s forwards;
  transition: background 0.2s ease-in;
  transform: translatex(-16px);
  opacity: 0;
  padding: 8px 0;
  position: relative;
}

.sidebar-settingSection a {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
  padding-left: 20px;
}

.sidebar-settingSection a i {
  display: inline-block;
  margin-right: 8px;
  flex-shrink: 0;
}

.sidebar-settingSection a i svg {
  width: 20px;
  height: 20px;
}

.shrink .sidebar-settingSection a .sidebar-listItemText {
  display: none;
}

.sidebar-listItem:nth-child(n+0) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.sidebar-listItem:nth-child(n+1) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.sidebar-listItem:nth-child(n+2) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.sidebar-listItem:nth-child(n+3) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.sidebar-listItem:nth-child(n+4) {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.sidebar-listItem:nth-child(n+5) {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.sidebar-listItem:nth-child(n+6) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}





@-webkit-keyframes fadeInItem {
  100% {
    transform: translatex(0px);
    opacity: 1;
  }
}

@keyframes fadeInItem {
  100% {
    transform: translatex(0px);
    opacity: 1;
  }
}
</style>