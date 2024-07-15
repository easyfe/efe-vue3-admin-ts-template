<template>
    <div style="display: none">
        <div ref="mapMarkerContainer">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { cloneDeep, isEqual } from "lodash-es";

const props = withDefaults(
    defineProps<{
        options: AMap.MarkerOptions;
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

const slots = useSlots();

const map = inject<Ref<AMap.Map>>("map");

let marker: AMap.Marker;

const mapMarkerContainer = ref<HTMLElement>();

let privateOptions: AMap.MarkerOptions;

watchEffect(() => {
    if (!map || !map.value) return;
    if (isEqual(privateOptions, props.options)) return;
    if (marker) {
        map.value.remove(marker);
        map.value.setCenter(props.options.position || [0, 0]);
    }
    privateOptions = cloneDeep(props.options);
    if (slots?.default) {
        if (!privateOptions.label) {
            privateOptions.label = { content: "", direction: "right", offset: [5, -15] };
        }
        privateOptions.label.content = mapMarkerContainer.value?.innerHTML || "";
    }
    marker = new AMap.Marker(privateOptions);
    map.value.add(marker);
    marker.on("dblclick", () => {
        emits("dbclick");
    });
    marker.on("click", () => {
        emits("click");
    });
    marker.on("mouseover", () => {
        emits("mouseover");
    });
    marker.on("mouseout", () => {
        emits("mouseout");
    });
});
</script>
<style lang="scss" scoped></style>
