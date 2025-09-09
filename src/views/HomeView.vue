<script setup lang="ts">
  import Hero from '@/components/Hero.vue';
  import { downloadResume } from '@/service/resume';
</script>

<template>
  <div class="top-0 w-full flex flex-col justify-center p-10 items-center">

    <Hero />

    <nav class="mt-6">
      <ul class="transition-all lg:flex flex-row space-x-6">
        <li class="group">
          <RouterLink to="#about">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span>Sobre mim</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
        <li class="group">
          <RouterLink to="#projects">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span>Meus projetos</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
        <li class="group">
          <RouterLink to="#skills">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span>Habilidades</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
        <li class="group">
          <RouterLink to="#experience">
            <div class="space-x-2 py-1 px-3 rounded-x1 w-full hover:text-sky-500 hover:font-bold">
              <span class="font-bold text-sky-500">></span>
              <span>Experiência</span>
              <span class="mt-1 block transition-all duration-300 h-0.5 max-w-0 group-hover:max-w-full bg-sky-500"></span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <section class="flex justify-center space-x-10 mt-40 rounded-xl md:p-6">
      <ul class="flex items-center space-x-4 test-2xl md:text-3xl text-zinc-400" aria-label="Social Media">
        <li>
          <a href="https://github.com/CaikLacerda" target="_blank" rel="noopener noreferrer" class="hover:text-sky-500">
            <i class="devicon-github-original" aria-label="Link para o meu GitHub"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/caik-lacerda-b15614262" target="_blank" rel="noopener noreferrer" class="hover:text-sky-500">
            <i class="devicon-linkedin-plain" aria-label="Link para o meu Linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:caiklacerda9@gmail.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 md:w-9" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425z"/></svg>
          </a>
        </li>
      </ul>
      <button @click="downloadResume()" class="cursor-pointer text-sm md:text-base transition px-5 border-1 rounded-md bg-sky-500 border-sky-500 text-white lg:bg-slate-950 lg:border-sky-500 lg:text-sky-500 lg:hover:text-white lg:hover:font-bold lg:hover:border-sky-500 lg:hover:bg-sky-500">
        Download Currículo
      </button>
    </section>
    
  </div>
</template>