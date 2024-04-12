<template>
    <LayoutMix v-if="layoutMode === 'mix'"></LayoutMix>
    <LayoutTop v-else-if="layoutMode === 'top'"></LayoutTop>
    <LayoutLeft v-else></LayoutLeft>
</template>
<script lang="ts" setup name="Layout">
import LayoutMix from "./components/layout-mix/index.vue";
import LayoutLeft from "./components/layout-left/index.vue";
import LayoutTop from "./components/layout-top/index.vue";
import global from "@/config/pinia/global";

const layoutMode = computed(() => {
    return global().app.layout;
});
</script>
<style lang="scss" scoped></style>
