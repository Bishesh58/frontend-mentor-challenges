<template>
  <div v-if="isLightBox" class="absolute inset-0 bg-black/80 min-h-screen z-20">
    <main class="max-w-7xl mx-auto p-20 flex items-center justify-center">
      <div class="relative">
        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperEffectCreative,
            SwiperThumbs,
            SwiperNavigation,
          ]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :thumbs="{ swiper: thumbsSwiper }"
          :navigation="{
            prevEl: customPrevButtonRef,
            nextEl: customNextButtonRef,
          }"
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
          class="w-[600px] h-[450px] rounded-xl"
        >
          <SwiperSlide v-for="(image, index) in productImages" :key="index">
            <img :src="image" alt="" class="rounded-xl" />
          </SwiperSlide>
        </Swiper>
        <!-- Custom Navigation Buttons -->
        <button
          ref="customPrevButtonRef"
          class="absolute z-40 -left-4 top-[35%] bg-white text-gray-700 hover:text-[#ff7d1a] h-10 w-10 rounded-full grid place-items-center"
        >
          <Icon name="ion:chevron-left" size="18px" />
        </button>
        <button
          ref="customNextButtonRef"
          class="absolute z-40 -right-4 top-[35%] bg-white text-gray-700 hover:text-[#ff7d1a] h-10 w-10 rounded-full grid place-items-center"
        >
          <Icon name="ion:chevron-right" size="18px" />
        </button>
        <button
          @click="close"
          class="absolute z-40 -top-12 -right-4 text-white hover:text-[#ff7d1a] h-10 w-10 rounded-full grid place-items-center"
        >
          <Icon name="ion:close" size="32px" />
        </button>

        <Swiper
          :modules="[SwiperThumbs, SwiperNavigation]"
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
    </main>
  </div>
</template>

<script setup>
defineProps(["productImages", "isLightBox"]);
const emit = defineEmits(["close"]);
const customPrevButtonRef = ref(null);
const customNextButtonRef = ref(null);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const close = () => {
  emit("close");
  thumbsSwiper.value = null;
};
</script>

<style scoped>
.swiper-slide-thumb-active {
  border: 2px solid #ff6f00;
  opacity: 50%;
  border-radius: 8px;
}
</style>
