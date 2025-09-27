<template>
    <!-- 列表项子组件，接收post参数并显示其title和context -->
    <div class="item-bar-container">
        <div class="post-content">
            <h3 class="post-title">{{ content.title }}</h3>
            <p class="post-context">{{ content.content }}</p>
        </div>
        <!-- 文本后的垂直分割线 -->
        <div class="separator"></div>
    </div>
</template>

<script lang="ts">
import { defineProps } from 'vue';
import { Post } from '../types/Post';
export default {
    name: 'itembar',
    props: {
        content: {
            type: Object as () => Post,
            required: true,
            // 提供符合Post类型的默认值，避免空值错误
            default: () => ({
                pid: 0,
                title: '',
                content: '',
                status: ''
            })
        }
    }
}
</script>

<style scoped>
.item-bar-container {
    @apply w-full
    px-6 py-4
    bg-white
    rounded-lg
    border border-gray-100
    hover:bg-gray-50
    transition-colors
    duration-200
    flex
    items-center
    shadow-sm
    text-gray-800;
}

.post-content {
    @apply flex-1; /* 让内容区域占据可用空间 */
}

.post-title {
    @apply text-lg font-medium text-gray-900 mb-1;
}

.post-context {
    @apply text-sm text-gray-600 line-clamp-2; /* 最多显示2行，超出省略 */
}

/* 分割线样式 */
.separator {
    @apply h-16 w-px bg-gray-200 
    ml-4; /* 与文本保持适当间距，增加高度使其与内容对齐 */
}
</style>
    