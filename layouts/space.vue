<template>
  <div class="relative bg-slate-700">
    <header
      class="flex justify-center items-center gap-10 absolute top-5 left-0 right-0 pl-8 float-right text-white uppercase text-sm font-light tracking-widest font-mono"
    >
      <div class="flex-1 flex items-center gap-4">
        <NuxtLink to="/space-tourism/home">
          <img
            src="/space-tourism/logo.svg"
            alt=""
            class="hover:cursor-pointer"
        /></NuxtLink>
        <div class="flex-grow h-[1px] bg-slate-500 z-50 ml-10"></div>
      </div>
      <ul
        class="flex-1 flex items-center justify-center gap-10 -ml-16 py-6 bg-slate-700 bg-opacity-50 backdrop-blur-lg"
      >
        <li class="group px-2">
          <NuxtLink to="/space-tourism/home">
            <div class="relative">
              <span>Home</span>
              <div
                class="h-1 w-full bg-white/90 absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block"
              ></div>
            </div>
          </NuxtLink>
        </li>
        <li class="group px-2">
          <NuxtLink to="/space-tourism/destination">
            <div class="relative">
              <span>destination</span>
              <div
                class="h-1 w-full bg-white/90 absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block"
              ></div>
            </div>
          </NuxtLink>
        </li>
        <li class="group px-2">
          <NuxtLink to="/space-tourism/crew">
            <div class="relative">
              <span>crew</span>
              <div
                class="h-1 w-full bg-white/90 absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block"
              ></div>
            </div>
          </NuxtLink>
        </li>
        <li class="group px-2">
          <NuxtLink to="/space-tourism/technology">
            <div class="relative">
              <span>technology</span>
              <div
                class="h-1 w-full bg-white/90 absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden group-hover:block"
              ></div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.group > a.router-link-active > div > div {
  display: block;
}
</style>
