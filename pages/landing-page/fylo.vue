<template>
  <div class="bg-[#1c2431] text-white min-h-screen">
    <!-- top -->
    <div class="relative">
      <div class="max-w-7xl mx-auto p-8 relative z-30">
        <!-- header -->
        <header class="flex justify-between items-center text-sm">
          <img src="/fylo/logo.svg" alt="" class="h-[32px] max-md:h-[24px]" />
          <nav class="flex gap-4 max-md:text-sm">
            <a href="#" class="hover:underline hover:underline-offset-4"
              >Features</a
            >
            <a href="#" class="hover:underline hover:underline-offset-4"
              >Team</a
            >
            <a href="#" class="hover:underline hover:underline-offset-4"
              >Sign in</a
            >
          </nav>
        </header>
        <!-- Intro -->
        <div
          class="max-md:py-10 2xl:py-16 flex flex-col gap-4 justify-center items-center"
        >
          <img src="/fylo/illustration-intro.png" alt="" class="xl:h-[400px]" />
          <h1
            class="font-Raleway text-4xl text-center font-semibold leading-snug max-w-[720px] py-4"
          >
            All your files in one secure location, accessible anywhere.
          </h1>
          <p class="font-light max-w-[500px] text-center">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button
            class="py-2 px-8 bg-gradient-to-r from-[#65E2D9] to-[#339ECC] rounded-full text-sm"
          >
            Get Started
          </button>
        </div>
      </div>
      <!-- intro bg pattern -->
      <img
        src="/fylo/bg-curvy-desktop.svg"
        alt=""
        class="absolute bottom-0 left-0 right-0 w-full block z-0"
      />
    </div>
    <!-- main -->
    <main class="bg-[#181E2A]">
      <div class="max-w-7xl mx-auto px-8 py-16">
        <section class="grid gap-20 grid-cols-1 md:grid-cols-2">
          <div class="flex flex-col gap-2 justify-center items-center">
            <img src="/fylo/icon-access-anywhere.svg" alt="" />
            <h2
              class="font-Raleway text-xl text-center font-semibold leading-snug py-2"
            >
              Access your files, anywhere
            </h2>
            <p class="font-light text-sm text-center max-w-sm opacity-75">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center">
            <img src="/fylo/icon-security.svg" alt="" />
            <h2
              class="font-Raleway text-xl text-center font-semibold leading-snug py-2"
            >
              Security you can trust
            </h2>
            <p class="font-light text-sm text-center max-w-sm opacity-75">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center">
            <img src="/fylo/icon-collaboration.svg" alt="" />
            <h2
              class="font-Raleway text-xl text-center font-semibold leading-snug py-2"
            >
              Real-time collaboration
            </h2>
            <p class="font-light text-sm text-center max-w-sm opacity-75">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center">
            <img src="/fylo/icon-any-file.svg" alt="" />
            <h2
              class="font-Raleway text-xl text-center font-semibold leading-snug py-2"
            >
              Store any type of file
            </h2>
            <p class="font-light text-sm text-center max-w-sm opacity-75">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </section>
        <section
          class="py-32 gap-20 flex flex-col md:flex-row justify-between items-center"
        >
          <img src="/fylo/illustration-stay-productive.png" alt="" />
          <div class="flex flex-col gap-4">
            <h1
              class="font-Raleway text-4xl text-center md:text-left font-semibold leading-snug md:max-w-sm"
            >
              Stay productive, wherever you are
            </h1>
            <p class="font-light opacity-75 text-center md:text-left">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p class="font-light opacity-75 text-center md:text-left">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a
              href="#"
              class="text-sm font-light underline underline-offset-8 text-[#65E2D9] hover:text-white text-center md:text-left"
            >
              See how Fylo works
              <Icon name="material-symbols:arrow-circle-right"
            /></a>
          </div>
        </section>
        <img src="/fylo/bg-quotes.png" alt="" class="-mb-20 w-[32px]" />
        <section class="flex flex-col md:flex-row gap-6 my-20">
          <div class="rounded-md bg-[#202A3C] px-4 py-6">
            <p class="font-light text-sm opacity-75">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div class="flex items-start gap-2 py-6">
              <img src="/img/user/angela.webp" alt="" class="h-8 w-8" />
              <div>
                <p class="text-sm">Angela Patel</p>
                <p class="text-xs opacity-50 py-1">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div class="rounded-md bg-[#202A3C] px-4 py-6">
            <p class="font-light text-sm opacity-75">
              Switching to Fylo has completely transformed our workflow! Our
              team is now firing on all cylinders, delivering projects faster
              and more efficiently than ever before.
            </p>
            <div class="flex items-start gap-2 py-6">
              <img src="/img/user/jacob.webp" alt="" class="h-8 w-8" />
              <div>
                <p class="text-sm">Jacob Mills</p>
                <p class="text-xs opacity-50 py-1">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div class="rounded-md bg-[#202A3C] px-4 py-6">
            <p class="font-light text-sm opacity-75">
              Our experience with Fylo has been nothing short of remarkable. The
              software's seamless integration has propelled our team's
              productivity to new heights, turning us into an unstoppable force
              of collaboration.
            </p>
            <div class="flex items-start gap-2 py-6">
              <img src="/img/user/anna.webp" alt="" class="h-8 w-8" />
              <div>
                <p class="text-sm">Chess Byod</p>
                <p class="text-xs opacity-50 py-1">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div class="rounded-md bg-[#202A3C] px-4 py-6">
            <p class="font-light text-sm opacity-75">
              Fylo's impact on our team has been extraordinary. We've seen a
              remarkable surge in productivity, leading to a significant
              increase in the quality and speed of our collective output. It's
              like having a turbocharger for collaboration!
            </p>
            <div class="flex items-start gap-2 py-6">
              <img src="/img/user/mark.webp" alt="" class="h-8 w-8" />
              <div>
                <p class="text-sm">Mark Willam</p>
                <p class="text-xs opacity-50 py-1">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
        <div
          class="max-w-3xl mx-auto bg-[#1C2431] p-4 py-8 md:p-16 rounded-lg relative z-20"
        >
          <h1
            class="font-Raleway text-2xl text-center font-semibold leading-snug max-w-[720px] py-4"
          >
            Get early access today
          </h1>
          <p class="font-light opacity-75 text-center py-4">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div class="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              class="flex-1 rounded-full py-2 px-6 text-gray-800 placeholder:text-gray-400 bg-slate-200 focus:outline-none"
              placeholder="jane@example.com"
            />
            <button
              class="py-2 px-8 bg-gradient-to-r from-[#65E2D9] to-[#339ECC] rounded-full text-sm"
            >
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </main>
    <!-- footer -->
    <div class="bg-[#0C1524] pt-20 -mt-28">
      <div
        class="max-w-7xl px-8 py-10 mx-auto grid max-md:place-items-center max-md:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
      >
        <img src="/fylo/logo.svg" alt="" class="h-[24px] col-span-full my-8" />

        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <Icon name="mdi:phone" />
            <p class="text-xs opacity-75">+1-543-123-4567</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:email" />
            <p class="text-xs opacity-75">example@fylo.com</p>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:location" />
            <p class="text-xs opacity-75">3 Nuxt Steet, Vue Road 101</p>
          </div>
        </div>
        <ul class="text-xs opacity-75 flex flex-col gap-2">
          <li><a href="#">About us</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul class="text-xs opacity-75 flex flex-col gap-2">
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
        <div class="flex gap-4">
          <div
            class="h-8 w-8 border rounded-full hover:text-[#65E2D9] hover:border-[#65E2D9] hover:cursor-pointer flex justify-center items-center"
          >
            <Icon name="ri:facebook-line" />
          </div>
          <div
            class="h-8 w-8 border rounded-full hover:text-[#65E2D9] hover:border-[#65E2D9] hover:cursor-pointer flex justify-center items-center"
          >
            <Icon name="ri:twitter-line" />
          </div>
          <div
            class="h-8 w-8 border rounded-full hover:text-[#65E2D9] hover:border-[#65E2D9] hover:cursor-pointer flex justify-center items-center"
          >
            <Icon name="ri:instagram-line" />
          </div>
          <div
            class="h-8 w-8 border rounded-full hover:text-[#65E2D9] hover:border-[#65E2D9] hover:cursor-pointer flex justify-center items-center"
          >
            <Icon name="ri:github-line" />
          </div>
          <div
            class="h-8 w-8 border rounded-full hover:text-[#65E2D9] hover:border-[#65E2D9] hover:cursor-pointer flex justify-center items-center"
          >
            <Icon name="ri:linkedin-line" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
