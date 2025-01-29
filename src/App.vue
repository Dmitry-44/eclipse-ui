<script setup lang="ts">
import { ref } from 'vue';
import ecInput from './components/input'

const message = ref('')
</script>

<template>
  <div class="component-container">
    <ec-input v-model="message" placeholder="введите имя"/>
  </div>
</template>

<style scoped>
.component-container {
  width: 100vw;
  height: 100wh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
