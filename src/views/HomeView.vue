<script setup lang="ts">
// import Header from '../components/HeaderComponent.vue';
// import Footer from '../components/FooterComponent.vue';

// import RightSidebar from '../components/RightSidebarComponent.vue';


</script>
<!-- TODO -->
<!-- [ ] Bổ sung thanh breadcum -->
<!-- [ ] dựng view quản lý task tuần -->
<template>
  <el-container>
    <LeftSidebarComponent></LeftSidebarComponent>
    <el-container style="min-height: 100vh;" direction="vertical">
      <HeaderComponent />
      <el-container direction="horizontal ">
        <el-main>
          home page conent
        </el-main>
        <RightSidebarComponent />
      </el-container>
      <FooterComponent />
    </el-container>
  </el-container>
</template>

