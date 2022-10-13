<script setup lang="ts">
// import Header from '../components/HeaderComponent.vue';
// import Footer from '../components/FooterComponent.vue';

// import RightSidebar from '../components/RightSidebarComponent.vue';


</script>

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

