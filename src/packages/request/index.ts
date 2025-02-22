import { nanoid } from "nanoid";
import WebRequest from "@easyfe/web-request";
import loading from "./loading";

const service = new WebRequest({
    base: {
        timeout: 60 * 1000,
        baseURL: "",
        prefix: "",
        enableCancel: false
    },
    loading,
    interceptors: {
        request: (config): Promise<any> => {
            if (config.method?.toLocaleUpperCase() === "GET") {
                config.params = {
                    ...config.params,
                    _t: nanoid()
                };
            }
            if (config.url?.includes("/version.json")) {
                return Promise.resolve(config);
            }
            return Promise.resolve(config);
        },
        response: (response): Promise<any> => {
            if (response.config.url?.includes("/version.json")) {
                return Promise.resolve(response.data);
            }
            return Promise.resolve(response.data);
        },
        responseError: (errorResponse): Promise<any> => {
            return Promise.reject(errorResponse);
        }
    }
});

const request = service.request;

export function clearRequest(): void {
    service.clearQueue();
}

export default request;
