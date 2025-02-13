import { defineStore } from "pinia";

export default defineStore({
    id: "global",
    state: () => ({
        //项目配置
        app: {
            layout: <"left" | "top" | "mix">"left"
        },
        // 滚动条位置
        scrollTop: <Record<string, number>>{},
        userInfo: <Record<string, any> | null>null,
        userMenu: <{ path: string }[]>[],
        //是否收起菜单
        collapsed: false,
        initSuccess: false
    }),
    actions: {
        SET_SCROLL(res: { name: string; value: number }): void {
            this.scrollTop[res.name] = res.value;
        }
    }
});
