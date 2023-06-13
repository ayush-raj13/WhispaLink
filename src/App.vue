<template>
  <main class="w-screen h-screen bg-gray-200 bg-[url('../static/bg.jpg')] flex bg-cover">
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { account } from './api';

onMounted(() => {})
</script>
