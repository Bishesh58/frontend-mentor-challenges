<template>
  <div class="bg-[#FAFAFA] text-black font-Lato relative">
    <!-- header -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <header
          class="flex items-center justify-between bg-white h-20 max-md:h-12 relative z-40"
        >
          <img src="/easybank/logo.svg" alt="" class="max-md:h-4" />
          <nav
            class="hidden md:flex items-center justify-center flex-1 text-gray-400 h-full"
          >
            <a
              href="#"
              class="p-4 h-full hover:text-gray-900 relative flex items-center justify-center group"
            >
              <span>Home</span>
              <div
                class="h-1 w-[70%] bg-[#31D35C] absolute bottom-0 left-1/2 transform -translate-x-1/2 group-hover:block hidden"
              ></div>
            </a>

            <a
              href="#"
              class="p-4 h-full hover:text-gray-900 relative flex items-center justify-center group"
            >
              <span>About</span>
              <div
                class="h-1 w-[70%] bg-[#31D35C] absolute bottom-0 left-1/2 transform -translate-x-1/2 group-hover:block hidden"
              ></div>
            </a>
            <a
              href="#"
              class="p-4 h-full hover:text-gray-900 relative flex items-center justify-center group"
            >
              <span>Contact</span>
              <div
                class="h-1 w-[70%] bg-[#31D35C] absolute bottom-0 left-1/2 transform -translate-x-1/2 group-hover:block hidden"
              ></div>
            </a>
            <a
              href="#"
              class="p-4 h-full hover:text-gray-900 relative flex items-center justify-center group"
            >
              <span>Contact</span>
              <div
                class="h-1 w-[70%] bg-[#31D35C] absolute bottom-0 left-1/2 transform -translate-x-1/2 group-hover:block hidden"
              ></div>
            </a>
            <a
              href="#"
              class="p-4 h-full hover:text-gray-900 relative flex items-center justify-center group"
            >
              <span>Career</span>
              <div
                class="h-1 w-[70%] bg-[#31D35C] absolute bottom-0 left-1/2 transform -translate-x-1/2 group-hover:block hidden"
              ></div>
            </a>
          </nav>
          <button
            class="hidden md:block py-2 px-6 bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] hover:bg-gradient-to-r hover:from-[#2BB7DA] hover:to-[#31D35C] hover:text-opacity-70 text-white rounded-full hover:cursor-pointer"
          >
            Request Invite
          </button>
          <img
            :src="
              isMobileMenu
                ? '/easybank/icon-close.svg'
                : '/easybank/icon-hamburger.svg'
            "
            alt=""
            class="md:hidden"
            @click="toggleMobileMenu"
          />
        </header>
      </div>
    </div>

    <!-- hero -->
    <div
      class="flex justify-between max-md:flex-col-reverse max-md:pt-0 max-w-7xl mx-auto p-8 h-[700px] max-md:h-[600px]"
    >
      <div
        class="flex-1 py-6 md:py-20 max-w-md flex flex-col max-md:items-center"
      >
        <h1 class="text-4xl max-md:text-center md:text-5xl">
          Next generation digital banking
        </h1>
        <p class="text-gray-400 py-6 max-md:text-center">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button
          class="w-fit py-2 px-6 bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] hover:bg-gradient-to-r hover:from-[#2BB7DA] hover:to-[#31D35C] hover:text-opacity-70 text-white rounded-full hover:cursor-pointer"
        >
          Request Invite
        </button>
      </div>
      <div class="flex-1 relative max-lg:overflow-hidden">
        <img
          src="/easybank/bg-intro-desktop.svg"
          alt=""
          class="absolute -top-24 md:-top-36 transform max-md:scale-150"
        />
        <img
          src="/easybank/image-mockups.png"
          alt=""
          class="absolute -top-20 md:-top-44 md:-right-16 z-20 max-md:h-[350px] max-md:transform max-md:left-1/2 max-md:-translate-x-1/2"
        />
      </div>
    </div>

    <!-- main -->
    <section class="bg-[#F3F4F6] relative z-10 md:-mt-24">
      <div class="max-w-7xl mx-auto px-8 py-20">
        <h1 class="text-3xl md:text-4xl max-md:text-center">
          Why choose Easybank?
        </h1>
        <p class="text-gray-400 py-6 max-w-lg max-md:text-center">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div class="py-8 flex max-md:flex-col items-center gap-10">
          <div class="max-md:flex max-md:flex-col max-md: items-center">
            <img src="/easybank/icon-online.svg" alt="online" />
            <h2 class="text-xl pt-6 pb-4">Online Banking</h2>
            <p class="text-gray-400 max-md:text-center">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div class="max-md:flex max-md:flex-col max-md: items-center">
            <img src="/easybank/icon-budgeting.svg" alt="budgeting" />
            <h2 class="text-xl pt-6 pb-4">Online Banking</h2>
            <p class="text-gray-400 max-md:text-center">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div class="max-md:flex max-md:flex-col max-md: items-center">
            <img src="/easybank/icon-onboarding.svg" alt="onboarding" />
            <h2 class="text-xl pt-6 pb-4">Online Banking</h2>
            <p class="text-gray-400 max-md:text-center">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div class="max-md:flex max-md:flex-col max-md: items-center">
            <img src="/easybank/icon-api.svg" alt="api" />
            <h2 class="text-xl pt-6 pb-4">Online Banking</h2>
            <p class="text-gray-400 max-md:text-center">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-7xl mx-auto px-8 py-16">
        <h1 class="text-3xl py-8 max-md:text-center">Latest Articles</h1>
        <div class="flex max-md:flex-col items-center gap-2 justify-between">
          <div class="bg-white max-w-[280px]">
            <div class="overflow-hidden rounded-t-md">
              <img
                src="/easybank/image-currency.jpg"
                alt=""
                class="max-h-[186px] w-full hover:transform hover:scale-105 transition duration-300"
              />
            </div>
            <div class="p-6 flex flex-col gap-2">
              <p class="text-xs text-gray-400">By Claire Robinson</p>
              <h3 class="text-gray-600 leading-5">
                Receive money in any currency with no fees
              </h3>
              <p class="text-gray-400 text-sm">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </div>
          </div>
          <div class="bg-white max-w-[280px]">
            <div class="overflow-hidden rounded-t-md">
              <img
                src="/easybank/image-restaurant.jpg"
                alt=""
                class="hover:transform hover:scale-105 transition duration-300"
              />
            </div>
            <div class="p-6 flex flex-col gap-2">
              <p class="text-xs text-gray-400">By Claire Robinson</p>
              <h3 class="text-gray-600 leading-5">
                Receive money in any currency with no fees
              </h3>
              <p class="text-gray-400 text-sm">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </div>
          </div>
          <div class="bg-white max-w-[280px]">
            <div class="overflow-hidden rounded-t-md">
              <img
                src="/easybank/image-plane.jpg"
                alt=""
                class="hover:transform hover:scale-105 transition duration-300"
              />
            </div>
            <div class="p-6 flex flex-col gap-2">
              <p class="text-xs text-gray-400">By Claire Robinson</p>
              <h3 class="text-gray-600 leading-5">
                Receive money in any currency with no fees
              </h3>
              <p class="text-gray-400 text-sm">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </div>
          </div>
          <div class="bg-white max-w-[280px]">
            <div class="overflow-hidden rounded-t-md">
              <img
                src="/easybank/image-confetti.jpg"
                alt=""
                class="hover:transform hover:scale-105 transition duration-300"
              />
            </div>
            <div class="p-6 flex flex-col gap-2">
              <p class="text-xs text-gray-400">By Claire Robinson</p>
              <h3 class="text-gray-600 leading-5">
                Receive money in any currency with no fees
              </h3>
              <p class="text-gray-400 text-sm">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <div class="bg-[#2D314D]">
      <div
        class="max-w-7xl mx-auto px-8 py-16 text-white flex flex-col md:flex-row md:gap-16 lg:gap-32 max-md:items-center gap-4"
      >
        <div class="flex flex-col gap-6 justify-between max-md:items-center">
          <img src="/easybank/logo-light.svg" alt="" class="h-fit w-fit" />
          <div class="flex gap-2 items-center">
            <Icon
              name="mdi:facebook"
              size="24px"
              class="hover:text-[#31D35C]"
            />
            <Icon name="mdi:youtube" size="24px" class="hover:text-[#31D35C]" />
            <Icon name="mdi:twitter" size="24px" class="hover:text-[#31D35C]" />
            <Icon
              name="mdi:pinterest"
              size="24px"
              class="hover:text-[#31D35C]"
            />
            <Icon
              name="mdi:instagram"
              size="24px"
              class="hover:text-[#31D35C]"
            />
          </div>
        </div>
        <div class="flex flex-col max-md:items-center gap-4">
          <a href="#" class="text-gray-300">About Us</a>
          <a href="#" class="text-gray-300">Contact</a>
          <a href="#" class="text-gray-300">Blog</a>
        </div>
        <div class="flex flex-col max-md:items-center gap-4">
          <a href="#" class="text-gray-300">Careers</a>
          <a href="#" class="text-gray-300">Support</a>
          <a href="#" class="text-gray-300">Privacy Policy</a>
        </div>
        <div
          class="md:flex-1 flex flex-col gap-4 justify-between items-center md:items-end"
        >
          <button
            class="w-fit py-2 px-6 bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] hover:bg-gradient-to-r hover:from-[#2BB7DA] hover:to-[#31D35C] hover:text-opacity-70 text-white rounded-full hover:cursor-pointer"
          >
            Request Invite
          </button>
          <p class="text-gray-500">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
    <!-- Mobile overlay -->
    <div
      v-if="isMobileMenu"
      class="absolute top-12 bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <nav
        class="m-6 bg-white rounded-md flex flex-col gap-6 justify-between items-center py-8 z-50"
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </nav>
    </div>
    <div
      v-if="isMobileMenu"
      class="absolute top-12 bottom-0 left-0 right-0 bg-black opacity-70 z-40 md:hidden"
    ></div>
  </div>
</template>

<script setup>
const isMobileMenu = ref(false);

const toggleMobileMenu = () => {
  isMobileMenu.value = !isMobileMenu.value;
};
</script>

<style scoped></style>
