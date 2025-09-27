<template>
    <div id="page-title" class="bg-blue-500 text-white text-center shadow-md ">
        <div id="logo-container" class="flex flex-row items-center justify-center h-full min-w-72">
            <img id="logo" src="/src/assets/lemon.svg"></img>
            <p id="title" class="text-4xl font-bold mb-2">{{ pageTitle }}</p>
        </div>
        <div id="index">
            <router-link to="/home">
                <button class="index-btn">首页</button>
            </router-link>
            <router-link to="/home">
                <button class="index-btn">热门</button>
            </router-link>
            <router-link to="/home">
                <button class="index-btn">探索</button>
            </router-link>
        </div>
        <div class="search-container">
            <!-- 搜索输入框 -->
            <input type="text" id="searchInput" placeholder="搜索内容..." class="search-input" v-model="searchTexttemp">

            <!-- 本地SVG图标位置 (预留) -->
            <div class="icon-container">
                <img id="searchIcon" src="/src/assets/search.svg" alt="搜索图标"
                    class="w-full h-full object-contain text-gray-400 transition-colors duration-300">
                <!-- 或者直接嵌入本地SVG代码 -->
                <!-- <svg ...> 你的SVG代码 </svg> -->
            </div>
        </div>
        <div class="ml-4 mt-1 mr-4 min-w-12">
            <img @click="imglogin()" src="/src/assets/manimg.svg" background-color="white">
        </div>
        <div id="account-menu" v-show="useUserStore().isLoggedIn" class="mt-2 relative dropdown inline-block min-w-28">
            <!-- 触发元素 -->
            <button
                class="bg-blue-600 hover:bg-blue-700 text-white  font-medium py-2 px-4 rounded-md flex items-center gap-2">
                <span>{{ account }}</span>
                <img src="/src/assets/arrow.svg" id="dropdown-icon">
                <i class="fa fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
            </button>

            <!-- 下拉内容 -->
            <div class="dropdown-content">
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">个人信息</a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">关注用户</a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">关注贴吧</a>
                <div class="border-t border-gray-100 my-1"></div>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-50">设置</a>
            </div>
        </div>
    </div>
    <div v-show="imgloginbool" class="fixed inset-0 flex items-center justify-center bg bg-black bg-opacity-50 z-98">
        <!-- 登录框容器 -->
        <div class="w-96 bg-white max-w-xs-md bg-white-white  rounded-lg-2xl shadow-2xl z-99 rounded-xl p-6">
            <!-- 用户名输入行 -->
            <div class="mb-4">
                <label for="username" class="block text-gray-700 mb-1">用户</label>
                <input v-model="username" type="text" id="username" placeholder="请输入用户名"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- 密码输入行 -->
            <div class="mb-4">
                <label for="password" class="block text-gray-700 mb-1">密码</label>
                <input v-model="password" type="password" id="password" placeholder="请输入密码"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <!-- 忘记密码链接行 -->
            <div class="mb-6 ml-64">
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm hover:underline">忘记密码？</a>
            </div>

            <!-- 确认按钮行 -->
            <div>
                <button @click="comfirm"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                    确认
                </button>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from "../../store/index";
import { User } from "../../types";
import { getUserByName } from "../../services/UserService";
const userStore = useUserStore();
var pageTitle = "蓝香橙贴吧";
var account = "用户";
var searchTexttemp = ref("");
var searchText = "";

var userimg = "/src/assets/manimg.svg";

var imgloginbool = ref(false);
var theuser = ref<User | null>(null);

var username = ref("");
var password = ref("");

function imglogin() {
    imgloginbool.value = true;
}

function comfirm() {
    console.log("A");
    getUserByName(username.value).then((res) => {
        if (res.success) {
            theuser.value = JSON.parse(JSON.stringify(res.data)) as User;
            console.log(theuser.value.password);
            if (theuser.value.password == password.value) {
                userStore.login(theuser.value);
                imgloginbool.value = false;
            } else {
                alert("用户名或密码错误");
            }
        } else {
            alert(res.msg);
        }
    });
}

</script>

<style scoped>
* {
    @apply m-0 p-0 box-border;
}

#page-title {
    @apply flex z-10 h-14 w-full;
}

#title {
    @apply pt-1 pl-1;
}

#logo {
    @apply ml-10;
}

#index {
    @apply flex flex-row ml-2
}

#account-menu {
    @apply h-12
}

#dropdown-icon {
    @apply text-gray-400 -rotate-90;
}

#dropdown-icon:hover {
    @apply text-gray-500 rotate-90;
}

#searchIcon {
    @apply w-full h-full;
}

#account-menu {
    @apply h-14;
}

.index-btn {
    @apply bg-blue-600 hover:bg-blue-700 text-white min-w-16 mt-2 ml-2 h-10 font-medium py-2 px-4 rounded-md flex items-center gap-2;
}

.search-container {
    @apply ml-72 relative w-full max-w-xl;
}

.search-input {
    @apply w-full pl-12 pr-4 py-3 mt-2 h-10 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md focus:border-indigo-500 focus:shadow-md focus:outline-none transition-all duration-300 ease-in-out placeholder:text-gray-400 text-gray-800 font-medium;
}

#index {
    @apply flex flex-row
}

.icon-container {
    @apply absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5;
}

/* 动画效果 */
.search-input:focus~.icon-container svg {
    @apply text-indigo-500;
}

.search-input:focus {
    @apply border-indigo-300;
}

.dropdown-content {
    @apply absolute left-0 mt-2 w-24 border-spacing-2 bg-gray-100 rounded-md shadow-lg opacity-0 invisible transform -translate-y-2 transition-all duration-200 ease-in-out z-10;
}

.dropdown:hover .dropdown-content {
    @apply opacity-100 visible transform -translate-y-2;
}
</style>
