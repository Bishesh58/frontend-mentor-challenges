<template>
  <div
    class="bg-[url('/space-tourism/bg-destination-desktop.jpg')] h-screen bg-no-repeat bg-cover bg-center px-8 text-slate-200"
  >
    <div
      class="h-full p-10 pt-32 flex justify-between items-center gap-8 max-w-7xl mx-auto max-h-[1024px]"
    >
      <div class="flex-1 flex-col flex justify-between items-center">
        <p
          class="text-3xl uppercase font-thin font-Mohave tracking-widest text-slate-500 self-start pb-20"
        >
          Pick your destination
        </p>
        <!-- dynamic img -->
        <img :src="selectedImg" alt="" />
      </div>
      <div class="flex-1">
        <UTabs
          :items="items"
          class="w-full"
          @change="onChange"
          :ui="{
            list: {
              width: 'max-w-[350px]',
              background: '',
              marker: {
                background:
                  'bg-gray-800/10 dark:bg-gray-800/10 border-b-2 text-slate-400',
                rounded: '',
                border: 'border border-b-2',
                base: 'max-w-[52px]',
              },
              tab: {
                base: 'text-slate-400',
              },
            },
          }"
        >
          <!-- tab head -->
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <span
                class="truncate uppercase text-sm font-light tracking-widest font-mono"
              >
                {{ item.label }}</span
              >
            </div>
          </template>
          <!-- tab content -->
          <template #item="{ item, index, selected }">
            <div v-if="selected" class="p-10 min-h-[500px]">
              <h1
                class="text-7xl uppercase font-CrimsonText font-thin tracking-wider py-8 px-2"
              >
                {{ item.label }}
              </h1>
              <p
                class="leading-relaxed font-Mohave font-light tracking-widest text-slate-500 max-w-lg pb-8"
              >
                {{ item.content.description }}
              </p>
              <div class="h-[1px] bg-slate-600"></div>
              <div class="flex justify-between py-4">
                <p>
                  <span class="text-xs block text-slate-500 tracking-wider"
                    >AVG. DISTANCE</span
                  >
                  <span class="text-2xl uppercase font-[200] leading-relaxed">{{
                    item.content.distance
                  }}</span>
                </p>
                <p>
                  <span class="text-xs block text-slate-500 tracking-wider"
                    >EST. TRAVEL TIME</span
                  >
                  <span class="text-2xl uppercase font-[200] leading-relaxed">{{
                    item.content.travel
                  }}</span>
                </p>
              </div>
            </div>
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "space tourism",
});

const items = [
  {
    label: "Moon",
    content: {
      imgURL: "/space-tourism/image-moon.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
  },
  {
    label: "Mars",
    content: {
      imgURL: "/space-tourism/image-mars.png",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
  },
  {
    label: "Europa",
    content: {
      imgURL: "/space-tourism/image-europa.png",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
  },
  {
    label: "Titan",
    content: {
      imgURL: "/space-tourism/image-titan.png",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
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
