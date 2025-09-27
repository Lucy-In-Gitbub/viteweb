
<template>
  <!---测试tailwindcss-->
  <div id="app">
    <pagetitile/>
    <router-view/>
    <pagetail/>
  </div>
  
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {pagetitile, pagetail} from './layouts/global';

// 组件挂载后立即重定向
onMounted(() => {
  const router = useRouter();
  // 替换为目标页面的路由路径，例如 '/home'
  if (router.currentRoute.value.path === '/') {
  router.push('/home');
  }
});
</script>



<style scoped>
#app {
}

</style>
