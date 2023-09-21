import envHelper from "@/utils/helper/env";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import piniaRoutes from "@/config/pinia/routes";
import { RouteConfig } from "types";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import typeHelper from "@/utils/helper/type";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
    history: createWebHistory(),
    routes
});

let timer = 0;
let start = 0;

/**
 * 递归设置路由
 */
const initRoute = (): void => {
    const setRoutes = (tmpRoutes: RouteConfig[]) => {
        let cloneData: RouteConfig[] = [];
        tmpRoutes.sort((a, b) => (b.meta?.sort || 1) - (a.meta?.sort || 1));
        // tmpRoutes = tmpRoutes.filter((item) => !item.meta?.hidden);
        cloneData = [...tmpRoutes];
        for (const key in tmpRoutes) {
            if (tmpRoutes[key].children?.length) {
                cloneData[key].children = setRoutes(tmpRoutes[key].children || []);
            }
        }
        return cloneData;
    };
    const res = setRoutes(routes as RouteConfig[]);
    piniaRoutes().SET_ROUTES(res);
};

/**
 * 获取默认路由
 * @returns
 */
const getDefaultRoute = (): RouteConfig | undefined => {
    const fn = (list: RouteConfig[]) => {
        let result: RouteConfig | undefined;
        for (const item of list) {
            if (item.meta?.navTag || (!item.meta?.hidden && typeHelper.isFunction(item.component))) {
                result = item;
                break;
            }
            if (item.children) {
                result = fn(item.children);
                if (result) {
                    break;
                }
            }
        }
        return result;
    };
    return fn(piniaRoutes().routes);
};

//路由前置守卫
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    if (!piniaRoutes().routes.length) {
        initRoute();
    }
    // console.log("路由前置守卫：", to, from);
    document.title = <string>to.meta?.title || "";
    start = new Date().getTime();
    /** 资源没有加载完成的时候，给loading，为防止资源已加载完毕，加上延迟避免闪屏 */
    timer = window.setTimeout(() => {
        if (envHelper.dev()) {
            console.warn(`执行路由定时器：${timer}`);
        }
        if (timer && envHelper.dev()) {
            document.getElementById("index-loading")?.setAttribute("style", "display:auto");
        }
    }, 500);
    //正常跳转
    next();
});

router.afterEach((to) => {
    if (envHelper.dev()) {
        console.warn(`路由耗时：${new Date().getTime() - start}，定时器：${timer}`);
    }
    if (timer) {
        if (envHelper.dev()) {
            console.warn(`清除路由定时器：${timer}`);
        }
        clearTimeout(timer);
        timer = 0;
    }
    document.getElementById("index-loading")?.setAttribute("style", "display:none");
    if (!to.meta.hidden || to.meta.navTag) {
        piniaRoutes().CREATE_NAVTAG(to);
    }
    NProgress.done();
});

export default router;
export { getDefaultRoute, initRoute };
