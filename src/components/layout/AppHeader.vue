<script setup="">
import {isCollapse} from '@/components/layout/isCollapse.ts'
</script>
<template>
  <el-header>
    <el-icon @click="isCollapse=!isCollapse">
      <IEpExpand v-show="isCollapse" />
      <IEpFold v-show="!isCollapse" />
    </el-icon>
    <!--面包屑-->
<!--    <el-breadcrumb separator="/">-->
<!--      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>-->
<!--        <a href="/">promotion management</a>-->
<!--      </el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>promotion list</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>-->
<!--    </el-breadcrumb>-->

    <!--    下列菜单-->
    <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="50" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户姓名</el-dropdown-item>
<!--          点击退出回到登录页-->
          <el-dropdown-item>退出</el-dropdown-item>

        </el-dropdown-menu>
      </template>
    </el-dropdown>


  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #e8e3e3;
}
.el-dropdown{
  margin-left: auto;
  .el-dropdown-link{
    display: flex;
    align-items: center;
  }
}// 作用  使得下拉菜单靠右

</style>
