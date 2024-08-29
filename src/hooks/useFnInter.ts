import { onMounted, onUnmounted } from "vue";

export function useFnInter(
    fn: () => void,
    interval: number,
    options?: {
        immediate?: boolean;
    }
) {
    let intervalId: NodeJS.Timeout | null = null;

    const startTimer = () => {
        if (intervalId === null) {
            if (options?.immediate) fn();
            intervalId = setInterval(() => {
                fn();
            }, interval);
        }
    };

    const stopTimer = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    onMounted(startTimer); // 在组件挂载时开始计时器
    onUnmounted(stopTimer); // 在组件卸载时停止计时器

    return { startTimer, stopTimer };
}
