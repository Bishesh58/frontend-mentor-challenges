<template>
  <div
    class="bg-[url('/space-tourism/bg-home-desktop.jpg')] h-screen bg-no-repeat bg-cover md:bg-center px-8 py-32 text-slate-200"
  >
    <div
      class="h-full md:pb-20 flex flex-col md:flex-row justify-between items-center max-w-7xl max-h-[1024px] mx-auto"
    >
      <div
        class="max-md:py-16 md:flex-1 md:pl-32 max-md:flex max-md:flex-col items-center"
      >
        <p
          class="text-2xl uppercase font-thin font-Mohave tracking-widest text-slate-500"
        >
          So, you want to travel to
        </p>
        <h1
          class="text-4xl md:text-7xl lg:text-9xl uppercase font-CrimsonText font-thin tracking-wider py-8 px-2"
        >
          space
        </h1>
        <p
          class="leading-relaxed font-Mohave text-lg font-light tracking-widest text-slate-500 max-md:text-center max-w-lg"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="max-md:py-6 md:px-10 flex-1 flex justify-center items-center">
        <p
          class="p-20 w-32 h-32 md:w-64 md:h-64 font-CrimsonText text-2xl md:text-4xl uppercase tracking-wider rounded-full bg-white/95 text-gray-600 flex justify-center items-center"
        >
          Explore
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "space tourism",
});
</script>

<style scoped></style>
