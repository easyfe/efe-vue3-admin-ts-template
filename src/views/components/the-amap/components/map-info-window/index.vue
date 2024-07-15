<template>
    <div style="display: none">
        <div ref="mapInfoWindowContainer">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        options: AMap.InfoOptions;
        show: boolean;
    }>(),
    {
        show: false,
        options: () => {
            return {
                content: ""
            };
        }
    }
);

const slots = useSlots();

const emits = defineEmits<{
    (e: "infoShow"): void;
    (e: "infoClose"): void;
}>();

const map = inject<any>("map");
const mapInfoWindowContainer = ref<HTMLElement>();

// 单例 InfoWindow 实例
let infoWindow: AMap.InfoWindow | null = null;

let observer: null | MutationObserver = null;

let slotContent = ref("");

function openInfoWindow() {
    if (!map.value) return;
    const options = props.options;
    if (!infoWindow) {
        infoWindow = new AMap.InfoWindow({ ...options, content: slotContent.value });
    } else {
        infoWindow.setContent(slotContent.value);
        infoWindow.setPosition(options.position || map.value.getCenter());
    }
    infoWindow.open(map.value, options.position || map.value.getCenter());
    emits("infoShow");
}

function closeInfoWindow() {
    infoWindow?.close();
    emits("infoClose");
}

watchEffect(() => {
    if (props.show && slotContent.value) {
        openInfoWindow();
    } else {
        closeInfoWindow();
    }
});

const updateSlotContent = () => {
    if (mapInfoWindowContainer.value) {
        slotContent.value = mapInfoWindowContainer.value.innerHTML;
        // 在这里可以使用 slotContent.value 来渲染其他窗体
        // console.log("Slot content updated:", slotContent.value);
    }
};

onMounted(() => {
    if (mapInfoWindowContainer.value) {
        observer = new MutationObserver(updateSlotContent);
        observer.observe(mapInfoWindowContainer.value, {
            childList: true,
            subtree: true,
            characterData: true
        });
        // 初始化时也更新一次内容
        updateSlotContent();
    }
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style lang="scss" scoped></style>
