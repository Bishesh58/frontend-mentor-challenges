<template>
  <div
    class="flex flex-col md:flex-row w-screen h-screen min-w-[375px] bg-slate-200"
  >
    <div
      class="flex-[0.2] md:flex-[0.3] lg:flex-[0.4] bg-gradient-to-r from-gray-800 to-gray-600 py-4"
    ></div>
    <div
      class="flex-1 flex flex-col items-start md:justify-center md:max-w-lg mx-auto bg-slate-200 text-blue-950 px-4 pt-40 pb-8 md:px-8 font-mono"
    >
      <label for="name" class="uppercase tracking-widest pb-1"
        >Cardholder name</label
      >
      <input
        type="tel"
        maxlength="20"
        v-model="name"
        class="outline-none border rounded-md py-2 px-4 w-full mb-6 bg-white"
        placeholder="e.g. Jane Doe"
      />
      <label for="name" class="uppercase tracking-widest pb-1"
        >card number</label
      >
      <input
        type="tel"
        maxlength="16"
        v-model="number"
        class="outline-none border rounded-md py-2 px-4 w-full mb-6 bg-white"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <div class="flex gap-2 pb-4 w-full">
        <div class="w-24">
          <label for="name" class="uppercase tracking-widest">exp.date </label>
          <input
            type="tel"
            maxlength="2"
            v-model="expiryMM"
            class="outline-none border rounded-md py-2 px-4 w-20 mt-1 bg-white"
            placeholder="MM"
          />
        </div>
        <div class="w-24">
          <label for="name" class="uppercase tracking-widest">(mm/yy)</label>
          <input
            type="tel"
            maxlength="2"
            v-model="expiryYY"
            class="outline-none border rounded-md py-2 px-4 w-20 mt-1 bg-white"
            placeholder="YY"
          />
        </div>
        <div class="max-sm:w-32 flex flex-col">
          <label for="name" class="uppercase tracking-widest">cvc</label>
          <input
            type="tel"
            maxlength="3"
            v-model="csv"
            class="outline-none border rounded-md py-2 px-4 mt-1 bg-white"
            placeholder="e.g. 123"
          />
        </div>
      </div>
      <button
        class="w-full text-center p-4 my-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-md hover:bg-green-500"
        @click="handleSubmit"
      >
        Confirm
      </button>
    </div>
    <div class="absolute top-0 left-0 right-0 p-4 font-mono max-w-7xl mx-auto">
      <div class="relative max-w-md lg:mt-20 md:ml-20">
        <div
          class="w-[280px] h-[155px] absolute z-0 right-0 lg:top-44 xl:-right-10"
        >
          <img src="/img/bg-card-back.png" alt="" class="" />
          <p class="absolute text-white px-2 py-1 right-6 top-[60px]">
            {{ csv ? csv : "000" }}
          </p>
        </div>

        <div
          class="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-md w-[280px] h-[155px] absolute z-10 left-0 top-[90px] lg:top-0 lg:left-20 xl:left-40 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500 p-4"
        >
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 bg-white rounded-full"></div>
            <div class="h-3 w-3 border-white border rounded-full"></div>
          </div>
          <h1 class="pt-8 pb-4 text-xl tracking-wide">
            {{ number ? number : "0000 0000 0000 0000" }}
          </h1>
          <div class="flex justify-between items-center text-sm">
            <p>{{ name ? name : "Jane Doe" }}</p>
            <p>
              {{ expiryMM ? expiryMM : "00" }}/{{ expiryYY ? expiryYY : "00" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useForm } from 'vee-validate';

const toast = useToast();
const { values } = useForm();
console.log(values)

const number = ref("");
const name = ref("");
const expiryMM = ref("");
const expiryYY = ref("");
const csv = ref("");

const reset = () => {
  number.value = "";
  name.value = "";
  expiryMM.value = "";
  expiryYY.value = "";
  csv.value = "";
};

const handleSubmit = () => {
  reset();
  toast.success("Submitted!");
};
</script>

<style lang="scss" scoped></style>
