<script setup lang="ts">
  import BaseRedirectCard from '../BaseRedirectCard.vue';
  import { defineProps} from 'vue';

  const props = defineProps({
    title: {type: String, default: 'Titulo do projeto'},
    description: {type: Array as () => string[], default: ['Descrição do projeto']},
    year: {type: Number, default: 2025},
    link: {type: String, default: '#'},
    preview_link: {type: String, default: '#'},
    tags: {type: Array as () => string[], default: []}
  })
</script>

<template>
  <BaseRedirectCard id="projects" :link="props.link" list_classes="lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div class="flex flex-col justify-between md:px-10">
      <div class="mb-3">
        <img aria-label="Imagem de Apresentacao do Projeto {{ props.title }}" :src="props.preview_link" alt="Imagem de Apresentacao do projeto {{ props.title }}" class="w-100 wd:w(500px) rounded-xl border-5 border-slate-800 group-hover/link:border-slate-700">
      </div>
      <div class="flex flex-col">
        <h4 class="flex justify-between text-2xl font-bold tracking-tight lg:group-hover/link:text-sky-500">
          <span class="flex flex-wrap">{{ props.title }}</span>
          <span class="text-right text-sky-500">{{ props.year }}</span>
        </h4>
        <span class="mt-1 block transition-all duration-300 h-0.5 lg:max-w-0 group-hover/link:max-w-[100%] bg-sky-500"></span>
        <div class="mt-2 space-y-1">
          <p v-for="(paragraph) in props.description" :key="paragraph" class="text-sm text-justify">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div v-if="props.tags.length != 0" class="mt-5">
        <ul class="flex flex-wrap space-y-3 space-x-2">
          <li v-for="(item) in props.tags" :key="item">
            <span class="link-tags">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </BaseRedirectCard>
</template>