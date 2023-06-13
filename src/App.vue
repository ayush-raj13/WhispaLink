<template>
  <main class="w-screen h-screen bg-gray-200 flex">
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { account } from './api';

onMounted(() => {})
</script>
