<template>
    <div class="bg-blue-500  shadow-md h-30">
        <div class="container mx-auto px-4 flex flex-col">
            <div class="flex flex-rows">
                <img src="../../assets/manimg.svg"></img>
                <p class="h-full px-4 py-4">欢迎，{{ username }}</p>
            </div>
            <!-- 导航链接 -->
            <div class="flex items-center justify-items-start h-16">
                <!-- 四个导航链接 -->
                <router-link to="/personal-info"
                    class="flex items-center ml-2  px-2 pr-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-all duration-300">
                    <i class="mr-2"></i>
                    <span>个人信息</span>
                </router-link>

                <router-link to="/lemon-subscription"
                    class="flex items-center ml-2 px-2 pr-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-all duration-300">
                    <i class=" mr-2"></i>
                    <span>柠檬订阅</span>
                </router-link>

                <router-link to="/posts"
                    class="flex items-center ml-2 px-2 pr-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-all duration-300">
                    <i class="  mr-2"></i>
                    <span>&nbsp;&nbsp;帖子&nbsp;&nbsp;</span>
                </router-link>

                <router-link to="/comments"
                    class="flex items-center ml-2 px-2 pr-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-all duration-300">
                    <i class=" mr-2"></i>
                    <span>&nbsp;&nbsp;评论&nbsp;&nbsp;</span>
                </router-link>
                <div class="flex ml-auto">
                    <span id="follow"
                        class="bg-blue-600 min-w-28 text-center text-black border-2  py-2 border-spacing-2 hover:bg-blue-700 items-center rounded-md translate-all duration-300">
                        &nbsp;&nbsp;关注该人&nbsp;&nbsp;</span>
                    <span class="bg-blue-600 min-w-28 text-center text-black border-2  py-2 border-spacing-2 hover:bg-blue-700 items-center rounded-md translate-all duration-300 ml-2">
                        发送消息
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- 页面内容区域占位 -->
    <div class="container mx-auto px-4 py-8">
        <router-view></router-view> 
    </div>

</template>
<script setup>
import { onMounted } from 'vue';
var username = "待定";
onMounted(() => {
    // 3. 先获取元素，添加容错判断（避免元素意外不存在的情况）
    const toggleElement = document.getElementById('follow');

    
    // 4. 只有元素存在时，才添加事件监听（彻底避免 null 报错）
    if (toggleElement) {
            toggleElement.addEventListener('click', () => {
                // 这里写你的点击逻辑（示例：切换关注状态）
                console.log('关注按钮被点击');
                if (toggleElement.textContent.includes('关注该人')) {
                    toggleElement.textContent = '   已关注  ';
                    toggleElement.classList.replace('bg-blue-600', 'bg-gray-500',);
                    toggleElement.classList.replace('hover:bg-blue-700', 'hover:bg-gray-600',);
                    toggleElement.classList.replace('text-black', 'text-white',);
                } else if(toggleElement.textContent.includes('已关注')){
                    console.log('取消关注');
                    toggleElement.textContent = '  关注该人  ';
                    toggleElement.classList.replace('bg-gray-500', 'bg-blue-600');
                    toggleElement.classList.replace( 'text-white','text-black');

                }
            });
        } else {
            // 可选：如果元素不存在，打印提示（方便调试）
            console.warn('未找到 id 为 "follow" 的元素，请检查模板中的 id 是否正确');
        }
});
</script>
<style></style>
