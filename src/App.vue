<template>
  <button @click="handleBtnAddClick">ADD</button>
  <p>{{ `Parent: ${cp}` }}</p>
  <Child />
</template>

<script setup>
import Child from './components/Child.vue';
import { ref } from 'vue';
  
let cp = ref(0);

const handleBtnAddClick = () => {
  cp.value += 1;
}
</script>