<template>
  <div
    class="bg-[url('/space-tourism/bg-crew-desktop.jpg')] h-screen bg-no-repeat bg-cover bg-center px-8 text-slate-200"
  >
    <div
      class="h-full md:p-10 pt-32 max-md:flex-col-reverse flex justify-between items-center gap-8 max-w-7xl mx-auto max-h-[1024px]"
    >
      <div class="flex-1">
        <UTabs
          :items="items"
          class="w-full"
          @change="onChange"
          :ui="{
            wrapper: 'flex flex-col-reverse max-md:items-center items-start space-around',
            list: {
              base: 'px-10',
              width: '',
              height: '',
              background: '',
              marker: {
                wrapper: 'h-4',
                background: '',
                rounded: '',
                border: '',
                base: 'h-4',
              },
              tab: {
                base: 'text-gray-500 border m-4 w-4 hover:text-gray-800 hover:bg-white hover:border-none',
                height: 'h-4',
                active:
                  'text-bg-gray-800 dark:text-gray-800 border-white bg-white',
                rounded: 'rounded-full',
                padding: '',
              },
            },
          }"
        >
          <!-- tab head -->
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <span
                class="truncate uppercase text-3xl font-light tracking-widest font-mono"
              >
              </span>
            </div>
          </template>
          <!-- tab content -->
          <template #item="{ item, index, selected }">
            <div v-if="selected" class="md:pl-10 min-h-[400px] md:min-w-[700px]">
              <p
                class="text-2xl max-md:text-center uppercase font-thin font-Mohave tracking-widest text-slate-500 self-start pb-4"
              >
                {{ item.label }}
              </p>
              <h1
                class="text-4xl md:text-6xl lg:text-7xl max-md:text-center uppercase font-CrimsonText font-thin tracking-wider pb-6"
              >
                {{ item.content.name }}
              </h1>
              <p
                class="leading-relaxed font-Mohave font-light tracking-widest text-slate-500 max-w-lg pb-8 text-lg max-md:text-center"
              >
                {{ item.content.bio }}
              </p>
            </div>
          </template>
        </UTabs>
      </div>
      <div class="flex-1 flex-col flex justify-between items-center">
        <!-- dynamic img -->
        <img :src="selectedImg" alt="" class="max-md:w-1/2"
        :class="index == 3? '-scale-x-0': ''"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { _height } from "#tailwind-config/theme";

useHead({
  title: "space tourism",
});

const items = [
  {
    label: "Flight Engineer",
    content: {
      name: "Anousheh Ansari",
      imgURL: "/space-tourism/image-anousheh-ansari.webp",
      bio: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.`,
    },
  },
  {
    label: "Pilot",
    content: {
      name: "Victor Glover",
      imgURL: "/space-tourism/image-victor-glover.webp",
      bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.`,
    },
  },
  {
    label: "Commander",
    content: {
      name: "Douglas Hurley",
      imgURL: "/space-tourism/image-douglas-hurley.webp",
      bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.`,
    },
  },
  {
    label: "Mission Specialist",
    content: {
      name: "Mark Shuttle",
      imgURL: "/space-tourism/image-mark-shuttleworth.webp",
      bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.`,
    },
  },
];

const selectedImg = ref(items[0].content.imgURL);

function onChange(index) {
  const item = items[index];
  selectedImg.value = item.content.imgURL;
}
</script>

<style scoped></style>
