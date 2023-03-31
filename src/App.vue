<template>
    <div id="app">
        <my-head />
        <router-view />
    </div>
</template>
<script>
import MyHead from "@/components/head/index.vue";
export default {
    name: "index",
    components: {
        MyHead,
    },
};
</script>
<style lang="less">
body {
    padding: 0;
    margin: 0;
}
</style>
