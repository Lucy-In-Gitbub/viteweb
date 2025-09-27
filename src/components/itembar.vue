<template>
    <!-- 列表项子组件，接收content参数并显示 -->
    <div class="item-bar-container">
        <span class="content-text">{{ content }}</span>
        <!-- 文本后的垂直分割线 -->
        <div class="separator"></div>
    </div>
</template>

<script >
import { defineProps } from 'vue';
export default {
    name: 'itembar',
    props: {
        content: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style scoped>
.item-bar-container {
    @apply w-full
    px-4 py-3
    bg-white
    rounded-lg
    border border-gray-100
    hover:bg-gray-50
    transition-colors
    duration-200
    flex
    items-center
    justify-center  /* 新增：容器内元素水平居中 */
    shadow-sm
    text-gray-800;
}

.content-text {
    @apply text-xl
    leading-relaxed
    overflow-hidden
    text-ellipsis
    whitespace-nowrap;
    /* 移除flex-1，避免文本占据全部空间影响居中效果 */
}

/* 分割线样式 */
.separator {
    @apply h-5 w-px 
    ml-3; /* 与文本保持适当间距 */
}
</style>