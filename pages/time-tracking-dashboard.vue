<template>
  <div class="min-h-screen flex justify-center items-center bg-[#0D1323]">
    <div
      class="w-full max-w-7xl mx-auto p-8 md:p-10 font-Rubik text-gray-300 grid gap-6 md:grid-cols-4"
    >
      <!-- profile top -->
      <div
        class="bg-[#1D204B] w-full md:max-w-[220px] md:justify-self-end rounded-xl row-span-2"
      >
        <div
          class="bg-[#5746EA] rounded-xl p-6 flex items-center md:flex-col md:items-start md:py-6"
        >
          <img
            src="/img/user/rizky.webp"
            alt=""
            class="h-20 w-20 p-0.5 border bg-white rounded-full"
          />
          <div class="mx-4 md:mx-0 md:mr-6 md:my-6">
            <p class="text-xs text-slate-400 md:py-2">Report for</p>
            <p class="text-lg font-light md:text-2xl flex md:flex-col">
              <span class="pr-1">Jeremy</span> <span>Robson</span>
            </p>
          </div>
        </div>
        <div class="p-6 flex justify-between text-sm md:flex md:flex-col">
          <p
            class="text-slate-400 hover:text-slate-300 hover:cursor-pointer md:pb-4"
          >
            Daily
          </p>
          <p class="text-slate-300 hover:cursor-pointer md:pb-4">Weekly</p>
          <p
            class="text-slate-400 hover:text-slate-300 hover:cursor-pointer md:pb-4"
          >
            Monthly
          </p>
        </div>
      </div>
      <!-- card work -->
      <div class="h-32 md:h-auto">
        <div
          class="w-full rounded-xl relative bg-[url('/svg/icon-work.svg')] bg-no-repeat bg-contain h-12 md:h-16 bg-[#FF8B64]"
          style="background-position: calc(100% - 10px) -5px"
        >
          <div
            class="absolute h-fit top-6 left-0 right-0 bottom-0 p-5 md:top-10 md:pb-8 rounded-xl bg-[#1D204B] hover:bg-[#34397B] hover:cursor-pointer"
          >
            <div class="flex justify-between items-center mb-2">
              <p>Work</p>
              <img src="/svg/icon-ellipsis.svg" alt="" />
            </div>
            <div
              class="flex justify-between items-center md:flex-col md:items-start md:gap-2"
            >
              <p class="text-2xl font-light md:text-4xl md:mt-4">32hrs</p>
              <p class="text-xs text-slate-400">Last week - 36hrs</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card play -->
      <div class="h-32 md:h-auto">
        <div
          class="w-full rounded-xl relative bg-[url('/svg/icon-play.svg')] bg-no-repeat bg-contain h-12 md:h-16 bg-[#56C2E6]"
          style="background-position: calc(100% - 10px) -5px"
        >
          <div
            class="absolute h-fit top-6 left-0 right-0 bottom-0 p-5 md:top-10 md:pb-8 rounded-xl bg-[#1D204B] hover:bg-[#34397B] hover:cursor-pointer"
          >
            <div class="flex justify-between items-center mb-2">
              <p>Play</p>
              <img src="/svg/icon-ellipsis.svg" alt="" />
            </div>
            <div
              class="flex justify-between items-center md:flex-col md:items-start md:gap-2"
            >
              <p class="text-2xl font-light md:text-4xl md:mt-4">10hrs</p>
              <p class="text-xs text-slate-400">Last week - 8hrs</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card study -->
      <div class="h-32 md:h-auto">
        <div
          class="w-full rounded-xl relative bg-[url('/svg/icon-study.svg')] bg-no-repeat bg-contain h-12 md:h-16 bg-[#FF5E7D]"
          style="background-position: calc(100% - 10px) -5px"
        >
          <div
            class="absolute h-fit top-6 left-0 right-0 bottom-0 p-5 md:top-10 md:pb-8 rounded-xl bg-[#1D204B] hover:bg-[#34397B] hover:cursor-pointer"
          >
            <div class="flex justify-between items-center mb-2">
              <p>Study</p>
              <img src="/svg/icon-ellipsis.svg" alt="" />
            </div>
            <div
              class="flex justify-between items-center md:flex-col md:items-start md:gap-2"
            >
              <p class="text-2xl font-light md:text-4xl md:mt-4">4hrs</p>
              <p class="text-xs text-slate-400">Last week - 7hrs</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card Exercise -->
      <div class="h-32 md:h-auto">
        <div
          class="w-full rounded-xl relative bg-[url('/svg/icon-exercise.svg')] bg-no-repeat bg-contain h-12 md:h-16 bg-[#4BCF83]"
          style="background-position: calc(100% - 10px) -5px"
        >
          <div
            class="absolute h-fit top-6 left-0 right-0 bottom-0 p-5 md:top-10 md:pb-8 rounded-xl bg-[#1D204B] hover:bg-[#34397B] hover:cursor-pointer"
          >
            <div class="flex justify-between items-center mb-2">
              <p>Exercise</p>
              <img src="/svg/icon-ellipsis.svg" alt="" />
            </div>
            <div
              class="flex justify-between items-center md:flex-col md:items-start md:gap-2"
            >
              <p class="text-2xl font-light md:text-4xl md:mt-4">4hrs</p>
              <p class="text-xs text-slate-400">Last week - 5hrs</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card Social -->
      <div class="h-32 md:h-auto">
        <div
          class="w-full rounded-xl relative bg-[url('/svg/icon-social.svg')] bg-no-repeat bg-contain h-12 md:h-16 bg-[#7235D1]"
          style="background-position: calc(100% - 10px) -5px"
        >
          <div
            class="absolute h-fit top-6 left-0 right-0 bottom-0 p-5 md:top-10 md:pb-8 rounded-xl bg-[#1D204B] hover:bg-[#34397B] hover:cursor-pointer"
          >
            <div class="flex justify-between items-center mb-2">
              <p>Social</p>
              <img src="/svg/icon-ellipsis.svg" alt="" />
            </div>
            <div
              class="flex justify-between items-center md:flex-col md:items-start md:gap-2"
            >
              <p class="text-2xl font-light md:text-4xl md:mt-4">5hrs</p>
              <p class="text-xs text-slate-400">Last week - 2hrs</p>
            </div>
          </div>
        </div>
      </div>
      <!-- card Self Care -->
      <div class="h-32 md:h-auto">
        <div
          class="w-full rounded-xl relative bg-[url('/svg/icon-self-care.svg')] bg-no-repeat bg-contain h-12 md:h-16 bg-[#F1C75B]"
          style="background-position: calc(100% - 10px) -5px"
        >
          <div
            class="absolute h-fit top-6 left-0 right-0 bottom-0 p-5 md:top-10 md:pb-8 rounded-xl bg-[#1D204B] hover:bg-[#34397B] hover:cursor-pointer"
          >
            <div class="flex justify-between items-center mb-2">
              <p>Self Care</p>
              <img src="/svg/icon-ellipsis.svg" alt="" />
            </div>
            <div
              class="flex justify-between items-center md:flex-col md:items-start md:gap-2"
            >
              <p class="text-2xl font-light md:text-4xl md:mt-4">2hrs</p>
              <p class="text-xs text-slate-400">Last week - 2hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
