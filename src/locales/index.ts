import { createI18n } from "vue-i18n";

import en from "./en-US.json";
import cn from "./zh-CN.json";

export const LOCALE_OPTIONS = [
    { label: "中文", value: "zh-CN" },
    { label: "English", value: "en-US" }
];
const defaultLocale = localStorage.getItem("arco-locale") || (navigator.language === "zh-CN" ? "zh-CN" : "en-US");

const i18n = createI18n<false>({
    locale: defaultLocale,
    fallbackLocale: "en-US",
    legacy: false,
    allowComposition: true,
    messages: {
        "en-US": en,
        "zh-CN": cn
    }
});

export default i18n;
