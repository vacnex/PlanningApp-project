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
const ScrollToMember = (memberID: string) => {
  const memberSection = document.getElementById(memberID);
  if (memberSection) {
    memberSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
</script>
<template>
  <div class="member-wraper">
    <el-scrollbar>
      <div class="d-flex gap-3 p-2">
        <div v-for="member in members" :key="member.id" :class="member.id +'-member'">
          <el-tooltip :content="member.name" placement="bottom">
            <el-avatar class="avatar" :src="'https://github.com/identicons/'+member.id+'.png'" @click="ScrollToMember(member.id)" />
          </el-tooltip>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.avatar {
  cursor: pointer
}
</style>
