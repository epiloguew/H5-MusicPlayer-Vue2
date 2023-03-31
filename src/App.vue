<template>
    <div id="app">
        <my-head />
        <my-tab />
        <router-view />
    </div>
</template>
<script>
import MyHead from "@/components/head/index.vue";
import MyTab from "@/components/tab/index.vue";
export default {
    name: "index",
    components: {
        MyHead,
        MyTab,
    },
};
</script>
<style lang="less">
body {
    padding: 0;
    margin: 0;
    background: #000;
}
</style>
