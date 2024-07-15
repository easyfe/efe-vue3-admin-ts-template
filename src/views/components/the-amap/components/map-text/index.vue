<template>
    <div style="display: none">
        <div ref="mapTextContainer"></div>
    </div>
</template>
<script lang="ts" setup>
import { cloneDeep } from "lodash-es";

// type LabelStyle = {
//     [k in keyof CSSStyleDeclaration]?: any;
// };
const props = withDefaults(
    defineProps<{
        options: AMap.TextOptions;
    }>(),
    {
        options: () => {
            return {
                content: ""
            };
        }
    }
);
const emits = defineEmits<{
    (e: "dbclick"): void;
    (e: "click"): void;
    (e: "mouseover"): void;
    (e: "mouseout"): void;
}>();

const map = inject<any>("map");

const mapTextContainer = ref<HTMLElement>();

watchEffect(() => {
    if (!map.value) return;
    let options = cloneDeep(props.options);
    const text = new AMap.Text(options);
    text.setMap(map.value);
    text.on("dblclick", () => {
        emits("dbclick");
    });
    text.on("click", () => {
        emits("click");
    });
    text.on("mouseover", () => {
        emits("mouseover");
    });
    text.on("mouseout", () => {
        emits("mouseout");
    });
});
</script>
<style lang="scss" scoped></style>
