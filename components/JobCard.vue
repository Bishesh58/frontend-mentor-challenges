<template>
  <div class="relative">
    <div
      v-if="props.job.new && props.job.featured"
      class="absolute z-0 inset-0 -ml-2 bg-blue-500 rounded-xl"
    ></div>
    <div
      class="p-8 bg-white text-gray-900 rounded-md relative z-10 shadow-md hover:shadow-lg md:flex md:justify-between"
    >
      <div
        class="flex flex-col max-md:-mt-16 md:flex-row gap-4 md:items-center"
      >
        <img :src="props.job.logo" alt="" class="h-20 w-20 rounded-full" />

        <div class="flex flex-col">
          <div class="flex gap-4">
            <p class="text-blue-700 font-bold">{{ props.job.company }}</p>
            <p
              v-if="props.job.new"
              class="px-2.5 py-0.5 text-sm bg-blue-400 text-white rounded-full uppercase"
            >
              New!
            </p>
            <p
              v-if="props.job.featured"
              class="px-2.5 py-0.5 text-sm bg-gray-500 text-white rounded-full uppercase"
            >
              Featured
            </p>
          </div>
          <h2 class="text-blue-950 font-bold py-2">{{ props.job.position }}</h2>
          <div class="flex gap-4 items-center text-gray-400">
            <p>{{ props.job.postedAt }}</p>
            <p class="-mt-2">.</p>
            <p>{{ props.job.contract }}</p>
            <p class="-mt-2">.</p>
            <p>{{ props.job.location }}</p>
          </div>
        </div>
      </div>
      <div class="w-full border-b my-4 md:hidden"></div>
      <div class="flex items-center gap-4 flex-wrap">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          @click="store.addToList(tag)"
        >
          <p
            class="py-1.5 px-2 bg-blue-50 rounded-md font-semibold text-blue-500 hover:bg-blue-200 hover:text-blue-700 cursor-pointer"
          >
            {{ tag }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSearchListStore } from "../stores/searchList";

const store = useSearchListStore();

const props = defineProps(["job"]);

const tags = computed(() => {
  const allTags = [];
  allTags.push(props.job.role, props.job.level);
  props.job.languages.map((lang) => allTags.push(lang));
  props.job.tools.map((lang) => allTags.push(lang));

  return allTags;
});
</script>

<style scoped></style>
