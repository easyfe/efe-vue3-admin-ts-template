<template>
    <template v-if="layoutMode === 'mix'">
        <a-layout-sider v-if="routeList.length > 0">
            <Menu :route-list="routeList"></Menu>
        </a-layout-sider>
    </template>
    <template v-else>
        <Menu :route-list="routeList"></Menu>
    </template>
</template>
<script lang="ts" setup>
import { getRouteParent } from "@/packages/vue-router";
import Menu from "../menu/index.vue";
import global from "@/config/pinia/global";
import routes from "@/config/pinia/routes";
const layoutMode = computed(() => {
    return global().app.layout;
});

const routeList = computed(() => {
    if (layoutMode.value === "left") {
        return routes().routes;
    } else if (layoutMode.value === "mix") {
        const matched = getRouteParent();
        const matchedChildren = matched[0]?.children || [];
        if (matchedChildren[0]?.meta?.hidden) {
            return [];
        }
        return matched[0]?.children || [];
    } else {
        return [];
    }
});
</script>
<style lang="scss" scoped></style>
