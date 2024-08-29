/* eslint-disable */
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module "*.json" {
    const value: any;
    export default value;
}

declare module "vue-plyr";
declare module "@skjnldsv/vue-plyr";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

//版本号
declare var __APP_VERSION__: string;
//是否允许上传
declare var __APP_UPLOAD__: boolean;
//静态资源上传地址
declare var __APP_UPLOAD_PATH__: string;
