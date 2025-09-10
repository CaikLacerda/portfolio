<script setup lang="ts">

</script>

<template>
  <nav class="mt-2 sticky top-0 z-50">
      <ul class="transition-all lg:flex flex-row space-x-6">
        <li class="group">
          <RouterLink to="#about">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span class="text-lg">Sobre mim</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
        <li class="group">
          <RouterLink to="#projects">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span class="text-lg">Meus projetos</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
        <li class="group">
          <RouterLink to="#skills">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span class="text-lg">Habilidades</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
        <li class="group">
          <RouterLink to="#experience">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span class="text-lg">Experiência</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </nav>
</template>