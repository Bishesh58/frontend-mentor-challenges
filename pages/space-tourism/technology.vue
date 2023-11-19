<template>
  <div
    class="bg-[url('/space-tourism/bg-technology-desktop.jpg')] h-screen bg-no-repeat bg-cover bg-center px-8 text-slate-200"
  >
    <div
      class="h-full p-10 pt-32 flex justify-between items-center gap-8 max-w-7xl mx-auto max-h-[1024px]"
    >
      <div class="flex-1">
        <UTabs
          :items="items"
          class="w-full"
          orientation="vertical"
          @change="onChange"
          :ui="{
            wrapper: 'flex items-start gap-4',
            list: {
              base: 'pt-10',
              width: '',
              height: '',
              background: '',
              marker: {
                background: '',
                rounded: '',
                border: '',
                base: '',
              },
              tab: {
                base: 'text-gray-500 border m-4 p-8 w-20 hover:text-gray-800 hover:bg-white hover:border-none',
                height: 'h-20',
                active:
                  'text-bg-gray-800 dark:text-gray-800 border-white bg-white',
                rounded: 'rounded-full',
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
                {{ index + 1 }}</span
              >
            </div>
          </template>
          <!-- tab content -->
          <template #item="{ item, index, selected }">
            <div
              v-if="selected"
              class="py-10 pl-10 min-h-[500px] min-w-[600px]"
            >
              <p
                class="text-2xl uppercase font-thin font-Mohave tracking-widest text-slate-500 self-start pb-1"
              >
                The terminology...
              </p>
              <h1
                class="text-6xl uppercase font-CrimsonText font-thin tracking-wider pb-4"
              >
                {{ item.label }}
              </h1>
              <p
                class="leading-relaxed font-Mohave font-light tracking-widest text-slate-500 max-w-lg pb-8 text-lg"
              >
                {{ item.content.description }}
              </p>
            </div>
          </template>
        </UTabs>
      </div>
      <div class="flex-1 flex-col flex justify-between items-center">
        <!-- dynamic img -->
        <img :src="selectedImg" alt="" />
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
    label: "Launch vehicle",
    content: {
      imgURL: "/space-tourism/image-launch-vehicle-portrait.jpg",
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad! `,
    },
  },
  {
    label: "Spaceport",
    content: {
      imgURL: "/space-tourism/image-spaceport-portrait.jpg",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`,
    },
  },
  {
    label: "Space capsule",
    content: {
      imgURL: "/space-tourism/image-space-capsule-portrait.jpg",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`,
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
