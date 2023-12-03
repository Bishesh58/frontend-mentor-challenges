<template>
  <div class="relative bg-white text-gray-600 min-h-screen">
    <header class="border-b border py-6 text-[#68707D] font-light">
      <div class="flex justify-between max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
        <div class="flex items-center gap-16">
          <img src="/ecommerce/logo.svg" alt="" />
          <ul class="items-center gap-10 flex-grow hidden md:flex capitalize">
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="/men/"> collections </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="/women/"> men </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="/collections/"> women </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="/about/"> about </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="/contact/"> contact </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <div class="relative hover:cursor-pointer">
            <Icon
              name="material-symbols:shopping-cart-outline-rounded"
              size="32px"
            />
            <span
              class="absolute -top-[30%] left-[60%] p-1 min-w-[24px] bg-[#ff7d1a] grid place-items-center text-xs text-white rounded-full"
              >2</span
            >
          </div>
          <div class="h-10 w-10 rounded-full hover:cursor-pointer">
            <img src="/img/user/rizky.webp" alt="" />
          </div>
        </div>
      </div>
    </header>
    <main class="max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
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

<style scoped></style>
