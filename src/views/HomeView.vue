<script setup lang="ts">
  import Hero from '@/components/Hero.vue';
  import Navbar from '@/components/Navbar.vue';
  import SocialMedia from '@/components/SocialMedia.vue';
  import About from '@/components/About.vue';
  import Footer from '@/components/Footer.vue';
  import ProjectPreviewCard from '@/components/cards/projects/ProjectPreviewCard.vue';
  import HardSkillsCard from '@/components/cards/skills/HardSkillsCard.vue';
  import JobCard from '@/components/cards/jobs/JobCard.vue';
</script>

<template>
  <div class="top-0 w-full flex flex-col justify-center items-center">

    <Hero />
    <Navbar class="mt-10"/>
    <SocialMedia class="mt-60"/>
    
    <hr id="about" class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <About />

    <hr id="projects" class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <h2 class="section-title text-center text-3xl md:text-4xl font-bold text-sky-400 tracking-wide">
        Projetos
    </h2>
    <div class="w-20 h-1 bg-sky-500 mx-auto mb-4 rounded"></div>

    <ol class="group/list p-10">
      <li class="mb-5">
        <ProjectPreviewCard
          title="Solaria"
          :year="2025"
          :description="[
            'Um projeto com foco em energias renováveis e sustentáveis, criado para auxiliar empresas e pessoas que se interessam em investir na instalação de painéis de energia solar ou hélices de energia eólica, o nosso sistema realiza uma estimativa de valores a ser investidos e o retorno financeiro sobre eles, neste projeto pude me aprofundar em regras de negócios envolvendo energias renováveis e também pude colocar em prática meus conhecimentos técnico com Ruby on Rails, Vue.js e PostgreSQL'
          ]"
          preview_link="/images/solaria.png"
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
          preview_link="/images/portfolio_image.PNG"
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
          preview_link="/images/chat_online.jpg"
          link="https://github.com/CaikLacerda/ChatLanPython"
          :tags="['Bootstrap5', 'Python', 'Flask', 'Broadcast']"
        />
      </li>
    </ol>

    <hr id="skills" class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <h2 class="section-title text-center text-3xl md:text-4xl font-bold text-sky-400 tracking-wide">
        Habilidades
    </h2>
    <div class="w-20 h-1 bg-sky-500 mx-auto mb-4 rounded"></div>

    <HardSkillsCard class="p-10"/>

    <hr id="experience" class="my-10 w-1/2 mx-auto border-0.5 border-sky-200">

    <h2 class="section-title text-center text-3xl md:text-4xl font-bold text-sky-400 tracking-wide">
        Experiência
    </h2>
    <div class="w-20 h-1 bg-sky-500 mx-auto mb-4 rounded"></div>

    <ol class="group/list p-10">
      <li class="mb-5">
        <JobCard 
          enterprise="ESL - Excelência em Sistemas Logísticos"
          job_title="Analista de Suporte"
          link="https://eslsistemas.com.br"
          period="Inicio: outubro/2025 - Atual"
          :description="['Atuando no acompanhamento de tickets e suporte via telefone. Nesse período, desenvolvi habilidades fundamentais para um analista de suporte, como comunicação clara, empatia no atendimento, agilidade na resolução de problemas e organização para gerenciar múltiplas demandas. Além disso, aprimorei minha capacidade de análise, atenção a detalhes e trabalho em equipe, sempre focado em garantir uma experiência positiva ao cliente e a solução eficaz das ocorrências.']"
          :tags="['Ruby', 'PostgreSQL', 'JIRA', 'Comunicação', 'Proatividade']"
        />
      </li>

      <li class="mb-5">
        <JobCard 
          enterprise="Sonoco do Brasil"
          job_title="Estagiário de Inovação"
          link="https://pt-br.sonoco.com/latam"
          period="Inicio: abril/2024 - setembro/2024"
          :description="['Atuei no desenvolvimento de soluções tecnológicas voltadas para a Indústria 4.0, com foco em aplicações para óculos de realidade mista e aumentada, especialmente no dispositivo Microsoft HoloLens. Minhas atividades incluíram a condução de treinamentos operacionais sobre as ferramentas criadas, garantindo melhor uso e aplicação prática no dia a dia. Também fui responsável pela integração e análise de dados, utilizando planilhas de KPIs para monitorar resultados e otimizar processos. Além disso, desempenhei atividades complementares de informática, sempre com o objetivo de aumentar a eficiência e a produtividade operacional.']"
          :tags="['Power BI', 'Microsoft Hololens', 'Treinamentos', 'Proatividade', 'Trabalho em Equipe']"
        />
      </li>
    </ol>
  </div>
  <Footer />
</template>