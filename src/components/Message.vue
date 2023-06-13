<template>
  <div class="w-full flex" :class="[isOwner ? 'justify-end' : 'justify-start']">
				<div>
          <div class="text-xs mb-2" :class="[isOwner ? 'text-black' : 'text-gray-500']">{{ message.email }}</div>
					<div :class="[isOwner ? 'bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg' : 'bg-white text-black p-3 rounded-r-lg rounded-bl-lg']">
            <p class="text-sm">{{ message.contents }}</p>
					</div>
				</div>
			</div>
</template>

<script setup lang="ts">
import { Models } from "appwrite";
import { ref, onMounted, computed } from "vue";
import { account } from "../api";
import { MessageModel } from "../models";

interface Props {
  message: MessageModel;
}

const props = defineProps<Props>();
const session = ref<Models.Session | undefined>();

const isOwner = computed(() => {
  return session.value?.userId === props.message.userId;
});

onMounted(async () => {
  session.value = await account.getSession("current");
});
</script>