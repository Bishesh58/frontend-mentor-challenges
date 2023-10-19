<template>
  <div
    class="min-h-screen bg-[#FFFFFF] flex justify-center items-center font-Roboto"
  >
    <div
      class="shadow-2xl shadow-blue-100 sm:flex max-w-[735px] min-h-[512px] sm:rounded-br-3xl"
    >
      <!-- card left -->
      <div
        class="py-2 px-6 sm:p-6 text-center text-slate-300 bg-[#6141FC] flex-1 rounded-b-2xl sm:rounded-2xl flex-col"
      >
        <p class="my-4 sm:my-6 text-2xl">Your Result</p>
        <div
          class="my-4 sm:my-6 bg-gradient-to-b from-[#4827D0] rounded-full w-40 h-40 sm:w-52 sm:h-52 mx-auto flex items-center justify-center"
        >
          <div>
            <p class="text-6xl sm:text-7xl font-extrabold text-slate-100 mb-1">
              76
            </p>
            <p class="text-sm text-slate-400">of 100</p>
          </div>
        </div>
        <h1 class="sm:my-6 text-3xl text-slate-100">Great</h1>
        <p class="my-6 text-lg">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <!-- card right -->
      <div class="flex-1 px-6 sm:p-6 flex-col justify-between">
        <h1 class="my-5 text-2xl">Summary</h1>
        <div class="p-4 rounded-md bg-[#FFF6F5] flex justify-between my-4">
          <div class="flex gap-2">
            <img src="/svg/icon-reaction.svg" alt="" class="" />
            <p class="text-[#f55]">Reaction</p>
          </div>

          <p class="text-slate-400">
            <span class="text-gray-800">80</span> / 100
          </p>
        </div>
        <div class="p-4 rounded-md bg-[#FFFBF2] flex justify-between my-4">
          <div class="flex gap-2">
            <img src="/svg/icon-memory.svg" alt="img" />
            <p class="text-[#FFB21E]">Memory</p>
          </div>

          <p class="text-slate-400">
            <span class="text-gray-800">92</span> / 100
          </p>
        </div>
        <div class="p-4 rounded-md bg-[#F2FBFA] flex justify-between my-4">
          <div class="flex gap-2">
            <img src="/svg/icon-verbal.svg" alt="img" />
            <p class="text-[#00BB8F]">Verbal</p>
          </div>

          <p class="text-slate-400">
            <span class="text-gray-800">92</span> / 100
          </p>
        </div>
        <div class="p-4 rounded-md bg-[#F3F3FD] flex justify-between my-4">
          <div class="flex gap-2">
            <img src="/svg/icon-visual.svg" alt="img" />
            <p class="text-[#1125D6]">Visual</p>
          </div>

          <p class="text-slate-400">
            <span class="text-gray-800">92 </span> / 100
          </p>
        </div>
        <button
          class="bg-[#303B59] py-4 my-4 sm:my-6 w-full rounded-full text-white font-semibold hover:bg-[#4C38F2]"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
