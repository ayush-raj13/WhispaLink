<template>
  <div
    class="flex items-center px-2 hover:bg-gray-100 py-4 cursor-pointer relative group"
  >
    <Avatar />
    <div class="flex flex-col ml-3">
      <div class="text-white group-hover:text-black">{{ contact.email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Contact } from "../../api/database";
import Avatar from "../Avatar.vue";

interface Props {
  contact: Contact;
}

defineProps<Props>();
</script>