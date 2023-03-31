<template>
    <div class="tab-box">
        <div v-for="item of arrList" :key="item.val">
            {{ item.val }}
        </div>
    </div>
</template>
<script>
export default {
    name: "component-tab",
    data() {
        return {
            arrList: [
                { key: "recommend", val: "推荐" },
                { key: "singer", val: "歌手" },
                { key: "ranking", val: "排行" },
                { key: "search", val: "搜索" },
            ],
        };
    },
    created() {},
};
</script>
<style lang="less">
.tab-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 14px 0;
    color: rgba(255, 255, 255, 0.5);
}
</style>
