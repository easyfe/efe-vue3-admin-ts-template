import { defineStore } from "pinia";

export default defineStore({
    id: "global",
    state: () => ({
        //项目配置
        app: {
            layout: <"left" | "top" | "mix">"left"
        },
        //是否收起菜单
        collapsed: false,
        initSuccess: false
    }),
    actions: {}
});
