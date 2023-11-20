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
        <div
          class="flex-grow h-[1px] bg-slate-500 z-50 ml-10 hidden md:block"
        ></div>
      </div>
      <ul
        class="flex-1 items-center justify-center gap-10 -ml-16 py-6 bg-slate-700 bg-opacity-50 backdrop-blur-lg hidden md:flex"
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
      <!-- mobile menu -->
      <div class="pr-6 md:hidden" @click="toggleMobileMenu">
        <Icon name="ci:hamburger" size="32px" class="hover:cursor-pointer" />
      </div>
      <!-- mobile menu overlay -->
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="closeMobileMenu"
      ></div>
      <ul
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 bottom-0 z-50 flex flex-col gap-6 p-6 py-8 bg-gray-100 text-gray-800 md:hidden animate-fade-left animate-delay-75"
      >
        <Icon
          name="ci:close-big"
          size="32px"
          class="hover:cursor-pointer self-end"
          @click="closeMobileMenu"
        />

        <li class="group px-2">
          <NuxtLink to="/space-tourism/home" @click="closeMobileMenu">
            Home
          </NuxtLink>
        </li>
        <li class="group px-2">
          <NuxtLink to="/space-tourism/destination" @click="closeMobileMenu">
            Destination
          </NuxtLink>
        </li>
        <li class="group px-2">
          <NuxtLink to="/space-tourism/crew" @click="closeMobileMenu">
            Crew
          </NuxtLink>
        </li>
        <li class="group px-2">
          <NuxtLink to="/space-tourism/technology" @click="closeMobileMenu">
            Technology
          </NuxtLink>
        </li>
      </ul>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.group > a.router-link-active > div > div {
  display: block;
}
</style>
