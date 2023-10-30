<template>
  <div class="min-h-screen font-Ubuntu">
    <!-- hero section -->
    <div
      class="h-[600px] bg-[#FF525D] bg-[url('/svg/bg-pattern-intro-desktop-blogr.svg')] bg-no-repeat bg-auto bg-center rounded-bl-[100px] "
    >
      <div class="max-w-7xl mx-auto text-white">
        <!-- header -->
        <div
          class="flex gap-2 items-center max-md:justify-between text-sm  p-4 md:py-0"
        >
          <img src="/svg/logo-blogr.svg" alt="" class="pr-4 py-2 -mb-2 w-[80px] md:w-auto" />

          <!-- desktop -->
          <div class="flex-grow items-center gap-2 p-4 pl-0 hidden md:flex">
            <button
              class="px-4 py-2 opacity-60 hover:opacity-100 group relative"
            >
              Product
              <span class="group-hover:hidden"
                ><Icon name="ion:chevron-down" class="ml-1"
              /></span>
              <span class="hidden group-hover:inline-block"
                ><Icon name="ion:chevron-up" class="ml-1"
              /></span>
              <div
                class="absolute left-0 inset-8 h-fit border rounded-lg bg-white text-black px-6 py-4 min-w-[150px] shadow-lg flex-col text-left gap-2 hidden group-hover:flex hover:flex"
              >
                <p class="opacity-60 hover:opacity-100">Intuitive Editor</p>
                <p class="opacity-60 hover:opacity-100">AI Voice</p>
                <p class="opacity-60 hover:opacity-100">CMS</p>

                <p class="opacity-60 hover:opacity-100">AI powered</p>
              </div>
            </button>
            <button
              class="px-4 py-2 opacity-60 hover:opacity-100 group relative"
            >
              Company
              <span class="group-hover:hidden"
                ><Icon name="ion:chevron-down" class="ml-1"
              /></span>
              <span class="hidden group-hover:inline-block"
                ><Icon name="ion:chevron-up" class="ml-1"
              /></span>
              <div
                class="absolute left-0 inset-8 h-fit border rounded-lg bg-white text-black px-6 py-4 min-w-[120px] shadow-lg flex-col text-left gap-2 hidden group-hover:flex hover:flex"
              >
                <p class="opacity-60 hover:opacity-100">History</p>
                <p class="opacity-60 hover:opacity-100">Our Team</p>
               <p class="opacity-60 hover:opacity-100">Blog</p>
              </div>
            </button>
            <button
              class="px-4 py-2 opacity-60 hover:opacity-100 group relative"
            >
              Connect
              <span class="group-hover:hidden"
                ><Icon name="ion:chevron-down" class="ml-1"
              /></span>
              <span class="hidden group-hover:inline-block"
                ><Icon name="ion:chevron-up" class="ml-1"
              /></span>
              <div
                class="absolute left-0 inset-8 h-fit border rounded-lg bg-white text-black px-6 py-4 min-w-[120px] shadow-lg flex-col text-left gap-2 hidden group-hover:flex hover:flex"
              >
                 <p class="opacity-60 hover:opacity-100">Contact</p>
               <p class="opacity-60 hover:opacity-100">Newsletter</p>
                 <p class="opacity-60 hover:opacity-100">LinkedIn</p>
              </div>
            </button>
          </div>
          <div class="hidden gap-4 md:flex">
            <button class="px-4 py-2 opacity-60 hover:opacity-100">
              login
            </button>
            <button
              class="px-6 py-2 rounded-full bg-white text-[#FF525D] hover:bg-[#FF7B86] hover:text-white"
            >
              sign up
            </button>
          </div>
          <!-- mobile icon on/off -->
          <div @click="isSidebarOpen = true" class="md:hidden">
            <Icon v-if="!isSidebarOpen" name="ic:round-menu" size="32px" />
            <Icon
              v-else
              name="material-symbols:close-rounded"
              size="32px"
              @click="reset"
            />
          </div>
        </div>
        <!-- mobile menu -->
        <div v-if="isSidebarOpen" class="md:hidden">
          <div
            class="fixed top-0 right-0 left-0 bottom-0 z-10"
            @click="isSidebarOpen = false"
          ></div>
          <div
            class="fixed top-20 right-4 left-4 z-20 min-w-fit bg-white text-black shadow-xl animate-fade-down animate-ease-in-out animate-duration-300 rounded-md"
            :class="isSidebarOpen ? 'translate-x-0' : ''"
          >
            <div class="p-4 w-full flex flex-col items-center">
              <div class="w-full flex flex-col text-center gap-2">
                <button
                  class="px-4 py-2 opacity-60 hover:opacity-100"
                  @click="isProductToggled = !isProductToggled"
                >
                  Product
                  <span v-if="!isProductToggled"
                    ><Icon name="ion:chevron-down" class="ml-1"
                  /></span>
                  <span v-else
                    ><Icon name="ion:chevron-up" class="ml-1"
                  /></span>
                </button>
                <!-- product sub menu -->
                <div
                  v-if="isProductToggled"
                  class="h-fit bg-slate-100 p-4 w-full flex flex-col gap-3"
                >
                  <p class="opacity-60 hover:opacity-100">Intuitive Editor</p>
                  <p class="opacity-60 hover:opacity-100">AI Voice</p>
                  <p class="opacity-60 hover:opacity-100">CMS</p>

                  <p class="opacity-60 hover:opacity-100">AI powered</p>
                </div>
                <button
                  class="px-4 py-2 opacity-60 hover:opacity-100"
                  @click="isCompanyToggled = !isCompanyToggled"
                >
                  Company
                  <span v-if="!isCompanyToggled"
                    ><Icon name="ion:chevron-down" class="ml-1"
                  /></span>
                  <span v-else
                    ><Icon name="ion:chevron-up" class="ml-1"
                  /></span>
                </button>
                <!-- company sub menu -->
                <div
                  v-if="isCompanyToggled"
                  class="h-fit bg-slate-100 p-4 w-full flex flex-col gap-3"
                >
                  <p class="opacity-60 hover:opacity-100"><p>History</p></p>
                  <p class="opacity-60 hover:opacity-100">Our team</p>
                  <p class="opacity-60 hover:opacity-100">Blog</p>
                 
                </div>

                <button
                  class="px-4 py-2 opacity-60 hover:opacity-100"
                  @click="isConnectToggled = !isConnectToggled"
                >
                  Connect
                  <span v-if="!isConnectToggled"
                    ><Icon name="ion:chevron-down" class="ml-1"
                  /></span>
                  <span v-else
                    ><Icon name="ion:chevron-up" class="ml-1"
                  /></span>
                </button>
                <!-- connect sub menu -->
                <div
                  v-if="isConnectToggled"
                  class="h-fit bg-slate-100 p-4 w-full flex flex-col gap-3"
                >
                  <p class="opacity-60 hover:opacity-100">Contact</p>
                  <p class="opacity-60 hover:opacity-100">Newsletter</p>
                  <p class="opacity-60 hover:opacity-100">LinkedIn</p>

                </div>
                <div class="border-b py-2"></div>
              </div>
              <div class="flex flex-col justify-center gap-4 my-6">
                <button
                  class="px-6 py-2 opacity-60 hover:opacity-100" 
                >
                  login
                </button>
                <button
                  class="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF7B86] to-[#ff0011] opacity-60 hover:opacity-100 text-white"
                >
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- cta section -->
        <div class="h-[400px] m-8 flex flex-col gap-8 md:gap-10 justify-center items-center"> 

            <h1 class="text-3xl text-center md:text-4xl lg:text-6xl">A modern publishing platform</h1>
            <p class="text-center text-sm md:text-base">Grow your audience and build your online brand</p>
            <div class="max-md:flex max-md:flex-col flex gap-4">
           
            <button
              class="px-6 py-2 rounded-full bg-white text-[#FF525D] hover:bg-[#FF7B86] hover:text-white"
            >
              start for free
            </button>
             <button class="px-4 py-2 rounded-full border hover:bg-white hover:text-[#FF525D]">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false);
const isProductToggled = ref(false);
const isCompanyToggled = ref(false);
const isConnectToggled = ref(false);

const reset = () => {
  isSidebarOpen.value = false;
  isProductToggled.value = false;
  isCompanyToggled.value = false;
  isConnectToggled.value = false;
};
</script>

<style scoped></style>
