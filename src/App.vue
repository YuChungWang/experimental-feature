<template>
  <button @click="handleBtnAddClick">ADD</button>
  <p>{{ `Parent: ${cp}` }}</p>
  <Child />
  <CssFeature />
</template>

<script setup>
import Child from './components/Child.vue';
import CssFeature from './components/CssFeature.vue';
import { ref } from 'vue';
  
let cp = ref(0);

const handleBtnAddClick = () => {
  cp.value += 1;
}
</script>

<style lang="scss">
p {
  margin: 0;
  padding: 0px 12px;
}

button {
  outline: none;
  border: none;

  &:focus {
    outline: none;
  }
}
</style>
