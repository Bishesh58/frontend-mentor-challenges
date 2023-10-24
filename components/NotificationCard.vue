<template>
  <div
    class="p-4 font-Poppins rounded-md mb-2 hover:cursor-pointer hover:border"
    :class="isRead ? '' : 'bg-[#F6FAFD]'"
  >
    <div class="flex gap-3">
      <img :src="imgURL" alt="" class="h-10 w-10 rounded-full bg-red-400" />
      <div class="flex-1 text-sm">
        <span
          class="font-semibold text-base text-gray-900 hover:text-[#083377] hover:cursor-pointer"
        >
          {{ name }}{{ " " }}
        </span>
        <span v-if="action" class="text-gray-500">{{ action }}{{ " " }} </span>
        <span
          v-if="post"
          class="text-gray-600 font-semibold hover:text-[#083377] hover:cursor-pointer"
          >{{ post }}{{ " " }}
        </span>
        <span v-if="group" class="text-[#083377] font-semibold"
          >{{ group }}{{ " " }}
        </span>

        <div
          v-if="!isRead"
          class="ml-1 h-2 w-2 rounded-full bg-red-400 inline-block"
        ></div>
        <br />
        <span class="text-slate-400">{{ createdAt }}</span>

        <div
          v-if="message"
          class="my-4 p-4 border rounded-md text-gray-500 hover:bg-[#E5EFF9]"
        >
          <p>{{ message }}</p>
        </div>
      </div>
      <img
        v-if="photoURL"
        :src="photoURL"
        alt=""
        class="h-10 w-10 rounded-md"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  imgURL: String,
  post: String,
  action: String,
  message: String,
  group: String,
  photoURL: String,
  isRead: Boolean,
  createdAt: String,
});
</script>

<style scoped></style>
