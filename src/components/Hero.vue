<script setup lang="ts">
  import TypeWritter from '@/components/animations/TypeWritter.vue';
</script>

<template>
  <header class="lg:top-0 w-full flex flex-col justify-center p-10 items-center">
    <div class="text-center">
      <h1 class="text-4xl lg:text-5xl lg:mt-15 tracking-tight font-bold group hover:text-sky-500 mb-5">
        <RouterLink to="/">
          <div class="flex justify-center mb-10">
            <img
              src="../assets/images/picture.JPG"
              alt="Minha foto"
              class="w-40 h-40 rounded-full object-cover shadow-lg ring-2 ring-sky-500"
            />
          </div>
          Caik Lacerda
          <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
        </RouterLink>
      </h1>

      <h2>
        <TypeWritter :type-speed="80" :start-delay="200" :loop="true" />
      </h2>

      <p class="mt-2">Apaixonado por tecnologia e inovação</p>
    </div>

    <slot></slot>
  </header>
</template>