<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';
import { defineProps } from 'vue';

const props = defineProps({
    percent: { type: Number, default: 100 },
    delay: { type: Number, defalult: 300 }
});


const progressTarget = ref();
useMotion(progressTarget, {
    initial: { width: '0%' },
    visibleOnce: {
        width: props.percent + '%',
        transition: {
            delay: props.delay,
        },
    }
});

</script>

<template>
    <div class="flex rounded-full w-full h-6 md:h-7 space-x-2 bg-zinc-700">
        <div ref="progressTarget" class="flex items-center justify-end px-3 rounded-full h-6 md:h-7 bg-sky-600">
            <span class="text-sm md:text-lg font-bold">{{ props.percent }}%</span>
        </div>
    </div>
</template>