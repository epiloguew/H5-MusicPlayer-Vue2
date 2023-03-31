<template>
    <div class="titles">
        <img src="@/assets/logo.png" class="title-icon" />
        <span>A Vue2 Music Player</span>
    </div>
</template>
<script>
export default {
    name: "component-head",
};
</script>
<style lang="less">
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
