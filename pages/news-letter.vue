<template>
  <div
    class="min-h-screen w-full bg-slate-800 flex justify-center items-center font-Roboto"
  >
    <div
      v-if="!isSubmitted"
      class="bg-white text-slate-800 rounded-2xl md:p-5 flex flex-col md:flex-row-reverse font-light"
    >
      <img
        src="/svg/illustration-sign-up-desktop.svg"
        alt=""
        class="hidden md:block"
      />
      <img
        src="/svg/illustration-sign-up-mobile.svg"
        alt=""
        class="md:hidden"
      />
      <div class="p-4 md:p-10 max-w-[450px]">
        <h1 class="text-4xl font-semibold my-4 md:my-6">Stay updated!</h1>
        <p class="mb-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div class="my-4">
          <div class="flex gap-2.5 py-1.5">
            <img src="/svg/icon-list.svg" alt="" />
            <p>Product discovery and building what matters</p>
          </div>
          <div class="flex gap-2.5 py-1.5">
            <img src="/svg/icon-list.svg" alt="" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div class="flex gap-2.5 py-1.5">
            <img src="/svg/icon-list.svg" alt="" />
            <p>And much more!</p>
          </div>
        </div>

        <div class="mt-10">
          <div class="flex justify-between">
            <p class="py-2 text-sm">Email address</p>
            <p v-if="emailError" class="text-red-500 text-sm py-2">
              Invalid email
            </p>
          </div>

          <input
            v-model="input"
            id="email"
            type="email"
            placeholder="email@company.com "
            class="py-2.5 px-4 rounded-md border border-slate-300 w-full text-sm"
            @focus="emailError = false"
          />
        </div>
        <button
          @click="handleSubmit"
          class="w-full text-center text-sm text-slate-100 bg-slate-800 p-4 rounded-md my-6 hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-xl hover:shadow-pink-200"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
    <div
      v-else
      class="bg-white text-slate-800 rounded-2xl p-5 m-4 md:m-0 md:p-5 flex flex-col font-light max-w-[450px]"
    >
      <img src="/svg/icon-success.svg" alt="" class="w-8 h-8 md:w-12 md:h-12" />
      <h1 class="text-4xl font-semibold my-4 md:my-6">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to
        <span class="font-semibold">{{ input }}</span
        >. Please open it and click the button inside to confirm your
        subscription.
      </p>

      <button
        @click="reset"
        class="w-full text-center text-sm text-slate-100 bg-slate-800 p-4 rounded-md my-6 mt-16 md:mt-6 hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:shadow-xl hover:shadow-pink-200"
      >
        Dismiss message
      </button>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Frontend Mentor | Newsletter sign-up form",
});
const input = ref("");
const isSubmitted = ref(false);
const emailError = ref(false);

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const handleSubmit = () => {
  if (!input.value) {
    document.getElementById("email").focus();
  } else if (!validateEmail(input.value)) {
    emailError.value = true;
    document.getElementById("email").style.border = "1px solid red";
  } else {
    emailError.value = false;
    isSubmitted.value = true;
  }
};

const reset = () => {
  emailError.value = false;
  input.value = "";
  isSubmitted.value = false;
};
</script>

<style scoped></style>
