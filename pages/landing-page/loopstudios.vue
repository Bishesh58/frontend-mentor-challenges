<template>
  <div class="font-Poppins relative">
    <div
      class="h-[600px] bg-[url('/img/image-hero.jpg')] bg-no-repeat bg-center bg-cover"
    >
      <div class="max-w-7xl mx-auto text-white">
        <header class="flex justify-between items-center px-4 py-6">
          <img src="/svg/logo-loopstudios.svg" alt="" />
          <nav class="space-x-4 hidden md:flex">
            <a href="#" class="hover:underline underline-offset-4">About</a>
            <a href="#" class="hover:underline underline-offset-4">Careers</a>
            <a href="#" class="hover:underline underline-offset-4">Events</a>
            <a href="#" class="hover:underline underline-offset-4">Products</a>
            <a href="#" class="hover:underline underline-offset-4">Supports</a>
          </nav>
          <div
            class="md:hidden hover:cursor-pointer"
            @click="isMobileMenu = true"
          >
            <Icon name="ic:round-menu" size="32px" />
          </div>
        </header>
        <!-- mobile menu overlay -->
        <div
          v-if="isMobileMenu"
          class="absolute top-0 left-0 right-0 bottom-0 z-20 bg-black text-white"
        >
          <header>
            <div class="flex justify-between items-center p-6">
              <img src="/svg/logo-loopstudios.svg" alt="" />

              <div
                class="md:hidden hover:cursor-pointer"
                @click="isMobileMenu = false"
              >
                <Icon name="ic:round-close" size="32px" />
              </div>
            </div>
            <nav class="gap-4 py-20 px-8 flex flex-col">
              <a href="#" class="hover:underline underline-offset-4">About</a>
              <a href="#" class="hover:underline underline-offset-4">Careers</a>
              <a href="#" class="hover:underline underline-offset-4">Events</a>
              <a href="#" class="hover:underline underline-offset-4"
                >Products</a
              >
              <a href="#" class="hover:underline underline-offset-4"
                >Supports</a
              >
            </nav>
          </header>
        </div>
        <h1
          class="uppercase border border-white text-center md:text-left md:w-fit max-w-[620px] text-3xl md:text-6xl font-thin tracking-widest mx-4 mt-32 px-8 py-6"
        >
          Immersive experiences that deliver
        </h1>
      </div>
    </div>
    <div class="max-w-7xl mx-auto">
      <section class="flex flex-col lg:flex-row max-lg:px-8 py-20">
        <img src="/img/image-interactive.jpg" alt="" />
        <div class="py-8 lg:p-16 lg:-ml-40 bg-white self-end">
          <h1
            class="text-xl md:text-3xl font-light uppercase tracking-wider py-3 lg:text-left text-center"
          >
            The leader in interactive VR
          </h1>
          <p class="text-sm text-center md:text-left leading-relaxed tracking-wide text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section class="max-lg:px-8 py-20 pt-0">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-light uppercase tracking-wider py-3">
            Our creations
          </h1>
          <button
            class="uppercase font-thin border px-6 py-2 pt-2.5 border-black hover:bg-gray-800 hover:text-white"
          >
            see all
          </button>
        </div>
        <div class="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            class="text-white bg-[url('/img/image-deep-earth.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">Deep earth</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-night-arcade.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">Night arcade</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-soccer-team.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">Soccer team VR</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-grid.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">The grid</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-from-above.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">From up above VR</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-pocket-borealis.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">Pocket borealis</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-curiosity.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">The curiosity</h1>
          </div>
          <div
            class="text-white bg-[url('/img/image-fisheye.jpg')] bg-no-repeat bg-cover h-96 w-full flex items-end justify-center"
          >
            <h1 class="uppercase py-4 text-lg">Make it fisheye</h1>
          </div>
        </div>
      </section>
    </div>
    <!-- footer -->
    <div class="bg-gray-900 text-gray-400">
      <div
        class="max-w-7xl mx-auto flex flex-col justify-center md:justify-between md:flex-row items-center py-12 px-4"
      >
        <div>
          <img src="/svg/logo-loopstudios.svg" alt="" class="w-28" />
          <div
            class="flex flex-col justify-center md:justify-between md:flex-row items-center gap-2 md:gap-4 text-sm py-4"
          >
            <a href="#" class="hover:text-white hover:cursor-pointer">About</a>
            <a href="#" class="hover:text-white hover:cursor-pointer"
              >Careers</a
            >
            <a href="#" class="hover:text-white hover:cursor-pointer">Events</a>
            <a href="#" class="hover:text-white hover:cursor-pointer"
              >Products</a
            >
            <a href="#" class="hover:text-white hover:cursor-pointer"
              >Supports</a
            >
          </div>
        </div>
        <div class="">
          <div class="flex items-center justify-center gap-2 md:gap-4">
            <Icon
              name="mdi:facebook"
              class="hover:text-white hover:cursor-pointer"
            />
            <Icon
              name="mdi:twitter"
              class="hover:text-white hover:cursor-pointer"
            />
            <Icon
              name="mdi:pinterest"
              class="hover:text-white hover:cursor-pointer"
            />
            <Icon
              name="mdi:instagram"
              class="hover:text-white hover:cursor-pointer"
            />
          </div>
          <p class="text-xs py-4">© 2023 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isMobileMenu = ref(false);
</script>

<style scoped></style>
