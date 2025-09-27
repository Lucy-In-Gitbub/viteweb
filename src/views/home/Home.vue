<template>

    <div id="home">
        <div id="quick">
            <itembar content="论坛1" />
            <itembar content="论坛2" />
            <itembar content="论坛3" />
        </div>
        <div class="ml-4 mt-4 mb-4 w-[50vw] rounded-xl border bg-gray-50">
            <!-- 加足够高的内容，触发页面滚动 -->
            <div class="h-[70vh] w-76 flex flex-col overflow-y-auto items-center justify-center text-gray-500">
                <Postbar v-for="post in posts" :key="post.id" :content="post" />
                <p>没有更多内容了</p>
            </div>   
        </div>
        <div id="right">
            <itembar content="个人信息1" />
            <itembar content="个人信息2" />
            <itembar content="个人信息3" />
        </div>
    </div>
</template>

<style>
#home {
    @apply flex flex-row bg-blue-100 w-full overflow-y-auto -z-50;
    position: relative;

}

#quick {
    @apply ml-36 mt-8 mb-8 rounded-xl w-36 sticky top-0 bg-white border border-gray-400;
}

#right {
    @apply ml-4 mt-8 mb-8 rounded-xl w-56 sticky top-0 bg-white border border-gray-400;
}
</style>

<script lang="ts" setup>
import test from "node:test";
import itembar from "../../components/itembar.vue";
import raster from "../../components/Raster.vue"
import getAllPosts from "../../services/PostService";
import { Post } from "../../types/Post";

import { onActivated, onMounted, reactive,ref } from "vue";
import Postbar from "../../components/Postbar.vue";
import { on } from "events";
var posts = ref<Post[]>([]);
 async function  init() {

}
onMounted( async() => {
    let res=    await  getAllPosts();
    if (res.success) {
        if(res.data){
            console.log(res.data);
            posts.value=res.data;
        }
    }
});

</script>