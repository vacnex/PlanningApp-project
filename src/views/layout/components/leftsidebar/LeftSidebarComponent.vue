<script setup lang="ts">
import {
  Menu as IconMenu,
  House,
  ArrowLeft,
  ArrowRight
} from '@element-plus/icons-vue';
const isCollapse = ref(true);
const visible = ref(false);
const router = useRouter();
const ShrinkSideBar = () => {
  isCollapse.value = !isCollapse.value;
};

</script>
<!-- TODO -->
<!-- [x] Chuyển sang dùng element menu component-->
<!-- [ ] Thêm logo-->
<!-- [x] Dùng router cho các menu-->
<template>
  <div class="sidebar-container align-self-center">
    <el-tooltip :visible="visible" :content="isCollapse?'Mở':'Đóng'" placement="top" effect="dark">
      <button
        class="sidebar-viewButton" type="button" aria-label="Đóng Sidebar"
        @click="ShrinkSideBar" @mouseenter="visible = true" @mouseleave="visible = false"
      >
        <el-icon :size="24">
          <ArrowLeft v-if="!isCollapse" />
          <ArrowRight v-else />
        </el-icon>
      </button>
    </el-tooltip>
   
    <div class="sidebar-wrapper">
      <el-divider class="my-2" />
      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
        <template v-for="rule in router.currentRoute.value.matched[0].children" :key="rule">
          <el-menu-item :index="rule.path">
            <el-icon>
              <House v-if="rule.name =='Dashboard'" />
              <icon-menu v-else />
            </el-icon>
            <template #title>
              {{ rule.meta?.title }}
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <el-divider class="my-2" />
    </div>
  </div>
</template>

<style>
:root {
  --Shrink-bg: #251d33;
}

html.dark {
  --Shrink-bg: var(--el-bg-color-2)
}

.el-menu li{
  margin-bottom: 5px;
  border-radius: 10px;
}
.el-sub-menu__title:hover,.el-menu-item:hover {
  color: #1c1c28
}
.el-menu--popup {
  padding: 5px 7px;
}
</style>
<style scoped>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
}
.el-menu{
  border: none;
}
.sidebar-container {
  background-color: var(--el-bg-color-1);
  border: .5px solid var(--el-bg-color-2);
  box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
  backdrop-filter: blur(80px);
  border-radius: 16px;
  padding: 16px;
  height: 98vh;
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