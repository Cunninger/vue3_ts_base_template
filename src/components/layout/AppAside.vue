<script setup="">
import {isCollapse} from '@/components/layout/isCollapse.ts'
</script>
<template>
  <el-aside>
  <el-scrollbar>
    <el-menu :collapse="isCollapse" router unique-opened>


      <a class="logo" href="/">
        <img alt="" src="@/assets/logo.svg"/>
      <h1> HelloWorld</h1>
      </a>
      <el-sub-menu>
        <template #title>
          <el-icon>
            <IEpSetting />
          </el-icon>
          <span> 权限管理</span>
        </template>

        <el-menu-item index="/usermanage">
          <el-icon>
            <IEpSetting />
          </el-icon>
          <span> 用户管理</span>
        </el-menu-item>

        <el-menu-item index="/classmanage">
          <el-icon>
            <IEpSetting />
          </el-icon>
          <span> 课程管理</span>
        </el-menu-item>
      </el-sub-menu>


      <el-sub-menu>
        <template #title>
          <el-icon>
            <IEpSetting />
          </el-icon>
          <span> 广告管理</span>
        </template>
        <el-menu-item index="/qq">
          <el-icon>
            <IEpSetting />
          </el-icon>
          <span> QQ</span>
        </el-menu-item>
        <el-menu-item index="/wx">
          <el-icon>
            <IEpSetting />
          </el-icon>
          <span> WX</span>
        </el-menu-item>
      </el-sub-menu>


    </el-menu>
  </el-scrollbar>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
}

.el-menu {
  width: 200px;
  background-color: #eee;
  color: #fff;
  border-right: none;

  &.el-menu--collapse {
    width: 64px;
    & h1 {
      display: none;
      // 解释 & 的作用
      // 1. & 代表当前选择器的父级选择器
    }
  }
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  height: 60px;

  img {
    width: 28px;
    height: 28px
  }
}
</style>
