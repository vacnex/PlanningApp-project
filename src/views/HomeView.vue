<script setup lang="ts">
// import Header from '../components/HeaderComponent.vue';
// import Footer from '../components/FooterComponent.vue';

// import RightSidebar from '../components/RightSidebarComponent.vue';


</script>
<!-- TODO -->
<!-- [x] Bổ sung thanh breadcum -->
<!-- [ ] Dựng view quản lý task tuần -->
<!-- [x] Dựng view chọn project -->
<template>
  <ProjectSelect />
  <el-container>
    <LeftSidebarComponent />
    <el-container style="min-height: 100vh;" direction="vertical">
      <HeaderComponent />
      <el-container direction="horizontal">
        <el-main>
          home page conent
        </el-main>
        <RightSidebarComponent />
      </el-container>
      <FooterComponent />
    </el-container>
  </el-container>
</template>

