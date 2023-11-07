<template>
  <div class="font-Karla relative">
    <!-- header -->
    <header
      class="max-w-screen-xl mx-auto flex justify-between items-center p-5"
    >
      <img src="/insure/logo.svg" alt="logo" />

      <nav class="items-center gap-4 hidden md:flex">
        <a
          href="#"
          class="text-[#837D87] hover:text-[#2D2640] uppercase text-sm font-semibold tracking-widest"
          >How we work</a
        >
        <a
          href="#"
          class="text-[#837D87] hover:text-[#2D2640] uppercase text-sm font-semibold tracking-widest"
          >Blog</a
        >
        <a
          href="#"
          class="text-[#837D87] hover:text-[#2D2640] uppercase text-sm font-semibold tracking-widest"
          >Account</a
        >
        <button
          class="text-[#2D2640] border-[#2B272F] hover:bg-[#2B272F] hover:text-white uppercase text-sm font-semibold tracking-widest px-6 py-2 border-2"
        >
          View plans
        </button>
      </nav>
      <!-- mobile -->
      <img
        v-if="!isMobileMenu"
        src="/insure/icon-hamburger.svg"
        alt="logo"
        class="md:hidden hover:cursor-pointer"
        @click="toggleMobileMenu"
      />
      <img
        v-else
        src="/insure/icon-close.svg"
        alt="logo"
        class="md:hidden hover:cursor-pointer"
        @click="toggleMobileMenu"
      />
    </header>
    <!-- mobile menu overlay -->
    <div
      v-if="isMobileMenu"
      class="absolute top-[70px] left-0 right-0 bottom-0 bg-[#2B282F] z-50 md:hidden"
    >
      <nav
        class="flex flex-col items-center justify-center gap-9 py-16 text-white"
      >
        <a
          href="#"
          class="hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest"
          >How we work</a
        >
        <a
          href="#"
          class="hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest"
          >Blog</a
        >
        <a
          href="#"
          class="hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest"
          >Account</a
        >
        <button
          class="border-white hover:bg-white hover:text-[#2D2640] uppercase text-sm font-semibold tracking-widest px-6 py-2 border-2 w-fit"
        >
          View plans
        </button>
      </nav>
    </div>
    <!-- hero -->
    <div
      class="h-[400px] bg-[url('/insure/image-intro-desktop.jpg')] bg-no-repeat bg-cover bg-center lg:hidden"
    ></div>
    <div class="h-[600px] bg-[#2C2640] text-white p-8 md:p-12 lg:p-16 relative">
      <div class="max-w-7xl mx-auto p-5 flex justify-between gap-4">
        <div class="flex flex-col max-md:items-center max-md:justify-center">
          <div class="w-32 border-b hidden md:block"></div>
          <h1
            class="pt-10 font-serif text-5xl md:text-6xl max-md:text-center lg:text-7xl leading-[0.9]"
          >
            Humanizing your insurance.
          </h1>
          <p class="py-10 tracking-wider max-md:text-center font-light">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button
            class="text-white border-white hover:bg-white hover:text-[#2D2640] uppercase text-sm font-semibold tracking-widest px-6 py-2 border-2 w-fit"
          >
            View plans
          </button>
        </div>
        <img
          src="/insure/image-intro-desktop.jpg"
          alt=""
          class="max-lg:hidden"
        />
      </div>
      <img
        src="/insure/bg-pattern-intro-left-mobile.svg"
        alt=""
        class="absolute top-0 left-0 md:hidden"
      />
      <img
        src="/insure/bg-pattern-intro-left-desktop.svg"
        alt=""
        class="absolute -bottom-80 left-0 max-md:hidden"
      />
      <img
        src="/insure/bg-pattern-intro-right-mobile.svg"
        alt=""
        class="absolute -bottom-40 right-0 md:hidden"
      />
      <img
        src="/insure/bg-pattern-intro-right-desktop.svg"
        alt=""
        class="absolute top-0 right-0 max-md:hidden"
      />
    </div>
    <!-- features -->
    <main class="max-w-7xl mx-auto mt-8 md:mt-20 py-8 md:py-10 lg:py-20">
      <section>
        <div class="flex flex-col max-md:items-center max-md:justify-center p-8">
          <div class="w-32 max-lg:self-center border-b border-[#dbd0e2]"></div>
          <h1
            class="py-10 max-lg:self-center font-serif text-5xl leading-[0.8]"
          >
            We're different
          </h1>
          <div
            class="flex flex-col md:flex-row max-md:items-center max-md:justify-center justify-between gap-8 py-4"
          >
            <div class="flex flex-col items-center md:items-start">
              <img
                src="/insure/icon-snappy-process.svg"
                alt=""
                class="h-[64px]"
              />

              <h2 class="text-[#2B272F] text-2xl font-semibold pt-6 pb-2">
                Snappy Process
              </h2>
              <p class="text-gray-400 max-md:text-center">
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
            <div class="flex flex-col items-center md:items-start">
              <img
                src="/insure/icon-affordable-prices.svg"
                alt=""
                class="h-[64px]"
              />

              <h2 class="text-[#2B272F] text-2xl font-semibold pt-6 pb-2">
                Affordable Prices
              </h2>
              <p class="text-gray-400 max-md:text-center">
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div class="flex flex-col items-center md:items-start">
              <img
                src="/insure/icon-people-first.svg"
                alt=""
                class="h-[64px]"
              />

              <h2 class="text-[#2B272F] text-2xl font-semibold pt-6 pb-2">
                People First
              </h2>
              <p class="text-gray-400 max-md:text-center">
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          class="bg-[#2C2640] text-white flex flex-col gap-8 md:flex-row justify-between items-center p-8 md:p-16 md:my-20 relative overflow-hidden"
        >
          <h1
            class="font-serif text-3xl md:text-4xl lg:text-5xl flex-1 max-md:text-center"
          >
            Find out more about how we work
          </h1>
          <div class="flex-1 flex justify-end z-20">
            <button
              class="text-white border-white hover:bg-white hover:text-[#2D2640] uppercase text-sm font-semibold tracking-widest px-6 py-2 border-2"
            >
              View plans
            </button>
          </div>
          <img
            src="/insure/bg-pattern-how-we-work-mobile.svg"
            alt=""
            class="absolute top-0 right-0 z-10 md:hidden"
          />
          <img
            src="/insure/bg-pattern-how-we-work-desktop.svg"
            alt=""
            class="absolute top-0 right-0 z-10 hidden md:block"
          />
        </div>
      </section>
    </main>
    <!-- footer -->
    <div
      class="bg-slate-100 bg-[url('/insure/bg-pattern-footer-mobile.svg')] md:bg-[url('/insure/bg-pattern-footer-desktop.svg')] bg-no-repeat bg-left-top"
    >
      <div class="max-w-7xl p-5 max-md:pt-16 mx-auto">
        <div
          class="pt-8 pb-4 flex flex-col gap-6 md:flex md:flex-row justify-between items-center"
        >
          <img src="/insure/logo.svg" alt="logo" class="" />
          <div class="flex items-center justify-center gap-2 md:gap-4">
            <Icon
              name="mdi:facebook"
              size="28px"
              class="text-gray-400 hover:text-[#2B272F] hover:cursor-pointer"
            />
            <Icon
              name="mdi:twitter"
              size="28px"
              class="text-gray-400 hover:text-[#2B272F] hover:cursor-pointer"
            />
            <Icon
              name="mdi:pinterest"
              size="28px"
              class="text-gray-400 hover:text-[#2B272F] hover:cursor-pointer"
            />
            <Icon
              name="mdi:instagram"
              size="28px"
              class="text-gray-400 hover:text-[#2B272F] hover:cursor-pointer"
            />
          </div>
        </div>
        <hr />
        <div
          class="py-8 flex flex-col md:flex-row items-center justify-between max-md:text-center gap-4"
        >
          <div>
            <p
              class="text-[#837D87] uppercase text-sm font-semibold tracking-widest py-4"
            >
              Our Company
            </p>
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >How we work</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Why Insure ?</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >View Plans</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Reviews</a
            >
          </div>
          <div>
            <p
              class="text-[#837D87] uppercase text-sm font-semibold tracking-widest py-4"
            >
              Help me
            </p>
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >FAQ</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Terms of use</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >cookies</a
            >
          </div>
          <div>
            <p
              class="text-[#837D87] uppercase text-sm font-semibold tracking-widest py-4"
            >
              Contact
            </p>
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Sales</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >support</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Live chat</a
            >
          </div>
          <div>
            <p
              class="text-[#837D87] uppercase text-sm font-semibold tracking-widest py-4"
            >
              Others
            </p>
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Careers</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Press</a
            >
            <a
              href="#"
              class="text-[#2D2640] hover:underline hover:underline-offset-4 uppercase text-sm font-semibold tracking-widest py-2 block"
              >Licenses</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Frontend Mentor | Insure landing page",
});

const isMobileMenu = ref(false);

const toggleMobileMenu = () => {
  isMobileMenu.value = !isMobileMenu.value;
};
</script>

<style scoped></style>
