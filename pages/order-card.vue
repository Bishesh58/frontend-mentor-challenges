<template>
  <div
    class="min-h-screen flex justify-center items-center bg-[#D6E2F0] bg-[url('/svg/pattern-background-desktop.svg')] bg-no-repeat bg-contain"
  >
    <div
      class="w-[325px] h-[570px] bg-[#FFFFFF] rounded-xl flex flex-col justify-between"
    >
      <img src="/svg/illustration-hero.svg" alt="img" class="rounded-md" />
      <div class="flex flex-col items-center p-6 flex-1 justify-between">
        <h1 class="font-bold text-[#2c4876] text-2xl">Order Summary</h1>
        <p class="text-[#7B879D] text-center font-Raleway">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div
          class="w-full flex justify-between items-center p-4 bg-[#F8F9FE] rounded-md"
        >
          <div class="flex-1 flex">
            <div
              class="bg-[#DEE6F9] rounded-full h-[48px] w-[48px] flex justify-center items-center"
            >
              <Icon name="mdi:music" color="#727EA4" size="1.5em" />
            </div>
            <div class="px-4">
              <p class="font-semibold text-[#111c2d]">Annual Plan</p>
              <p class="text-[#9ea4b1] text-[15px]">$59.99/year</p>
            </div>
          </div>
          <a
            class="underline underline-offset-2 text-[#382AE1] hover:cursor-pointer hover:text-[#392ae1ae]"
            >Change</a
          >
        </div>
        <button
          class="p-4 w-full rounded-md bg-[#382AE1] text-white shadow-lg shadow-[#392ae136] hover:bg-[#392ae1ae]"
        >
          Proceed to Payment
        </button>
        <button class="text-[#7B879D] font-bold hover:text-blue-950">
          Cancel Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Frontend Mentor | Order Summary Component",
});
</script>
