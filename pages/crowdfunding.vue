<template>
  <div class="bg-[#FAFAFA] font-Commissioner relative">
    <div
      class="bg-[url('/img/image-hero-mobile.jpg')] md:bg-[url('/img/image-hero-desktop.jpg')] h-80 bg-no-repeat bg-cover bg-center md:bg-bottom"
    >
      <header v-if="!isMobileMenu" class="p-4 text-white max-w-7xl mx-auto">
        <nav class="flex justify-between items-center space-x-4">
          <div class="flex-1">
            <img src="/svg/logo-crowdfunding.svg" alt="" />
          </div>
          <div class="gap-4 hidden md:flex">
            <a href="#" class="hover:underline hover:underline-offset-4"
              >About</a
            >
            <a href="#" class="hover:underline hover:underline-offset-4"
              >Discover</a
            >
            <a href="#" class="hover:underline hover:underline-offset-4"
              >Get started</a
            >
          </div>
          <div class="md:hidden" @click="isMobileMenu = true">
            <Icon name="ic:round-menu" size="32px" />
          </div>
        </nav>
      </header>
    </div>
    <div class="max-w-screen-xl mx-auto">
      <main
        class="max-w-[620px] mx-4 md:mx-auto min-h-screen -mt-16 flex flex-col gap-4"
      >
        <div class="bg-white rounded-md p-8 text-center">
          <div class="w-full py-2 flex justify-center items-center -mt-16">
            <img src="/svg/logo-mastercraft.svg" alt="" class="h-10 w-10" />
          </div>
          <h1 class="py-2 font-bold text-xl">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p class="text-sm text-gray-400 py-1">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div class="flex justify-between items-center max-md:gap-4 pt-8 pb-4">
            <button
              class="rounded-full max-md:flex-1 px-4 py-2.5 bg-[#3CB4AC] hover:bg-[#147B74] text-white text-sm"
            >
              Back this project
            </button>

            <button class="flex group text-sm" @click="toggleBookmark">
              <span
                class="h-10 w-10 rounded-full flex justify-center items-center -mr-4 bg-gray-900 group-hover:bg-gray-500 z-10"
                :class="isBookmarked ? ' bg-[#147B74]' : ''"
                ><Icon
                  name="mdi:bookmark"
                  :class="isBookmarked ? 'text-white' : 'text-gray-300'"
              /></span>
              <span
                class="max-md:hidden rounded-r-full bg-slate-100 px-4 py-2.5 pl-6"
                :class="{
                  'text-[#147B74] hover:text-[#147B74] font-semibold':
                    isBookmarked,
                }"
                >{{ isBookmarked ? "Bookmarked" : " Bookmark" }}</span
              >
            </button>
          </div>
        </div>

        <div class="bg-white rounded-md p-8">
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-4 text-center"
          >
            <div class="flex-1">
              <p class="font-bold text-2xl">$89,914</p>
              <p class="text-sm text-gray-400 pt-1">of $100,000 backed</p>
            </div>
            <div class="flex-1 max-md:border-y md:border-x py-4">
              <p class="font-bold text-2xl">5,007</p>
              <p class="text-sm text-gray-400 pt-1">total backers</p>
            </div>
            <div class="flex-1">
              <p class="font-bold text-2xl">56</p>
              <p class="text-sm text-gray-400 pt-1">days left</p>
            </div>
          </div>
          <div class="h-2.5 w-full bg-gray-100 rounded-full mt-6">
            <div class="h-2.5 w-[70%] bg-[#3CB4AC] rounded-full"></div>
          </div>
        </div>
        <div class="bg-white rounded-md p-8">
          <h2 class="py-4 md:py-8 font-bold">About this project</h2>

          <p class="text-sm text-gray-400 leading-relaxed">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>

          <p class="text-sm text-gray-400 leading-relaxed py-4 md:py-6">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <div class="p-6 rounded-md border mb-6">
            <div class="md:flex justify-between items-center">
              <h2 class="font-bold">Bamboo Stand</h2>
              <p class="text-xs text-[#3CB4AC] py-1">Pledge $25 or more</p>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed py-4">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-between">
              <p class="font-bold text-2xl">
                101
                <span class="text-xs font-normal text-gray-400 px-1">left</span>
              </p>
              <button
                class="rounded-full px-4 py-2 bg-[#3CB4AC] hover:bg-[#147B74] text-white text-sm"
                @click="isModalSuccesss = true"
              >
                Select Reward
              </button>
            </div>
          </div>

          <div class="p-6 rounded-md border mb-6">
            <div class="md:flex justify-between items-center">
              <h2 class="font-bold">Black Edition Stand</h2>
              <p class="text-xs text-[#3CB4AC] py-1">Pledge $75 or more</p>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed py-4">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-between">
              <p class="font-bold text-2xl">
                64
                <span class="text-xs font-normal text-gray-400 px-1">left</span>
              </p>
              <button
                class="rounded-full px-4 py-2 bg-[#3CB4AC] hover:bg-[#147B74] text-white text-sm"
                @click="isModalSuccesss = true"
              >
                Select Reward
              </button>
            </div>
          </div>

          <div class="p-6 rounded-md border mb-6 opacity-50">
            <div class="md:flex justify-between items-center">
              <h2 class="font-bold">Mahogany Special Edition</h2>
              <p class="text-xs text-[#3CB4AC] py-1">Pledge $200 or more</p>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed py-4">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-between">
              <p class="font-bold text-2xl">
                0
                <span class="text-xs font-normal text-gray-400 px-1">left</span>
              </p>
              <button
                class="rounded-full px-4 py-2 bg-gray-400 text-white text-sm"
              >
                Out of stock
              </button>
            </div>
          </div>

          <!-- Selected pledge start -->
          <div>Enter your pledge $25 Continue</div>

          <!-- Selected pledge start -->
          <div>Enter your pledge $75 Continue</div>
          <!-- Selected pledge end -->

          <!-- Selected pledge  start -->
          <div>Enter your pledge $200 Continue</div>
          <!-- Selected pledge end -->

          <!-- Selection modal end -->
        </div>
      </main>
    </div>
    <!-- mobile menu -->
    <div
      v-if="isMobileMenu"
      class="hidden absolute top-0 left-0 right-0 bottom-0 z-50 bg-black/50 max-md:block text-sm"
    >
      <header class="p-4 text-white">
        <nav class="flex justify-between items-center space-x-4">
          <div class="flex-1">
            <img src="/svg/logo-crowdfunding.svg" alt="" />
          </div>
          <div @click="isMobileMenu = false">
            <Icon name="ic:round-close" size="32px" />
          </div>
        </nav>
      </header>
      <div class="flex flex-col bg-white m-4 rounded-md">
        <a href="#" class="py-2.5 px-4 hover:font-semibold">About</a>
        <a href="#" class="py-2.5 px-4 hover:font-semibold border-y"
          >Discover</a
        >
        <a href="#" class="py-2.5 px-4 hover:font-semibold">Get started</a>
      </div>
    </div>
    <!-- Success modal start -->
    <div
      v-if="isModalSuccesss"
      class="absolute -top-40 left-0 right-0 bottom-0 z-50 bg-black/50 text-sm flex justify-center items-center"
    >
      <div
        class="p-10 m-6 max-w-md rounded-md bg-white text-center flex flex-col justify-center items-center gap-4 shadow-md"
      >
        <div
          class="h-16 w-16 rounded-full flex justify-center items-center text-white bg-[#3CB4AC]"
        >
          <Icon name="mdi:check" size="32px" />
        </div>
        <h2 class="pt-4 font-bold text-base">Thanks for your support!</h2>
        <p class="text-xs text-gray-400 leading-relaxed">
          Thanks for your support! Your pledge brings us one step closer to
          sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
          email once our campaign is completed.
        </p>
        <button
          class="rounded-full px-8 py-2 bg-[#3CB4AC] hover:bg-[#147B74] text-white w-fit"
          @click="isModalSuccesss = false"
        >
          got it!
        </button>
      </div>
    </div>
    <!-- Success modal end -->
    <div
      class="absolute -top-40 left-0 right-0 bottom-0 z-50 bg-black/50 text-sm flex justify-center items-center"
    >
      <div
        class="p-10 m-6 max-w-2xl rounded-md bg-white flex flex-col justify-center items-center gap-4 shadow-md"
      >
        <div class="flex justify-between w-full">
          <h2 class="font-semibold text-xl">Back this project</h2>
          <Icon name="mdi:close" size="16px" />
        </div>
        <p class="text-sm text-gray-400 w-full text-left">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div class="border rounded-md">
          <div class="p-6">
            <div class="flex items-center relative">
              <div class="self-start">
                <div
                  class="h-6 w-6 border rounded-full flex justify-center items-center"
                >
                  <div class="h-3.5 w-3.5 bg-[#3CB4AC] rounded-full"></div>
                </div>
              </div>
              <div class="text-left px-6">
                <h2 class="font-semibold text-sm">
                  Bamboo Stand
                  <span class="text-[#3CB4AC] text-sm px-2"
                    >Pledge $25 or more</span
                  >
                </h2>
                <p class="text-sm text-gray-400 leading-relaxed py-4">
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>
              </div>
              <p
                class="absolute max-md:left-0 max-md:bottom-0 md:top-0 md:right-0 font-bold"
              >
                101
                <span class="text-xs text-gray-400 font-normal px-1">left</span>
              </p>
            </div>
          </div>

          <hr />
          <div class="flex justify-between p-6">
            <p class="text-gray-400">Enter your pledge</p>
            <div class="flex justify-between gap-4">
              <div class="px-4 py-2 rounded-full border w-18">
                <span class="px-1 text-gray-400">$</span>
                <input
                  type="text"
                  placeholder="25"
                  class="inline-block w-6 outline-none placeholder:text-black font-bold"
                />
              </div>
              <button
                class="rounded-full px-4 py-2 bg-[#3CB4AC] hover:bg-[#147B74] text-white text-sm"
              >
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isBookmarked = ref(false);
const isMobileMenu = ref(false);
const isModalSuccesss = ref(false);

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value;
};
</script>

<style scoped></style>
