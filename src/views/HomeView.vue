<script setup lang="ts">
  import Hero from '@/components/Hero.vue';
  import Navbar from '@/components/Navbar.vue'
  import SocialMedia from '@/components/SocialMedia.vue'
  import About from '@/components/About.vue'
  import Footer from '@/components/Footer.vue';
  import ProjectPreviewCard from '@/components/cards/projects/ProjectPreviewCard.vue';
  import HardSkillsCard from '@/components/cards/skills/HardSkillsCard.vue';
</script>

<template>
  <div class="top-0 w-full flex flex-col justify-center p-10 items-center">
    <section class="h-screen">
      <Hero />
      <Navbar />
      <SocialMedia />
    </section>
    
    <hr class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <About />

    <hr class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <h2 id="projects" class="section-title text-center text-3xl md:text-4xl font-bold text-sky-400 tracking-wide">
        Projetos
    </h2>
    <div class="w-20 h-1 bg-sky-500 mx-auto mb-4 rounded"></div>

    <ol class="group/list">
      <li class="mb-5">
        <ProjectPreviewCard
          title="Solaria"
          :year="2025"
          :description="[
            'Um projeto com foco em energias renováveis e sustentáveis, criado para auxiliar empresas e pessoas que se interessam em investir na instalação de painéis de energia solar ou hélices de energia eólica, o nosso sistema realiza uma estimativa de valores a ser investidos e o retorno financeiro sobre eles, neste projeto pude me aprofundar em regras de negócios envolvendo energias renováveis e também pude colocar em prática meus conhecimentos técnico com Ruby on Rails, Vue.js e PostgreSQL'
          ]"
          preview_link="#"
          link="https://github.com/calvesEsl/Solaria"
          :tags="['Vue.js', 'Bootstrap5', 'Ruby on Rails', 'PostgreSQL', 'OCR', 'APIs']"
        />
      </li>
      <li class="mb-5">
        <ProjectPreviewCard
          title="Porfolio"
          :year="2025"
          :description="[
            'Meu primeiro porfolio desenvolvido com o intuíto de ter um ambiente onde posso descrever minhas habilidades, meus contatos e mostrar meus projetos para recrutadores e interessados. Neste projeto me aprofundei em tecnologias como TailwindCSS e Vue.js'
          ]"
          preview_link="#"
          link="https://github.com/CaikLacerda/portfolio"
          :tags="['Vue.js', 'TailwindCSS']"
        />
      </li>
      <li class="mb-5">
        <ProjectPreviewCard
          title="Chat em tempo real conectado a rede"
          :year="2024"
          :description="[
            'Nosso grupo desenvolveu uma aplicação de um chat que permite a interação entre usuários que estão conectados na mesma rede, neste projeto colocamos em prática conceitos de redes como Broadcast, Threads entre outros, também ampliamos conhecimento em ferramentas como Python e Flask para criar a aplicação'
          ]"
          preview_link="#"
          link="https://github.com/CaikLacerda/ChatLanPython"
          :tags="['Bootstrap5', 'Python', 'Flask', 'Broadcast']"
        />
      </li>
    </ol>

    <hr class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <h2 id="skills" class="section-title text-center text-3xl md:text-4xl font-bold text-sky-400 tracking-wide">
        Habilidades
    </h2>
    <div class="w-20 h-1 bg-sky-500 mx-auto mb-4 rounded"></div>

    <HardSkillsCard />
    
  </div>
  <Footer />
</template>