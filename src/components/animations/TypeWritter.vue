<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import { ref } from 'vue';
import Typed from 'typed.js';

const props = defineProps({
    classes: { type: String, default: "text-medium font-semibold" },
    msgs: { type: Array as () => string[], default: ['Desenvolvedor Full-Stack', 'Ruby on Rails/Vue.js']},
    typeSpeed: { type: Number, default: 300 },
    startDelay: { type: Number, default: 0 },
    loop: { type: Boolean, default:false }
});

const classes = ref(props.classes);
const typedTarget = ref();

onMounted(() => {
    if (!typedTarget.value) return;

    let typedInstance = new Typed(typedTarget.value, {
        strings: props.msgs,
        typeSpeed: props.typeSpeed,
        startDelay: props.startDelay,
        loop: props.loop,
    });
});
</script>

<template>
    <span ref="typedTarget" :class="classes"></span>
</template>