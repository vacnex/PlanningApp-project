<script setup lang='ts'>

</script>

<template>
  <el-row>
    <el-col :span="8">
      <SelfMonthListComponent />
    </el-col>
    <el-col :span="16">
      <el-row>
        <el-col :span="24">
          <CompanyMonthListComponent />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <TeamMonthListComponent />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>


<style scoped>
</style>
  