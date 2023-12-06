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
    <main class="max-w-7xl mx-auto p-3 md:p-6 lg:p-12">
      <div class="grid grid-cols-2">
        <div class="">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperThumbs]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :thumbs="{ swiper: thumbsSwiper }"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            class="w-[450px] h-[450px] rounded-xl"
          >
            <SwiperSlide v-for="(image, index) in productImages" :key="index">
              <img :src="image" alt="" class="rounded-xl" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            :modules="[SwiperThumbs]"
            :slides-per-view="4"
            :loop="true"
            :free-mode="true"
            :space-between="20"
            :watchSlidesVisibility="true"
            :watchSlidesProgress="true"
            class="mt-6 w-[450px] h-24"
            @swiper="setThumbsSwiper"
          >
            <SwiperSlide
              v-for="(image, index) in productImages"
              :key="index"
              class="flex justify-between"
            >
              <img
                :src="image"
                alt=""
                class="rounded-md w-full h-full hover:opacity-50 hover:cursor-pointer"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="">
          <p>sneaker company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your prefect casual wear companion.
          </p>
          <div>
            <p>125.00 <span>50%</span></p>
            <p>250.00</p>
          </div>
          <div>
            <div>icon 0 icon</div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
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

const productImages = ref([
  "/ecommerce/image-product-1.jpg",
  "/ecommerce/image-product-2.jpg",
  "/ecommerce/image-product-3.jpg",
  "/ecommerce/image-product-4.jpg",
]);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style scoped>
.swiper-slide-thumb-active {
  border: 2px solid #ff6f00;
  opacity: 50%;
  border-radius: 8px;
}
</style>
