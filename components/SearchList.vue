<template>
  <div
    class="p-8 bg-white text-gray-900 rounded-md relative z-10 shadow-md hover:shadow-lg flex justify-between gap-2 flex-wrap animate-jump-in animate-duration-300"
  >
    <div
      class="flex gap-2 text-xs md:text-base flex-wrap items-center md:gap-4"
    >
      <div
        v-for="(lang, index) in store.list"
        :key="index"
        class="flex items-center group"
      >
        <p
          class="py-1.5 px-2 bg-blue-100 rounded-l-md font-semibold text-blue-500"
        >
          {{ lang }}
        </p>
        <div
          class="py-1.5 px-2 bg-blue-100 text-gray-500 group-hover:bg-blue-500 group-hover:text-white h-full rounded-r-md cursor-pointer"
          @click="store.removeFromList(lang)"
        >
          <Icon name="material-symbols:close-rounded" />
        </div>
      </div>
    </div>
    <button
      class="items-end hover:border-b border-blue-950 text-gray-500 hover:text-black text-xs md:text-base"
      @click="store.emptyList()"
    >
      clear
    </button>
  </div>
</template>

<script setup>
import { useSearchListStore } from "../stores/searchList";

const store = useSearchListStore();
</script>

<style scoped></style>
