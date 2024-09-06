<script setup lang="ts">
import { BasicEngine } from '@tgamesmap/index'
import { Pane } from 'tweakpane';
import { onMounted, ref } from 'vue';
const engine = new BasicEngine()
const renderTarget = ref(null)

const PARAMS = {
    factor: 123,
    title: 'hello',
    color: '#ff0055',
};

const pane = new Pane();

pane.addBinding(PARAMS, 'factor');
pane.addBinding(PARAMS, 'title');
pane.addBinding(PARAMS, 'color');

onMounted(() => {
    const res = engine.mountDom(renderTarget.value!).addTestBox().render()
    console.log(res)
})
</script>

<template>
    <div ref="renderTarget" w-full h-screen></div>
</template>

<style scoped></style>