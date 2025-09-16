<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Typed from 'typed.js';

const typedTarget = ref();

onMounted(() => {
  if (!typedTarget.value) return;

  new Typed(typedTarget.value, {
    strings: [
      'Olá, eu me chamo <span class="text-sky-500">Caik Lacerda</span><br> e sou Desenvolvedor Full-Stack com Ruby on Rails e Vue.js.'
    ],
    typeSpeed: 50,
    startDelay: 300,
    loop: false,
    showCursor: true,
    cursorChar: '|'
  });
});
</script>

<template>
  <span ref="typedTarget" class="text-4xl font-semibold"></span>
</template>
