<script setup lang="ts">
import TypeWritter from '@/components/animations/TypeWritter.vue';
import SocialMedia from './SocialMedia.vue';
</script>

<template>
  <header class="w-full flex items-center justify-center p-18">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">
      
      <!-- Coluna do texto -->
      <div class="text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl tracking-tight font-bold group hover:text-sky-500 mb-5">
          <RouterLink to="/">
            <h2 class="text-2xl lg:text-3xl">
              <TypeWritter :type-speed="80" :start-delay="200" :loop="true" />
            </h2>
          </RouterLink>
        </h1>
      </div>

      <!-- Coluna da imagem + SocialMedia -->
      <div class="flex flex-col items-center lg:items-center mt-15">
        <img
          src="../assets/images/picture.JPG"
          alt="Minha foto"
          class="w-60 h-60 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-lg ring-2 ring-blue-500"
        />

        <SocialMedia />
      </div>
    </div>
  </header>
</template>
