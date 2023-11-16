<template>
  <div
    class="bg-[url('/space-tourism/bg-destination-desktop.jpg')] h-screen bg-no-repeat bg-cover bg-center px-8 py-32 text-slate-200"
  >
    <div
      class="h-full pb-20 px-32 flex justify-between items-end max-w-7xl mx-auto max-h-[1024px]"
    >
      <div class="flex-1 flex-col flex justify-end items-center">
        <p
          class="text-3xl uppercase font-thin font-Mohave tracking-widest text-slate-500"
        >
          Pick your destination
        </p>
        <img src="/space-tourism/destination/image-mars.webp" alt="" />
      </div>
      <div class="flex-1">
        <UTabs :items="items" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "space tourism",
});

const items = [{
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  disabled: true,
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3'
}]
</script>

<style scoped></style>
