<script setup lang='ts'>

const members = [{
  name: 'Trương Gia Huy',
  id: 'TruongGiaHuy'
},
{
  name: 'Nguyễn Thanh Sơn',
  id: 'NguyenThanhSon'
},
{
  name: 'Nguyễn Thanh Sang',
  id: 'NguyenThanhSang'
},
{
  name: 'Phan Tấn đạt',
  id: 'PhanTanDat'
}];
</script>

<template>
  <div class="task-list">
    <el-scrollbar height="70vh" view-class="d-flex flex-column gap-3 p-2">
      <MemberTaskListComponent v-for="member in members" :id="member.id" :key="member.id" :name="member.name" :tasks="10" />
    </el-scrollbar>
  </div>
</template>

<style scoped>

</style>  