<template>
  <header
    class="w-full h-28 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-end p-4 text-white"
  >
    <div class="flex items-center">
      <ArrowLeftIcon class="w-6 cursor-pointer text-black" @click="onBack" />
      <div class="font-semibold text-lg ml-4 text-black">New Chat</div>
    </div>
  </header>
  <section class="p-2 border-b border-b-gray-300">
    <Input type="text" placeholder="Search contacts" v-model="search" />
  </section>
  <section class="py-2">
    <div
      class="h-16 w-full py-4 flex items-center px-2 hover:bg-gray-100 cursor-pointer group"
      @click="showCreateGroupView"
    >
      <div
        class="h-12 w-12 rounded-full bg-gray-100 group-hover:bg-gray-500 flex items-center justify-center"
      >
        <UsersIcon class="h-6 w-6 text-gray-500 group-hover:text-gray-100" />
      </div>
      <div class="text-lg ml-2 text-white group-hover:text-black">New group</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowLeftIcon, UsersIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { SidebarView, useGlobalStore } from "../../stores/globalStore";
import Input from "../Input.vue";

const globalStore = useGlobalStore();
const search = ref("");

function onBack() {
  globalStore.showSidebarView(SidebarView.CONTACTS);
}

function showCreateGroupView() {
  globalStore.showSidebarView(SidebarView.NEW_GROUP_PARTICIPANTS);
}
</script>