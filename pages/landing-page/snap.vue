<template>
  <div class="bg-[#FAFAFA]">
    <div class="min-h-screen max-w-7xl bg-[#FAFAFA] mx-auto font-Poppins">
      <!-- header -->
      <div
        class="flex gap-2 items-center max-md:justify-between text-sm p-4 md:py-0"
      >
        <img src="/svg/logo-snap.svg" alt="" class="pr-4 py-2 -mb-2" />

        <!-- desktop -->
        <div class="flex-grow items-center gap-2 p-4 pl-0 hidden md:flex">
          <button class="px-4 py-2 opacity-60 hover:opacity-100 group relative">
            Features
            <span class="group-hover:hidden"
              ><Icon name="ion:chevron-down" class="ml-1"
            /></span>
            <span class="hidden group-hover:inline-block"
              ><Icon name="ion:chevron-up" class="ml-1"
            /></span>
            <div
              class="absolute left-0 inset-8 h-fit border rounded-lg bg-white px-6 py-4 min-w-[150px] shadow-lg flex-col gap-2 hidden group-hover:flex hover:flex"
            >
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <img src="/svg/icon-todo.svg" alt="" />
                <p>Todo List</p>
              </div>
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <img src="/svg/icon-calendar.svg" alt="" />
                <p>Calendar</p>
              </div>
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <img src="/svg/icon-reminders.svg" alt="" />
                <p>Reminders</p>
              </div>
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <img src="/svg/icon-planning.svg" alt="" />
                <p>Planning</p>
              </div>
            </div>
          </button>
          <button class="px-4 py-2 opacity-60 hover:opacity-100 group relative">
            Company
            <span class="group-hover:hidden"
              ><Icon name="ion:chevron-down" class="ml-1"
            /></span>
            <span class="hidden group-hover:inline-block"
              ><Icon name="ion:chevron-up" class="ml-1"
            /></span>
            <div
              class="absolute left-0 inset-8 h-fit border rounded-lg bg-white px-6 py-4 min-w-[120px] shadow-lg flex-col gap-2 hidden group-hover:flex hover:flex"
            >
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <p>History</p>
              </div>
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <p>Our Team</p>
              </div>
              <div class="flex items-center gap-3 opacity-60 hover:opacity-100">
                <p>Blog</p>
              </div>
            </div>
          </button>
          <button class="px-4 py-2 opacity-60 hover:opacity-100">
            Careers
          </button>
          <button class="px-4 py-2 opacity-60 hover:opacity-100">About</button>
        </div>
        <div class="hidden gap-4 md:flex">
          <button class="px-4 py-2 opacity-60 hover:opacity-100">login</button>
          <button
            class="px-4 py-2 rounded-lg border border-black border-opacity-60 opacity-60 hover:opacity-100 hover:border-black"
          >
            Register
          </button>
        </div>
        <!-- mobile -->
        <div @click="isSidebarOpen = true" class="md:hidden">
          <Icon name="ic:round-menu" size="32px" />
        </div>
      </div>
      <!-- sidebar -->
      <div v-if="isSidebarOpen" class="md:hidden">
        <div
          class="fixed top-0 right-0 left-0 bottom-0 z-10 bg-black opacity-50"
          @click="isSidebarOpen = false"
        ></div>
        <div
          class="fixed top-0 right-0 z-20 max-sm:w-[250px] max-md:w-[400px] h-screen min-w-fit bg-white shadow-xl animate-fade-left animate-ease-in-out animate-duration-300"
          :class="isSidebarOpen ? 'translate-x-0' : ''"
        >
          <div class="p-4 flex flex-col">
            <Icon
              name="material-symbols:close-rounded"
              size="32px"
              class="self-end"
              @click="reset"
            />
            <div class="flex flex-col items-start gap-2">
              <button
                class="px-4 py-2 opacity-60 hover:opacity-100"
                @click="isFeatureToggled = !isFeatureToggled"
              >
                Features
                <span v-if="!isFeatureToggled"
                  ><Icon name="ion:chevron-down" class="ml-1"
                /></span>
                <span v-else><Icon name="ion:chevron-up" class="ml-1" /></span>
              </button>
              <!-- features sub menu -->
              <div
                v-if="isFeatureToggled"
                class="h-fit bg-white px-8 flex flex-col gap-3 animate-fade"
              >
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <img src="/svg/icon-todo.svg" alt="" />
                  <p>Todo List</p>
                </div>
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <img src="/svg/icon-calendar.svg" alt="" />
                  <p>Calendar</p>
                </div>
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <img src="/svg/icon-reminders.svg" alt="" />
                  <p>Reminders</p>
                </div>
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <img src="/svg/icon-planning.svg" alt="" />
                  <p>Planning</p>
                </div>
              </div>
              <button
                class="px-4 py-2 opacity-60 hover:opacity-100 group relative"
                @click="isCompanyToggled = !isCompanyToggled"
              >
                Company
                <span v-if="!isCompanyToggled"
                  ><Icon name="ion:chevron-down" class="ml-1"
                /></span>
                <span v-else><Icon name="ion:chevron-up" class="ml-1" /></span>
              </button>
              <!-- company sub menu -->
              <div
                v-if="isCompanyToggled"
                class="h-fit bg-white px-8 flex flex-col gap-3 animate-fade"
              >
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <p>History</p>
                </div>
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <p>Our Team</p>
                </div>
                <div
                  class="flex items-center gap-3 opacity-60 hover:opacity-100"
                >
                  <p>Blog</p>
                </div>
              </div>
              <button class="px-4 py-2 opacity-60 hover:opacity-100">
                Careers
              </button>
              <button class="px-4 py-2 opacity-60 hover:opacity-100">
                About
              </button>
            </div>
            <div class="flex flex-col justify-center gap-4">
              <button
                class="px-4 py-2 opacity-60 hover:opacity-100 w-[80%] max-w-[220px] self-center"
              >
                login
              </button>
              <button
                class="px-4 py-2 rounded-lg border border-black border-opacity-60 opacity-60 hover:opacity-100 hover:border-black w-[80%] max-w-[220px] self-center"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- hero -->
      <div class="flex max-md:flex-col-reverse max-md:py-4 max-md:px-0 p-16">
        <!-- left -->
        <div
          class="flex-1 flex flex-col max-md:p-0 max-md:pt-8 px-8 pt-20 max-md:text-center max-md:items-center"
        >
          <h1
            class="text-4xl md:text-6xl font-semibold leading-[1.1] animate-fade-right animate-duration-1000"
          >
            Make <br class="hidden md:inline-block" />
            remote Work
          </h1>
          <p
            class="py-6 px-4 md:px-0 md:py-12 md:w-[400px] opacity-60 animate-fade-right animate-duration-1000 animate-delay-500"
          >
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button
            class="px-4 py-2 w-fit rounded-lg border bg-black text-white hover:bg-white border-black border-opacity-60 hover:opacity-100 hover:text-black text-base animate-fade-down animate-delay-700 animate-duration-1000"
          >
            Learn more
          </button>
          <div
            class="flex justify-between flex-1 items-end max-md:py-8 max-md:w-full max-md:justify-evenly"
          >
            <img src="/svg/client-databiz.svg" alt="" class="max-md:w-[72px]" />
            <img
              src="/svg/client-audiophile.svg"
              alt=""
              class="max-md:w-[48px]"
            />
            <img src="/svg/client-meet.svg" alt="" class="max-md:w-[72px]" />
            <img src="/svg/client-maker.svg" alt="" class="max-md:w-[72px]" />
          </div>
        </div>
        <!-- right -->
        <div
          class="flex-1 max-md:p-0 px-8 animate-fade-left animate-duration-1000"
        >
          <img
            src="/img/snap-hero-desktop.png"
            alt=""
            class="object-contain max-md:w-[375px] mx-auto max-md:h-[375px] h-[512px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false);
const isFeatureToggled = ref(false);
const isCompanyToggled = ref(false);

const reset = () => {
  isSidebarOpen.value = false;
  isFeatureToggled.value = false;
  isCompanyToggled.value = false;
};
</script>

<style scoped></style>
