<template>
    <div class="row">
        <div class="rowcontainer" id="rowone">
            <a href="http://localhost:5174/" id="about-us" class="block">关于我们</a>
            <a href="#recruitment" id="recruitment" class="block">招贤纳士</a>
            <a href="#business-cooperation" id="business-cooperation" class="block">商务合作</a>
            <a href="#press-inquiry" id="press-inquiry" class="block">寻求报道</a>
            <span class="block">400-660-0108</span>
            <a href="mailto:kefu@csdn.net" id="customer-email" class="block">kefu@csdn.net</a>
            <a href="#online-service" id="online-service" class="block">在线客服（工作时间 8:30-22:00）</a>
        </div>
        <div class="rowcontainer" id ="rowtwo">
            <a href="#police-filing" id="police-filing" class="block">公安备案号11010502030143</a>
            <a href="#icp-filing" id="icp-filing" class="block">京ICP备19004658号</a>
            <a href="#online-culture-filing" id="online-culture-filing" class="block">京网文〔2020〕1039-165号</a>
            <a href="#business-website-filing" id="business-website-filing" class="block">经营性网站备案信息</a>
            <a href="#beijing-illegal-info-report" id="beijing-illegal-info-report" class="block">北京互联网违法和不良信息举报中心</a>
            <a href="#parental-supervision" id="parental-supervision" class="block">家长监护</a>
            <a href="#online-110-report" id="online-110-report" class="block">网络110报警服务</a>
            <a href="#china-internet-report" id="china-internet-report" class="block">中国互联网举报中心</a>
        </div>
        <div class="rowcontainer" id="rowthree">
            <a href="#chrome-store-download" id="chrome-store-download" class="block">Chrome商店下载</a>
            <a href="#account-management-rules" id="account-management-rules" class="block">账号管理规范</a>
            <a href="#copyright-disclaimer" id="copyright-disclaimer" class="block">版权与免责声明</a>
            <a href="#copyright-appeal" id="copyright-appeal" class="block">版权申诉</a>
            <a href="#publication-license" id="publication-license" class="block">出版物许可证</a>
            <a href="#business-license" id="business-license" class="block">营业执照</a>
            <span class="block">©1999-2025北京创新乐知网络技术有限公司</span>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>

.row {
    @apply text-gray-500 text-xs space-y-1 w-full  bg-[#3b3b3b] py-2;
}
.rowcontainer {
    @apply flex flex-row  justify-center pt-[2px];
}

.block {
    @apply ml-2 text-white;
}
#rowone {
    @apply text-[16px];
}
#rowtwo {
    @apply text-[10px];
}
#rowthree {
    @apply text-[12px];
}

</style>