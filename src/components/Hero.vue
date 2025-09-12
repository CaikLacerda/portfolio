<script setup lang="ts">
  import TypeWritter from '@/components/animations/TypeWritter.vue';
</script>

<template>
  <header class="lg:top-0 w-full flex flex-col justify-center p-10 items-center">
    <div class="text-center">
      <h1 class="text-4xl lg:text-5xl lg:mt-15 tracking-tight font-bold group hover:text-sky-500 mb-5">
        <RouterLink to="/">
          <div class="flex justify-center mb-10 shadow-blue-900/50 hover:scale-105 transition-transform">
            <img
              src="../assets/images/picture.JPG"
              alt="Minha foto"
              class="w-60 h-60 rounded-2xl object-cover shadow-lg ring-2 ring-blue-500"
            />
          </div>

                <!-- <div
        class="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-900/50 hover:scale-105 transition-transform"
      >
        <img
          src="@/assets/profile.jpg"
          alt="Foto de Caik Lacerda"
          class="w-full h-full object-cover"
        />
      </div> -->

          Caik Lacerda
          <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
        </RouterLink>
      </h1>

      <h2 class="text-2xl">
        <TypeWritter :type-speed="80" :start-delay="200" :loop="true" />
      </h2>
    </div>

    <slot></slot>
  </header>
</template>