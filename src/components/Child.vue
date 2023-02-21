<template>
  <p>{{ `Child: ${props.cp}` }}</p>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ cp: number }>(), {cp: 1});

// Reactive props destructure
// const { cp = 1 } = defineProps<{ cp: number }>();
</script>
