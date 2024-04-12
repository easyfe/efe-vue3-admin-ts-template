<template>
    <Menu :route-list="routeList" mode="horizontal"></Menu>
</template>
<script lang="ts" setup name="AppHeaderMenu">
import { cloneDeep } from "lodash-es";
import Menu from "../menu/index.vue";
import routes from "@/config/pinia/routes";
import global from "@/config/pinia/global";
const layoutMode = computed(() => {
    return global().app.layout;
});

const routeList = computed(() => {
    if (layoutMode.value === "mix") {
        const tempList = cloneDeep(routes().routes);
        const list = tempList.map((item) => {
            if (item.children?.length) {
                delete item.children;
            }
            return item;
        });
        return list;
    } else if (layoutMode.value === "top") {
        return routes().routes;
    } else {
        return [];
    }
});
</script>
<style lang="scss" scoped></style>
