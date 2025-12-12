<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const mouse = ref<HTMLElement | null>(null);
    
onMounted(() => {
    document.addEventListener("mousemove", (e) => {
        mouse.value!.style.setProperty("--position-x", `${e.clientX}px`);
        mouse.value!.style.setProperty("--position-y", `${e.clientY}px`);
    });
});

onUnmounted(() => {
    document.removeEventListener("mousemove", () => {
        mouse.value!.style.setProperty("--position-x", "50%");
        mouse.value!.style.setProperty("--position-y", "50%");
    });
});

</script>

<template>
    <div id="mouse" ref="mouse"></div>
</template>