<script setup lang="ts">
import BaseCard from '../BaseCard.vue';
import ProgressBar from '@/components/animations/ProgressBar.vue';
</script>

<template>
  <BaseCard list_classes="lg:hover:!opacity-100 lg:group-hover/list:opacity-50 group">
    <div class="flex flex-col space-y-6">
      <h4 class="flex flex-col group text-3xl font-extrabold tracking-tight text-white group-hover:text-sky-500 transition">
        <span class="hidden lg:flex">Hard Skills</span>
        <span class="mt-2 block h-0.5 max-w-0 group-hover:max-w-full bg-sky-500 transition-all duration-500"></span>
      </h4>

      <ul class="flex flex-col space-y-6">
        <li class="w-full">
          <div class="flex items-start text-xl space-x-4">
            <div class="flex items-center font-bold text-2xl space-x-2 min-w-[120px]">
              <i class="devicon-ruby-plain" aria-hidden="true"></i>
              <span>Ruby</span>
            </div>
            <p class="text-lg text-gray-300 leading-relaxed">
              Tenho experiência sólida em <strong>Ruby on Rails</strong>, desenvolvendo aplicações completas que envolvem
              desde o back-end até integrações com APIs. É a linguagem na qual mais invisto meu tempo de estudo e 
              aprimoramento, buscando sempre aplicar boas práticas e padrões de projeto.
            </p>
          </div>
          <hr class="mt-4 border border-sky-800/40 rounded-full" />
        </li>

        <li class="w-full">
          <div class="flex items-start text-xl space-x-4">
            <div class="flex items-center font-bold text-2xl space-x-2 min-w-[120px]">
              <i class="devicon-python-plain" aria-hidden="true"></i>
              <span>Python</span>
            </div>
            <p class="text-lg text-gray-300 leading-relaxed">
              Participei de cursos e projetos acadêmicos utilizando <strong>Python</strong>, aplicando a linguagem tanto
              em <em>exercícios de lógica e programação competitiva</em> quanto em projetos práticos. Essa experiência
              ampliou minha capacidade de resolver problemas de forma eficiente.
            </p>
          </div>
          <hr class="mt-4 border border-sky-800/40 rounded-full" />
        </li>

        <li class="w-full">
          <div class="flex items-start text-xl space-x-4">
            <div class="flex items-center font-bold text-2xl space-x-2 min-w-[120px]">
              <i class="devicon-vuejs-plain" aria-hidden="true"></i>
              <span>VueJS</span>
            </div>
            <p class="text-lg text-gray-300 leading-relaxed">
              <strong>Vue.js</strong> é o framework que utilizo como principal ferramenta para o 
              <em>desenvolvimento front-end</em> dos meus projetos. Tenho experiência em criar interfaces modernas, 
              responsivas e com foco na experiência do usuário.
            </p>
          </div>
        </li>
      </ul>

      <div class="flex flex-col md:flex-row items-start md:items-center text-base gap-3 mt-6">
        <span class="md:text-xl font-semibold text-sky-400">Outras Stacks e Ferramentas:</span>
        <ul
          class="flex flex-wrap text-2xl gap-3 text-gray-400 group-hover:text-sky-500 transition"
        >
          <li><i class="devicon-c-plain" aria-label="C Language"></i></li>
          <li><i class="devicon-rails-plain" aria-label="Rails"></i></li>
          <li><i class="devicon-csharp-plain" aria-label="C Sharp"></i></li>
          <li><i class="devicon-javascript-plain" aria-label="JavaScript"></i></li>
          <li><i class="devicon-vscode-plain" aria-label="Visual Studio Code"></i></li>
          <li><i class="devicon-tailwindcss-plain" aria-label="TailwindCSS"></i></li>
          <li><i class="devicon-bootstrap-plain" aria-label="Bootstrap"></i></li>
          <li><i class="devicon-git-plain" aria-label="Git"></i></li>
          <li><i class="devicon-github-plain" aria-label="Github"></i></li>
          <li><i class="devicon-postman-plain" aria-label="Postman"></i></li>
          <li><i class="devicon-linux-plain" aria-label="Linux"></i></li>
        </ul>
      </div>
    </div>
  </BaseCard>
</template>
