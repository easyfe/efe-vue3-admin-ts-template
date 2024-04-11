<template>
    <div class="app-layout">
        <a-layout-sider v-model:collapsed="collapsed" collapsible style="z-index: 200" @collapse="onCollapse">
            <app-logo></app-logo>
            <app-left></app-left>
        </a-layout-sider>
        <div class="layout-right">
            <div class="layout-header">
                <div class="app-header">
                    <app-bread></app-bread>
                    <app-header-right></app-header-right>
                </div>
                <app-tags></app-tags>
            </div>
            <div class="layout-content">
                <app-main></app-main>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Layout">
import AppLogo from "../app-logo/index.vue";
import AppLeft from "../app-left-menu/index.vue";
import AppMain from "../app-main/index.vue";
import AppBread from "../app-bread/index.vue";
import AppHeaderRight from "../app-header-right/index.vue";
import global from "@/config/pinia/global";
const collapsed = ref(global().collapsed);

function onCollapse(e: boolean) {
    global().collapsed = e;
}
</script>
<style lang="scss" scoped>
.app-layout {
    display: flex;
    height: 100%;
    :deep(.arco-layout-sider-children) {
        @include scroll-y();
    }
    .layout-right {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: calc(100vw - 200px);
        .layout-header {
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 100;
            .app-header {
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                background-color: var(--color-bg-2);
                position: relative;
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: var(--color-border-1);
                }
            }
            .app-tags {
                height: 34px;
            }
        }
        .layout-content {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            @include scroll-y(6);
            background-color: rgb(var(--gray-2));
        }
    }
}
</style>
