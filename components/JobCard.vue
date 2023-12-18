<template>
  <div class="relative">
    <div
      v-if="job.new && job.featured"
      class="absolute z-0 inset-0 -ml-2 bg-red-400 rounded-xl"
    ></div>
    <div class="p-2 bg-white text-gray-900 rounded-md relative z-10">
      <div class="h-40 w-40 rounded-full">
        <img :src="job.logo" alt="" class="" />
      </div>
      <div>
        <div>
          <p>{{ job.company }}</p>
          <p>{{ job.new }}</p>
          <p>{{ job.featured }}</p>
        </div>
        <h2>{{ job.position }}</h2>
        <div>
          <p>{{ job.postedAt }}</p>
          <p>{{ job.contract }}</p>
          <p>{{ job.location }}</p>
        </div>
      </div>
      <div v-for="(lang, index) in job.languages" :key="index">
        <p>{{ lang }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["job"]);
</script>

<style scoped></style>
