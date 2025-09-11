<script setup lang="ts">
  import { defineProps } from 'vue';
  import BaseRedirectCard from '../BaseRedirectCard.vue';

  const props = defineProps({
    title: {type: String, default: 'Nome do projeto'},
    description: {type: String, default: "Descricao do projeto"},
    language: {type: String, default: ''},
    link: {type: String, default: '#'},
    tags: {type: Array as () => string[], default: []}
  })
</script>

<template>
  <BaseRedirectCard :link="props.link" list_classes="lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div class="flex flex-col space-y-3 py-2 px-1">
      <div class="flex items-center justify-between space-y-2">
        <h4 class="text-xl font-bold group-hover/link:text-sky-500">{{ props.title }}</h4>
        <div class="flex space-x-2">
          <span v-if="props.language != null" class="link-tags"> {{ props.language }}</span>
        </div>
      </div>
      <hr class="mb-3">
      <p class="text-justify text-sm md:text-base">{{ props.description }}</p>
      <div v-if="props.tags.length != 0" class="flex flex-wrap space-x2 space-y-2 mt-3">
        <div v-for="tag in props.tags" :key="tag">
          <span class="link-tags">{{ tag }}</span>
        </div>
      </div>
    </div>
  </BaseRedirectCard>
</template>