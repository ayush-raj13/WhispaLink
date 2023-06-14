<template>
  <div class="w-full flex" :class="[isOwner ? 'justify-end' : 'justify-start']">
				<div>
          <div class="text-xs mb-2 text-gray-700">{{ message.email }}</div>
					<div :class="[isOwner ? 'bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg' : 'bg-white text-black p-3 rounded-r-lg rounded-bl-lg']">
            <p class="text-sm">{{ message.contents }}</p>
					</div>
          <span class="text-xs text-gray-700 leading-none">{{ time }}</span>
				</div>
			</div>
</template>

<script setup lang="ts">
import { Models } from "appwrite";
import { ref, onMounted, computed } from "vue";
import { account } from "../api";
import { MessageModel } from "../models";
import moment from "moment";

interface Props {
  message: MessageModel;
}

const props = defineProps<Props>();
const session = ref<Models.Session | undefined>();

const isOwner = computed(() => {
  return session.value?.userId === props.message.userId;
});

const time = moment(props.message.time).format('MMMM Do YYYY, h:mm:ss a');

onMounted(async () => {
  session.value = await account.getSession("current");
});
</script>