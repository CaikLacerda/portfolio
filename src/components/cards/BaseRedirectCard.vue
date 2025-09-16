<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    link: {type: String, default: '#'},
    list_classes: { type: String, default: ''}
  });
</script>

<template>
  <a :href="props.link" target="_blank" rel="noopener noreferer">
    <div :class="'group/link relative transition-all ' + props.list_classes">
      <div class="flex flex-col justify-between space-y-3 rounded-xl p-5 z-0 transition motion-reduce:transition-none group-hover/link:bg-slate-800/50">
        <slot></slot>
      </div>
    </div>
  </a>
</template>