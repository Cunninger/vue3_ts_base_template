<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <h2>登 录</h2>
      <div class="form-group">
        <label for="username">用户名</label>
        <input id="username" v-model="username" required type="text"/>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input id="password" v-model="password" required type="password"/>
      </div>
      <button class="login-button" type="submit">Login</button>
      <div class="register-description">
        还没有账号？
        <router-link to="/register">前往注册</router-link>
      </div>

    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {SysUserControllerService} from "../../../generated";
import router from "@/router";

const username = ref('');
const password = ref('');

const login = async () => {
  const loginVo = {
    username: username.value,
    password: password.value
  }
  try {
    const res = await SysUserControllerService.loginUsingPost(loginVo);
    if (res.code === 0) {
      // 跳转到首页“/”
      router.push('/layout');
      // 添加登录成功后的逻辑
    } else {
      alert('用户名或密码错误!');
    }
  } catch (error) {
    console.error('登录出错:', error);
    alert('登录过程中出现错误,请稍后再试');
  }
};
</script>

<style lang="scss "scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  background-image: url('@/assets/img.png'); // 替换为你的背景图片路径
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-form h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
.register-description{
  margin-top: 1rem;
  font-size: 14px;
  color: #666;
}
</style>
