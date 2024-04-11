<template>
    <a-menu v-model:open-keys="openKeys" v-model:selected-keys="selectedKeys" class="app-menu" :mode="props.mode">
        <template v-for="item in props.routeList" :key="item.path">
            <menu-item :route="item" />
        </template>
    </a-menu>
</template>
<script lang="ts" setup name="Menu">
import MenuItem from "./menu-item.vue";
import { getRouteParent } from "@/packages/vue-router";
import { RouteConfig } from "types";

const props = withDefaults(
    defineProps<{
        routeList: RouteConfig[];
        mode?: "vertical" | "horizontal";
    }>(),
    {
        mode: "vertical"
    }
);

const route = useRoute();

const openKeys = ref<string[]>([]);
const selectedKeys = ref<string[]>([]);

watch(
    () => route.path,
    () => {
        const matched = getRouteParent();
        openKeys.value = matched.map((item) => item.path);
        selectedKeys.value = matched.map((item) => item.path);
    },
    {
        immediate: true
    }
);
</script>
<style lang="scss" scoped>
.app-menu {
    user-select: none;
}
</style>
