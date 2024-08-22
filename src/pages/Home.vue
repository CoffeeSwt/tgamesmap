<script setup lang="ts">
import { BasicEngine } from '@scripts/index';
import { onMounted, ref } from 'vue';
let engine
const renderTarget = ref(null)
onMounted(() => {
    engine = new BasicEngine(renderTarget.value!).render()

})
</script>

<template>
    <div ref="renderTarget" w-full h-screen></div>
</template>

<style scoped></style>