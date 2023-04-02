<template>
    <div class="titles">
        <img src="@/assets/logo.png" class="title-icon" />
        <span>{{ getProjectTitle }}</span>
    </div>
</template>
<script>
export default {
    name: "component-head",
    computed: {
        getProjectTitle() {
            return this.$route.meta.title || "A Vue2 Music Player";
        },
    },
};
</script>
<style lang="less" scoped>
.titles {
    text-align: center;
    font-size: 18px;
    padding: 12px 0;
    color: #ffcd32;
    display: flex;
    align-items: center;
    justify-content: center;
}
.title-icon {
    width: 18px;
    height: 18px;
    transform: rotate(180deg);
    margin-right: 8px;
}
</style>
