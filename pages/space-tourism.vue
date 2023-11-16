<template>
  <NuxtLayout name="space">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// this will redirect the index page(space-tourism.vue) to home page of space-tourism
definePageMeta({
  middleware: [
    function (to, from) {
      if (to.path == "/space-tourism/") {
        return navigateTo("/space-tourism/home");
      }
    },
  ],
});
</script>
