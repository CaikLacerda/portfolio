<script setup lang="ts">
  import { defineProps} from 'vue';
  import BaseRedirectCard from '../BaseRedirectCard.vue';

  const props = defineProps({
    enterprise: {type: String, default: "Nome da empresa"},
    job_title: {type: String, default: "Cargo"},
    link: {type: String, deafult: "#"},
    period: {type: String, default: 'INICIO - FIM'},
    description: {type: Array as () => string[], default: ['Descricao breve da vaga']},
    tags: {type: Array as () => string[], default: []}
  })
</script>

<template>
  <BaseRedirectCard :link="props.link" list_classes="lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div class="flex flex-col">
      <h4 class="text-xl md:text-2xl font-bold group-hover/link:text-sky-500">
        <span class="flex flex-col mb-1">
          {{ props.enterprise }}
        </span>
      </h4>
      <span class="font-semibold text-sm md:text-lg">{{ props.job_title }}</span>
      <span class="text-sm">{{ props.period }}</span>
    </div>
    <div >
      <div class="space-y-2">
        <p v-for="(paragraph) in props.description" :key="paragraph" class="text-sm text-justify">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <span class="block transition-all h-0.5 duration-300 max-w-0 group-hover/link:max-w-full bg:sky-500"></span>
    <ul v-if="props.tags.length != 0" class="flex flex-wrap gap-2">
      <li v-for="(item) in props.tags" :key="item">
        <span class="link-tags">{{ item }}</span>
      </li>
    </ul>
  </BaseRedirectCard>
</template>