<template>
  <div
    class="min-h-screen flex justify-center items-center bg-[#0D1A2D] font-Outfit font-[300]"
  >
    <div class="w-[320px] bg-[#15273F] p-4 rounded-xl">
      <img src="/img/image-equilibrium.jpg" alt="qrcode" class="rounded-md" />
      <p class="text-[#f3f3f3] text-xl py-4">Equilibrium #3429</p>
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
          Creation of <span class="text-[#f3f3f3]">Jules Wyvern</span>
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
