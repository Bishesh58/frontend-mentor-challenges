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
              <NuxtLink to="ecommerce-product"> collections </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="ecommerce-product"> men </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="ecommerce-product"> women </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="ecommerce-product"> about </NuxtLink>
            </li>
            <li
              class="relative hover:text-black hover:cursor-pointer tracking-wide hover:after:content-[''] hover:after:border-b-2 hover:after:border-b-[#ff7d1a] hover:after:absolute hover:after:top-[55px] hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:after:duration-150 hover:after:transition-all"
            >
              <NuxtLink to="ecommerce-product"> contact </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <div
            class="relative hover:cursor-pointer hover:text-black"
            @click="showCart"
          >
            <Icon
              name="material-symbols:shopping-cart-outline-rounded"
              size="32px"
            />
            <span
              v-if="store.cart.length > 0"
              class="absolute -top-[30%] left-[60%] p-1 min-w-[24px] bg-[#ff7d1a] grid place-items-center text-xs text-white rounded-full"
              >{{ store.cart.length }}</span
            >
          </div>
          <div
            class="h-10 w-10 rounded-full hover:cursor-pointer hover:border hover:border-red-500"
          >
            <img src="/img/user/rizky.webp" alt="" />
          </div>
        </div>
      </div>
    </header>
    <main class="max-w-7xl mx-auto md:py-6 lg:py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Swiper
            :modules="[
              SwiperAutoplay,
              SwiperEffectCreative,
              SwiperThumbs,
              SwiperNavigation,
            ]"
            :slides-per-view="1"
            :loop="true"
            :navigation="{
              prevEl: prevButtonRef,
              nextEl: nextButtonRef,
            }"
            :effect="'creative'"
            :thumbs="{ swiper: thumbsSwiper }"
            :autoplay="{
              delay: 5000,
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
            class="md:w-[450px] h-[320px] md:h-[450px] md:rounded-xl"
          >
            <SwiperSlide
              v-for="(image, index) in store.products[0].images"
              :key="index"
            >
              <img
                :src="image"
                alt=""
                class="md:rounded-xl hover:cursor-pointer"
                @click="openLightBox"
              />
            </SwiperSlide>
          </Swiper>
          <!-- Custom Navigation Buttons -->
          <button
            ref="prevButtonRef"
            class="md:hidden absolute z-40 left-4 top-60 bg-white text-gray-700 hover:text-[#ff7d1a] h-10 w-10 rounded-full grid place-items-center"
          >
            <Icon name="ion:chevron-left" size="18px" />
          </button>
          <button
            ref="nextButtonRef"
            class="md:hidden absolute z-40 right-4 top-60 bg-white text-gray-700 hover:text-[#ff7d1a] h-10 w-10 rounded-full grid place-items-center"
          >
            <Icon name="ion:chevron-right" size="18px" />
          </button>
          <Swiper
            :modules="[SwiperThumbs]"
            :slides-per-view="4"
            :loop="true"
            :free-mode="true"
            :space-between="20"
            :watchSlidesVisibility="true"
            :watchSlidesProgress="true"
            class="mt-6 w-[450px] h-24 !hidden sm:!block"
            @swiper="setThumbsSwiper"
          >
            <SwiperSlide
              v-for="(image, index) in store.products[0].images"
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
        <div class="flex flex-col py-8 p-4 md:p-10 lg:p-12">
          <p
            class="text-[#ff7d1a] uppercase tracking-wider text-sm md:text-base"
          >
            {{ store.products[0].brand }}
          </p>
          <h1 class="text-gray-800 text-xl md:text-3xl lg:text-4xl pt-4">
            {{ store.products[0].title }}
          </h1>
          <p
            class="text-gray-500 py-4 sm:py-6 md:py-8 tracking-wider font-light text-xs md:text-sm lg:text-base"
          >
            {{ store.products[0].description }}
          </p>
          <div class="max-sm:flex justify-between">
            <div class="flex items-center">
              <span class="font-bold text-xl md:text-2xl text-gray-800">
                ${{ store.products[0].price }}</span
              >
              <span
                class="mx-4 text-xs md:text-sm font-semibold text-[#ff7d1a] px-2 py-1 rounded-md bg-[#ff7d1a28]"
              >
                {{ store.products[0].discount }}%</span
              >
            </div>
            <p class="line-through text-gray-400 py-2">$250.00</p>
          </div>
          <div class="flex-col flex sm:flex-row items-center gap-4 py-4">
            <div
              class="bg-slate-100 rounded-md flex gap-2 justify-between items-center w-fit max-sm:w-full text-[#ff7d1a]"
            >
              <Icon
                name="mdi:minus"
                size="24px"
                class="w-10 hover:cursor-pointer"
                @click="QtyDecrement"
              />
              <p class="text-black py-2.5 px-2 font-bold min-w-[40px]">
                {{ quantity }}
              </p>
              <Icon
                name="mdi:add"
                size="24px"
                class="w-10 hover:cursor-pointer"
                @click="QtyIncrement"
              />
            </div>
            <button
              class="px-8 py-2.5 bg-[#ff7d1a] text-white rounded-md hover:shadow-lg hover:bg-opacity-70 max-sm:w-full"
              @click="addToCart(12345)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <ProductLightBox
    :productImages="store.products[0].images"
    :isLightBox="isLightBox"
    @close="closeLightBox"
    class="hidden md:block"
  />
  <Cart v-if="isCartOpen" @close="hideCart" />
</template>

<script setup>
import { useProductStore } from "@/stores/product";
import { useToast, POSITION } from "vue-toastification";

useHead({
  title: "Frontend Mentor | E-commerce product page",
});

const store = useProductStore();
const toast = useToast();

const prevButtonRef = ref(null);
const nextButtonRef = ref(null);


const isLightBox = ref(false);
const isCartOpen = ref(false);
const quantity = ref(1);

const openLightBox = () => {
  isLightBox.value = true;
};

const closeLightBox = () => {
  isLightBox.value = false;
  console.log("listened..");
};

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const showCart = () => {
  if (!store.cart.length > 0) {
    toast.info("Your cart is currently empty.", {
      position: POSITION.BOTTOM_RIGHT,
    });
    return;
  }
  isCartOpen.value = true;
};

const hideCart = () => {
  isCartOpen.value = false;
};

const QtyIncrement = () => {
  quantity.value += 1;
};

const QtyDecrement = () => {
  quantity.value -= 1;
};

const addToCart = (id) => {
  store.addToCart(id, quantity.value);
  //success
  toast.success("1 Item added to cart!", {
    position: POSITION.BOTTOM_RIGHT,
  });
  quantity.value = 1;
};

watch(quantity, (newVal, oldVal) => {
  if (newVal < 1) {
    quantity.value = 1;
    toast.warning("minimum 1 item required!", {
      position: POSITION.BOTTOM_RIGHT,
    });
  }
  if (newVal > 10) {
    quantity.value = 10;
    toast.warning("maximum 10 item allowed!", {
      position: POSITION.BOTTOM_RIGHT,
    });
  }
});
</script>

<style scoped>
.swiper-slide-thumb-active {
  border: 2px solid #ff6f00;
  opacity: 50%;
  border-radius: 8px;
}
</style>
