<template>
  <div class="grid-container">
    <!-- 动态生成竖向光栅 -->
    <div 
      v-for="(line, index) in lines" 
      :key="index" 
      class="vertical-line"
      :style="{ 
        left: `${index * (lineWidth + gapWidth)}px`,
        height: `${windowHeight}px`,
        width: `${lineWidth}px`,
        backgroundColor: lineColor
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'VerticalGridOverlay',
  data() {
    return {
      // 光栅配置
      lineWidth: 45,       // 每个光栅宽度(px)
      gapWidth: 45,         // 光栅间隔(px)
      lineColor: '#add8e6', // 淡蓝色
      lines: 0,            // 光栅数量
      windowHeight: window.innerHeight // 浏览器窗口高度
    };
  },
  mounted() {
    // 计算需要多少条竖线才能覆盖整个视口宽度
    this.calculateLines();
    
    // 监听窗口大小变化，动态调整光栅
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    // 移除事件监听
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    calculateLines() {
      // 计算视口宽度
      const viewportWidth = window.innerWidth;
      // 计算每一组(光栅+间隔)的宽度
      const groupWidth = this.lineWidth + this.gapWidth;
      // 计算需要多少条竖线才能覆盖视口
      this.lines = Math.ceil(viewportWidth / groupWidth) + 1;
    },
    handleResize() {
      // 更新窗口高度
      this.windowHeight = window.innerHeight;
      // 重新计算线条数量
      this.calculateLines();
    }
  }
};
</script>

<style scoped>
.grid-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: none; /* 允许点击穿透光栅层 */
  z-index: 50; /* 确保光栅显示在内容上方 */
}

.vertical-line {
  position: absolute;
  top: 0;
  opacity: 0.7; /* 半透明效果 */
}
</style>
