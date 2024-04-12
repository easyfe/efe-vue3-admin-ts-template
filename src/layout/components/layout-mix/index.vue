<template>
    <div class="app-layout">
        <div class="layout-header">
            <app-logo></app-logo>
            <div class="app-top">
                <div class="horizontal-header">
                    <div class="app-header-menu-wrap">
                        <app-header-menu></app-header-menu>
                    </div>
                    <app-header-right></app-header-right>
                </div>
                <!-- <app-tags></app-tags> -->
            </div>
        </div>
        <div class="app-layout-body">
            <app-left></app-left>
            <div class="layout-content">
                <app-bread style="margin-left: 20px; margin-top: 20px"></app-bread>
                <app-main></app-main>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="LayoutMix">
import AppLogo from "../app-logo/index.vue";
import AppLeft from "../app-left-menu/index.vue";
import AppHeaderMenu from "../app-header-menu/index.vue";
import AppHeaderRight from "../app-header-right/index.vue";
import AppMain from "../app-main/index.vue";
import AppBread from "../app-bread/index.vue";
import AppTags from "../app-tags/index.vue";
</script>
<style lang="scss" scoped>
.app-layout {
    height: 100%;
    :deep(.arco-layout-sider-children) {
        @include scroll-y();
    }
    .layout-header {
        display: flex;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 100;
        .app-header {
            height: 60px;
        }
        .app-tags {
            height: 34px;
        }
        .app-top {
            display: flex;
            flex: 1;
            flex-direction: column;
        }
        .horizontal-header {
            flex: 1;
            display: flex;
            justify-content: space-between;
            .app-header-menu-wrap {
                flex: 1;
                .app-menu {
                    height: 100%;
                }
            }
        }
    }
    .app-layout-body {
        display: flex;
        height: calc(100vh - 60px);
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
