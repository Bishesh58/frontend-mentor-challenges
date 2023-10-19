<template>
  <NuxtLink :to="data.link" class="w-fit">
    <div
      class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-cyan-500 to-90% p-1 rounded-md hover:border-gray-400 hover:shadow-lg hover:bg-gradient-to-t hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
    >
      <div class="w-[300px] h-[300px] flex flex-col">
        <img
          :src="data.imgURL"
          alt="qr_preview"
          class="flex-1 w-full h-[60%] object-cover object-center rounded-t-md"
        />
        <div
          class="p-4 text-center text-white bg-[#3e7ca3] tracking-wider capitalize border rounded-b-md"
        >
          <p>{{ data.title }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped></style>
