<template>
  <div class="relative">
    <div
      v-if="job.new && job.featured"
      class="absolute z-0 inset-0 -ml-2 bg-blue-500 rounded-xl"
    ></div>
    <div
      class="p-8 bg-white text-gray-900 rounded-md relative z-10 shadow-md hover:shadow-lg md:flex md:justify-between"
    >
      <div class="flex gap-4 items-center">
        <img :src="job.logo" alt="" class="h-20 w-20 rounded-full" />

        <div class="flex flex-col">
          <div class="flex gap-4">
            <p class="text-blue-700 font-bold">{{ job.company }}</p>
            <p
              v-if="job.new"
              class="px-2.5 py-0.5 text-sm bg-blue-400 text-white rounded-full uppercase"
            >
              New!
            </p>
            <p
              v-if="job.featured"
              class="px-2.5 py-0.5 text-sm bg-gray-500 text-white rounded-full uppercase"
            >
              Featured
            </p>
          </div>
          <h2 class="text-blue-950 font-bold py-2">{{ job.position }}</h2>
          <div class="flex gap-4 items-center text-gray-400">
            <p>{{ job.postedAt }}</p>
            <p class="-mt-2">.</p>
            <p>{{ job.contract }}</p>
            <p class="-mt-2">.</p>
            <p>{{ job.location }}</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div v-for="(lang, index) in job.languages" :key="index">
          <p class="p-1.5 bg-blue-100 rounded-md font-semibold text-blue-700">
            {{ lang }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["job"]);
</script>

<style scoped></style>
