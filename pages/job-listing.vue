<template>
  <div class="h-40 bg-gray-600"></div>
  <div class="p-6 flex flex-col gap-12">
    <div v-for="(item, index) in 5" :key="index">
      <JobCard />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
