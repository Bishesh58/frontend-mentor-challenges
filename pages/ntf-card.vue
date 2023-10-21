<template>
  <div
    class="min-h-screen flex justify-center items-center bg-[#0D1A2D] font-Outfit font-[300]"
  >
    <div class="w-[320px] bg-[#15273F] p-4 rounded-xl">
      <div class="hover:cursor-pointer rounded-md relative group">
        <img src="/img/image-equilibrium.jpg" alt="qrcode" class="rounded-md" />
        <div
          class="bg-[#19FFFF] opacity-50 absolute top-0 bottom-0 left-0 right-0 hidden group-hover:flex justify-center items-center rounded-md"
        ></div>
        <div
          class="absolute top-0 bottom-0 left-0 right-0 hidden justify-center items-center group-hover:flex"
        >
          <img src="/svg/icon-view.svg" alt="" />
        </div>
      </div>

      <p
        class="text-[#f3f3f3] text-xl py-4 hover:text-[#19FFFF] hover:cursor-pointer"
      >
        Equilibrium #3429
      </p>
      <p class="text-[#97AECD] text-left">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div class="flex justify-between my-4">
        <div class="text-[#19FFFF] font-semibold flex items-center gap-2">
          <img src="/svg/icon-ethereum.svg" alt="" />
          <p>0.041 ETH</p>
        </div>
        <div class="text-[#97AECD] flex items-center gap-2">
          <img src="/svg/icon-clock.svg" alt="" class="mt-[2px]" />
          <p>3 days left</p>
        </div>
      </div>
      <div class="border-b border-[#364354]"></div>
      <div class="py-4 flex items-center gap-4">
        <img
          src="/img/image-avatar.png"
          alt="avatar"
          class="h-8 w-8 rounded-full"
        />
        <p class="text-[#97AECD]">
          Creation of
          <span class="text-[#f3f3f3] hover:text-[#19FFFF] hover:cursor-pointer"
            >Jules Wyvern</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Frontend Mentor | NTF card component",
});
</script>
