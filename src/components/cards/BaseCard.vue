<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    list_classes: { type: String, default: ''}
  });
</script>

<template>
  <div :class="'group/card relative transition-all' + props.list_classes">
    <div class="flex flex-col justify-between space-y-3 rounded-xl p-5 z-0 transition motion-reduce:transition-none group-hover/card:bg-slate-800/50">
      <slot></slot>
    </div>
  </div>
</template>