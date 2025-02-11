type RetryData = {
    fn: (params?: any) => Promise<any>;
    params?: any;
    limit?: number;
    delay?: number;
    immediate?: boolean; // 新增的参数
};

export default function (data: RetryData): Promise<any> {
    !data.limit && (data.limit = 3);
    !data.delay && (data.delay = 50);
    if (data.immediate === undefined) {
        data.immediate = true;
    }
    return new Promise((resolve, reject) => {
        const attempt = async (): Promise<any> => {
            try {
                const res = await data.fn(data.params);
                resolve(res);
            } catch (e) {
                if (data.limit) {
                    data.limit--;
                }
                if (!data.limit) {
                    reject(e); // 只有在所有尝试都失败后才调用 reject
                } else {
                    setTimeout(() => {
                        attempt();
                    }, data.delay);
                }
            }
        };

        if (data.immediate) {
            attempt(); // 立即执行
        } else {
            setTimeout(() => {
                attempt(); // 延迟执行
            }, data.delay);
        }
    });
}
