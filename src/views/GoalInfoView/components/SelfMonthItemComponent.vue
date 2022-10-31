<script setup lang='ts'>

</script>

<template>
  <el-card shadow="hover">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores at, temporibus nulla molestias harum
      cumque impedit blanditiis asperiores ex reiciendis maxime incidunt explicabo ut accusantium laudantium saepe
      reprehenderit minima.
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <el-popover placement="top-start" title="Danh sách thành viên" :width="200" trigger="hover">
          <template #reference>
            <el-button type="info" link>
              Thành viên
            </el-button>
          </template>
          <div v-for="member in 3" :key="member" :class="member + '-member mb-2'">
            <div class="d-flex gap-2 justify-content-start align-items-center">
              <el-avatar class="avatar" :src="'https://github.com/identicons/' + member + '.png'" />
              <span>{{ member }}</span>
            </div>
          </div>
        </el-popover>
      </div>
      <div class="w-75">
        <el-progress :percentage="50" :show-text="false" />
      </div>
    </div>
  </el-card>
</template>

<style scoped>
</style>
  