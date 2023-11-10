<template>
  <div class="bg-[#FAFAFA] text-black font-Lato">
    <!-- header -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-8">
        <header
          class="flex items-center justify-between bg-white h-20 relative z-40"
        >
          <img src="/easybank/logo.svg" alt="" />
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
            class="py-2 px-6 bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] hover:bg-gradient-to-r hover:from-[#2BB7DA] hover:to-[#31D35C] hover:text-opacity-70 text-white rounded-full hover:cursor-pointer"
          >
            Request Invite
          </button>
        </header>
      </div>
    </div>

    <!-- hero -->
    <div class="flex justify-between max-w-7xl mx-auto p-8 h-[700px]">
      <div class="flex-1 py-20 max-w-md">
        <h1 class="text-5xl">Next generation digital banking</h1>
        <p class="text-gray-400 py-6">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button
          class="py-2 px-6 bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] hover:bg-gradient-to-r hover:from-[#2BB7DA] hover:to-[#31D35C] hover:text-opacity-70 text-white rounded-full hover:cursor-pointer"
        >
          Request Invite
        </button>
      </div>
      <div class="flex-1 relative max-lg:overflow-hidden">
        <img
          src="/easybank/bg-intro-desktop.svg"
          alt=""
          class="absolute -top-36"
        />
        <img
          src="/easybank/image-mockups.png"
          alt=""
          class="absolute -top-44 -right-16 z-20"
        />
      </div>
    </div>

    <!-- main -->
    <section class="bg-[#F3F4F6] relative z-10 -mt-24">
      <div class="max-w-7xl mx-auto px-8 py-20">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div class="flex">
          <div>
            <img src="" alt="" />
            <h2>Online Banking</h2>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h1>Latest Articles</h1>
      <div class="flex">
        <div>
          <p>By Claire</p>
          <img src="" alt="" />
          <h3>Receive</h3>
          <p></p>
        </div>
      </div>
    </section>
    <!-- footer -->
    <div>
      <div>
        <div>
          <img src="" alt="" />
          <div class="flex gap-2 items-center">
            <Icon name="mdi:facebook" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <a href="#">About Us</a>
        </div>
      </div>
      <div>
        <button>Request Invite</button>
        <p>@copy right</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
