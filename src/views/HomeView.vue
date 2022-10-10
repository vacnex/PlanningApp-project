<script setup lang="ts">
import Header from '../components/HeaderComponent.vue';
import Footer from '../components/FooterComponent.vue';
import LeftSidebar from '../components/LeftSidebarComponent.vue';
import RightSidebar from '../components/RightSidebarComponent.vue';


</script>

<template>
  <el-container>
    <LeftSidebar />
    <el-container style="min-height: 100vh;" direction="vertical">
      <Header />
      <el-container direction="horizontal ">
        <el-main>
          home page conent
        </el-main>
        <RightSidebar />
      </el-container>
      <Footer />
    </el-container>
  </el-container>
</template>

