<template>
  <div class="min-h-screen font-Ubuntu">
    <!-- hero section -->
    <div
      class="h-[600px] bg-[#FF525D] bg-[url('/svg/bg-pattern-intro-blogr.svg')] bg-no-repeat bg-auto bg-center"
    >
      <div class="max-w-7xl mx-auto text-white">
        <!-- header -->
        <div
          class="flex gap-2 items-center max-md:justify-between text-sm p-4 md:py-0"
        >
          <img
            src="/svg/logo-blogr.svg"
            alt=""
            class="pr-4 py-2 -mb-2 w-[80px] md:w-auto"
          />

          <!-- desktop -->
          <div class="flex-grow items-center gap-2 p-4 pl-0 hidden md:flex">
            <button
              class="px-4 py-2 opacity-60 hover:opacity-100 group relative"
            >
              Product
              <span class="group-hover:hidden">
                <Icon name="ion:chevron-down" class="ml-1"
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
                  <p class="opacity-60 hover:opacity-100">History</p>
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
                <button class="px-6 py-2 opacity-60 hover:opacity-100">
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
        <div
          class="h-[400px] m-8 flex flex-col gap-8 md:gap-10 justify-center items-center"
        >
          <h1 class="text-3xl text-center md:text-4xl lg:text-6xl">
            A modern publishing platform
          </h1>
          <p class="text-center text-sm md:text-base">
            Grow your audience and build your online brand
          </p>
          <div class="max-md:flex max-md:flex-col flex gap-4">
            <button
              class="px-6 py-2 rounded-full bg-white text-[#FF525D] hover:bg-[#FF7B86] hover:text-white"
            >
              start for free
            </button>
            <button
              class="px-4 py-2 rounded-full border hover:bg-white hover:text-[#FF525D]"
            >
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- main -->
    <div class="max-w-7xl mx-auto p-4">
      <!-- section 1 -->
      <div class="px-4 py-10">
        <h1 class="w-full text-center text-4xl max-md:pb-6">
          Designed for the future
        </h1>
        <div
          class="flex flex-col-reverse md:flex md:flex-row text-center md:text-left justify-between items-center gap-8"
        >
          <div class="flex-1">
            <h2 class="text-lg py-6">Introducing an extensible editor</h2>
            <p class="text-slate-500 font-light">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h2 class="text-lg py-6">Robust content management</h2>
            <p class="text-slate-500 font-light">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div class="flex-1">
            <img src="/svg/illustration-editor-blogr.svg" alt="" />
          </div>
        </div>
      </div>
      <!-- section 2 -->
      <div class="bg-[#3b3c5b] text-white p-4 md:p-10">
        <div
          class="flex flex-col md:flex md:flex-row text-center md:text-left justify-between items-center"
        >
          <div
            class="flex-1 bg-[url('public/svg/bg-pattern-circles-blogr.svg')] bg-contain bg-no-repeat"
          >
            <img
              src="/svg/illustration-phones-blogr.svg"
              alt=""
              class="w-[450px]"
            />
          </div>
          <div class="flex-1 p-10">
            <h1 class="text-lg py-6">State of the Art Infrastructure</h1>
            <p class="text-slate-400 font-light">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>

      <!-- section 3 -->
      <div class="px-4 py-10">
        <div
          class="flex flex-col-reverse md:flex md:flex-row text-center md:text-left justify-between items-center gap-8"
        >
          <div class="flex-1">
            <img src="/svg/illustration-laptop-blogr.svg" alt="" />
          </div>
          <div class="flex-1">
            <h2 class="text-lg py-6">Free, open, simple</h2>
            <p class="text-slate-500 font-light">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>

            <h2 class="text-lg py-6">Powerful tooling</h2>
            <p class="text-slate-500 font-light">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="bg-slate-800 p-8 w-full">
      <Footer />
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
