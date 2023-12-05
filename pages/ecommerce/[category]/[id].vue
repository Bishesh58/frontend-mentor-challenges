<template>
  <div>
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
      @swiper="onMainSwiperInit"
    >
      <SwiperSlide v-for="(image, index) in productImages" :key="index">
        <img :src="image" alt="" />
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
          :class="{ 'active-thumb': thumbActiveIndex === index }"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
