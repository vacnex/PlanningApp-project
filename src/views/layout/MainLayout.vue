<script setup lang="ts">

</script>
//TODO
// [ ] Validate trường hợp user chưa join project nào
<!-- [x] Bổ sung thanh breadcum -->
<!-- [x] Dựng view quản lý task tuần -->
<!-- [x] Dựng view chọn project -->
<template>
  <ProjectSelect />
  <div class="app-wrapper d-flex">
    <LeftSidebarComponent />
    <div class="main-container flex-grow-1 d-flex flex-column">
      <HeaderComponent />
      <MainContent />
    </div>
    <ConnfigDrawer />
  </div>
</template>
<style scoped>
.app-wrapper{
  height:100vh;
}
</style>