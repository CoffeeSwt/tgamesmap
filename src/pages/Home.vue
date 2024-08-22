<script setup lang="ts">
import { BasicEngine } from '@scripts/index';
import { onMounted, ref } from 'vue';
const engine = new BasicEngine()
const renderTarget = ref(null)
onMounted(() => {
    engine.mountDom(renderTarget.value!)
    engine.render()
})
</script>

<template>
    <div ref="renderTarget" w-full h-screen></div>
</template>

<style scoped></style>