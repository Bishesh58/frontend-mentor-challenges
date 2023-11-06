<template>
  <div class="font-Poppins">
    <div
      class="h-[600px] bg-[url('/img/image-hero.jpg')] bg-no-repeat bg-center bg-cover"
    >
      <div class="max-w-7xl mx-auto text-white">
        <header class="flex justify-between items-center px-4 py-6">
          <img src="/svg/logo-loopstudios.svg" alt="" />
          <nav class="space-x-4 hidden md:flex">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Supports</a>
          </nav>
        </header>
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
            class="text-3xl font-light uppercase tracking-wider py-3 lg:text-left text-center"
          >
            The leader in interactive VR
          </h1>
          <p class="text-sm leading-relaxed tracking-wide text-gray-500">
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
          <button class="uppercase border px-6 py-2 pt-2.5 border-black">
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

<script setup></script>

<style scoped></style>
