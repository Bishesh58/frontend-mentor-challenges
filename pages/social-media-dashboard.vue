<template>
  <div class="bg-white dark:bg-[#20222F]">
    <div
      class="bg-white dark:bg-[#20222F] dark:text-white min-h-screen max-w-6xl mx-auto p-6 font-Inter flex flex-col gap-4"
    >
      <div class="px-2">
        <h1 class="font-semibold">Social Media Dashboard</h1>
        <p class="text-xs text-slate-500">Total Followers: 23,004</p>
        <div class="border-b my-4 dark:border-slate-500 md:hidden"></div>
        <div
          class="flex justify-between items-center mb-6 md:justify-end gap-2"
        >
          <p class="text-slate-500 dark:text-white text-sm">
            {{ isDark ? "Dark Mode" : "Light Mode" }}
          </p>
          <div
            class="border h-6 w-11 rounded-full flex justify-center gap-1 items-center hover:cursor-pointer bg-[#F0F3FA] text-black dark:bg-gradient-to-r from-[#4595D0] to-[#3CCA9C] dark:text-white"
            @click="toggleDark()"
          >
            <Icon
              v-if="isDark"
              name="ph:moon-stars-light"
              size="16px"
              class="animate-jump-in animate-delay-300"
            />
            <Icon
              v-else
              name="ph:sun"
              size="16px"
              class="animate-jump-in animate-delay-300"
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 sm:flex-row sm:justify-evenly sm:flex-wrap"
      >
        <!-- facebook -->
        <div class="pt-1 rounded-t-md rounded-b-3xl bg-[#198FF5]">
          <div
            class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-t-none rounded-b-md flex justify-center items-center flex-col gap-4 py-4 md:py-6"
          >
            <div>
              <Icon name="mdi:facebook" class="text-[#198FF5]" />
              <p
                class="inline-block px-1 text-xs text-slate-500 dark:text-slate-400"
              >
                @nathanf
              </p>
            </div>
            <h1 class="font-bold text-4xl animate-jump-in animate-delay-300">
              1987
            </h1>
            <p
              class="uppercase tracking-[.4em] leading-3 text-[10px] font-thin text-gray-400 -mt-3"
            >
              Followers
            </p>
            <div class="text-[#1DB489] animate-fade-up animate-delay-100">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">12 Today</p>
            </div>
          </div>
        </div>

        <!-- twitter -->
        <div class="pt-1 rounded-t-md rounded-b-3xl bg-[#1CA0F2]">
          <div
            class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md rounded-t-none flex justify-center items-center flex-col gap-4 py-4 md:py-6"
          >
            <div>
              <Icon name="mdi:twitter" class="text-[#1CA0F2]" />
              <p
                class="inline-block px-1 text-xs text-slate-500 dark:text-slate-400"
              >
                @nathanf
              </p>
            </div>
            <h1 class="font-bold text-4xl animate-jump-in animate-delay-300">
              1044
            </h1>
            <p
              class="uppercase tracking-[.4em] leading-3 text-[10px] font-thin text-gray-400 -mt-3"
            >
              Followers
            </p>
            <div class="text-[#1DB489] animate-fade-up animate-delay-100">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">99 Today</p>
            </div>
          </div>
        </div>

        <!-- instagram -->
        <div
          class="pt-1 rounded-t-md rounded-b-3xl bg-gradient-to-r from-[#FDC468] to-[#DF4996]"
        >
          <div
            class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md rounded-t-none flex justify-center items-center flex-col gap-4 py-4 md:py-6"
          >
            <div>
              <Icon
                name="mdi:instagram"
                class="bg-gradient-to-r from-[#FDC468] to-[#DF4996] rounded-md"
              />
              <p
                class="inline-block px-1 text-xs text-slate-500 dark:text-slate-400"
              >
                @nathanf
              </p>
            </div>
            <h1 class="font-bold text-4xl animate-jump-in animate-delay-300">
              11k
            </h1>
            <p
              class="uppercase tracking-[.4em] leading-3 text-[10px] font-thin text-gray-400 -mt-3"
            >
              Followers
            </p>
            <div class="text-[#1DB489] animate-fade-up animate-delay-100">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">1099 Today</p>
            </div>
          </div>
        </div>

        <!-- youtube -->
        <div class="pt-1 rounded-t-md rounded-b-3xl bg-[#a30524d7]">
          <div
            class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md rounded-t-none flex justify-center items-center flex-col gap-4 py-4 md:py-6"
          >
            <div>
              <Icon name="mdi:youtube" class="text-[#a30524d7]" />
              <p
                class="inline-block px-1 text-xs text-slate-500 dark:text-slate-400"
              >
                @nathanf
              </p>
            </div>
            <h1 class="font-bold text-4xl animate-jump-in animate-delay-300">
              1987
            </h1>
            <p
              class="uppercase tracking-[.4em] leading-3 text-[10px] font-thin text-gray-400 -mt-3"
            >
              Subscribers
            </p>
            <div class="text-[#d95771] animate-fade-up animate-delay-100">
              <Icon name="material-symbols:arrow-drop-down" />
              <p class="inline-block px-1 text-sm">12 Today</p>
            </div>
          </div>
        </div>
      </div>

      <!-- bottom Overview -->
      <h1 class="font-semibold px-2 py-4">Overview - Today</h1>
      <div
        class="flex flex-col gap-4 sm:flex-row sm:justify-evenly sm:flex-wrap"
      >
        <!-- fb page view -->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Page Views</p>
            <Icon name="mdi:facebook" class="text-[#198FF5]" />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">1987</h1>

            <div class="text-[#1DB489]">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">3%</p>
            </div>
          </div>
        </div>

        <!-- fb likes -->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-200"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Likes</p>
            <Icon name="mdi:facebook" class="text-[#198FF5]" />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">52</h1>

            <div class="text-[#d95771]">
              <Icon name="material-symbols:arrow-drop-down" />
              <p class="inline-block px-1 text-sm">2%</p>
            </div>
          </div>
        </div>

        <!-- ig likes-->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-300"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Likes</p>
            <Icon
              name="mdi:instagram"
              class="bg-gradient-to-r from-[#FDC468] to-[#DF4996] rounded-md"
            />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">5462</h1>

            <div class="text-[#1DB489]">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">2257%</p>
            </div>
          </div>
        </div>

        <!-- ig profile view -->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-400"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Profile Views</p>
            <Icon
              name="mdi:instagram"
              class="bg-gradient-to-r from-[#FDC468] to-[#DF4996] rounded-md"
            />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">52K</h1>

            <div class="text-[#1DB489]">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">1375%</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 sm:flex-row sm:justify-evenly sm:flex-wrap"
      >
        <!-- retweets -->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-500"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Page Views</p>
            <Icon name="mdi:twitter" class="text-[#1CA0F2]" />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">117</h1>

            <div class="text-[#1DB489]">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">303%</p>
            </div>
          </div>
        </div>

        <!-- twitter likes -->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-600"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Likes</p>
            <Icon name="mdi:twitter" class="text-[#1CA0F2]" />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">507</h1>

            <div class="text-[#1DB489]">
              <Icon name="material-symbols:arrow-drop-up" />
              <p class="inline-block px-1 text-sm">553%</p>
            </div>
          </div>
        </div>

        <!-- youtube likes-->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-700"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Likes</p>
            <Icon name="mdi:youtube" class="text-[#a30524d7] rounded-md" />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">107</h1>

            <div class="text-[#d95771]">
              <Icon name="material-symbols:arrow-drop-down" />
              <p class="inline-block px-1 text-sm">19%</p>
            </div>
          </div>
        </div>

        <!-- youtube total views -->
        <div
          class="bg-[#F0F3FA] sm:min-w-[250px] dark:bg-[#252B43] hover:cursor-pointer hover:bg-[#E1E3F0] dark:hover:bg-[#333A56] rounded-md flex justify-center items-center flex-col gap-4 px-8 py-7 animate-fade-right animate-delay-1000"
        >
          <div class="flex w-full justify-between items-center">
            <p class="text-slate-500 dark:text-slate-400">Total Views</p>
            <Icon name="mdi:youtube" class="text-[#a30524d7] rounded-md" />
          </div>
          <div class="flex w-full justify-between items-center">
            <h1 class="font-bold text-2xl">1407</h1>

            <div class="text-[#d95771]">
              <Icon name="material-symbols:arrow-drop-down" />
              <p class="inline-block px-1 text-sm">12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
