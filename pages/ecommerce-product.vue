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
      <div>
        <div class="w-[50%]">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperThumbs]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
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
            class="w-[450px] h-[450px]"
            @swiper="onMainSwiperInit"
          >
            <SwiperSlide v-for="(image, index) in productImages" :key="index">
              <img :src="image" alt="" class="h-96" />
            </SwiperSlide>
            <template #pagination>
              <SwiperPagination />
            </template>
          </Swiper>
          <Swiper
            :modules="[SwiperThumbs]"
            :slides-per-view="3"
            :space-between="10"
            :free-mode="true"
            :watchSlidesVisibility="true"
            :watchSlidesProgress="true"
            style="margin-top: 20px"
          >
            <SwiperSlide
              v-for="(image, index) in productImages"
              :key="index"
              class="border-red-400 rounded-lg"
            >
              <img
                :src="image"
                alt=""
                @click="handleThumbClick(index)"
                class="h-40"
                :class="{ 'active-thumb': thumbActiveIndex === index }"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="inline">
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
]);

const thumbActiveIndex = ref(0);

let mainSwiper = null;

const onMainSwiperInit = (swiper) => {
  mainSwiper = swiper;
};

const handleThumbClick = (index) => {
  thumbActiveIndex.value = index;
  if (mainSwiper) {
    mainSwiper.slideTo(index);
  }
};
</script>

<style scoped>
.active-thumb {
  border: 2px solid blue; /* Add a border or any visual indicator for the active thumbnail */
  opacity: 0.5;
  border-radius: 24px;
}
</style>
