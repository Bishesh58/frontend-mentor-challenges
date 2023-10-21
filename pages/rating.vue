<template>
  <div
    class="min-h-screen bg-[#121417] flex justify-center items-center font-Lato"
  >
    <!-- rate component -->
    <div
      v-if="showRating"
      class="w-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 to-[#161b23] rounded-3xl p-8"
    >
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center bg-[#252D37] mb-8"
      >
        <img src="/svg/icon-star.svg" alt="" class="animate-spin" />
      </div>
      <p class="mb-4 text-slate-100 text-3xl">How did we do?</p>
      <p class="text-[#7C8798]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div class="flex justify-between text-[#7C8798] my-8">
        <button
          @click="handleSelect(1)"
          class="w-12 h-12 rounded-full flex items-center justify-center bg-[#252D37] hover:bg-[#7C8798] hover:text-white focus:bg-[#FC7613] focus:text-white"
        >
          1
        </button>
        <button
          @click="handleSelect(2)"
          class="w-12 h-12 rounded-full flex items-center justify-center bg-[#252D37] hover:bg-[#7C8798] hover:text-white focus:bg-[#FC7613] focus:text-white"
        >
          2
        </button>
        <button
          @click="handleSelect(3)"
          class="w-12 h-12 rounded-full flex items-center justify-center bg-[#252D37] hover:bg-[#7C8798] hover:text-white focus:bg-[#FC7613] focus:text-white"
        >
          3
        </button>
        <button
          @click="handleSelect(4)"
          class="w-12 h-12 rounded-full flex items-center justify-center bg-[#252D37] hover:bg-[#7C8798] hover:text-white focus:bg-[#FC7613] focus:text-white"
        >
          4
        </button>
        <button
          @click="handleSelect(5)"
          class="w-12 h-12 rounded-full flex items-center justify-center bg-[#252D37] hover:bg-[#7C8798] hover:text-white focus:bg-[#FC7613] focus:text-white"
        >
          5
        </button>
      </div>
      <button
        @click="handleSubmit"
        class="uppercase p-2 bg-[#FC7613] w-full rounded-full text-white tracking-widest hover:bg-slate-100 hover:text-[#FC7613] font-semibold"
      >
        submit
      </button>
    </div>
    <!-- thank you component -->
    <div
      v-else
      class="w-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 to-[#161b23] rounded-3xl p-8 text-center relative"
    >
      <div class="text-[#7C8798] my-8">
        <img
          src="/svg/illustration-thank-you.svg"
          alt=""
          class="mx-auto mb-8"
        />
        <div class="flex justify-center items-center my-4">
          <p
            class="p-2 px-4 tracking-wider bg-[#252D37] rounded-full text-[#FC7613] w-fit animate-pulse"
          >
            You selected {{ selected }} out of 5
          </p>
        </div>
        <p class="mb-4 text-slate-100 text-2xl">Thank you!</p>
        <p class="text-[#7C8798] text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
      <div
        class="absolute -bottom-12 left-32 text-white text-sm font-[300] border-b py-2 px-4 rounded-full"
      >
        <button @click="resetSelection">Rate again</button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Frontend Mentor | Interactive rating component",
});

const showRating = ref(true);
const selected = ref("");
const handleSelect = (value) => {
  selected.value = value;
};

const handleSubmit = () => {
  if (!selected.value) {
    alert("Please select rating from 1 to 5.");
    return;
  }
  showRating.value = false;
};

const resetSelection = () => {
  selected.value = "";
  showRating.value = true;
};
</script>

<style scoped></style>
