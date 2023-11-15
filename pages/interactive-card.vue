<template>
  <div
    class="flex flex-col md:flex-row w-screen h-screen min-w-[375px] bg-slate-200"
  >
    <div
      class="flex-[0.2] md:flex-[0.3] lg:flex-[0.4] bg-gradient-to-r from-gray-800 to-gray-600 py-4"
    ></div>
    <form
      @submit.prevent="handleSubmit"
      class="flex-1 flex flex-col items-start md:justify-center md:max-w-lg mx-auto bg-slate-200 text-blue-950 px-4 pt-40 pb-8 md:px-8 font-mono"
    >
      <label for="name" class="uppercase tracking-widest pb-1"
        >Cardholder name</label
      >
      <input
        type="text"
        v-model="formData.name"
        class="outline-none border rounded-md py-2 px-4 w-full mb-6 bg-white"
        placeholder="e.g. Jane Doe"
      />
      <!-- err msg name -->
      <p
        v-for="error of v$.name.$errors"
        :key="error.$uid"
        class="text-xs text-red-400 -mt-4 mb-4 px-2"
      >
        {{ error.$message }}
      </p>

      <label for="name" class="uppercase tracking-widest pb-1"
        >card number</label
      >
      <input
        type="number"
        v-model="formData.num"
        class="outline-none border rounded-md py-2 px-4 w-full mb-6 bg-white"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <!-- err msg num -->
      <p
        v-for="error of v$.num.$errors"
        :key="error.$uid"
        class="text-xs text-red-400 -mt-4 mb-4 px-2"
      >
        {{ error.$message }}
      </p>
      <div class="flex gap-2 pb-4 w-full">
        <div class="w-24">
          <label for="name" class="uppercase tracking-widest">exp.date </label>
          <input
            type="number"
            maxlength="2"
            v-model="formData.expiryMM"
            class="outline-none border rounded-md py-2 px-4 w-20 mt-1 bg-white"
            placeholder="MM"
          />
          <!-- err msg MM -->
          <p
            v-for="error of v$.expiryMM.$errors"
            :key="error.$uid"
            class="text-xs text-red-400 p-2"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="w-24">
          <label for="name" class="uppercase tracking-widest">(mm/yy)</label>
          <input
            type="number"
            maxlength="2"
            minlength="2"
            v-model="formData.expiryYY"
            class="outline-none border rounded-md py-2 px-4 w-20 mt-1 bg-white"
            placeholder="YY"
          />
          <!-- err msg YY -->
          <p
            v-for="error of v$.expiryYY.$errors"
            :key="error.$uid"
            class="text-xs text-red-400 p-2"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="max-sm:w-32 flex flex-col">
          <label for="name" class="uppercase tracking-widest">cvc</label>
          <input
            type="number"
            maxlength="3"
            v-model="formData.csv"
            class="outline-none border rounded-md py-2 px-4 mt-1 bg-white"
            placeholder="e.g. 123"
          />
          <!-- err msg csv -->
          <p
            v-for="error of v$.csv.$errors"
            :key="error.$uid"
            class="text-xs text-red-400 p-2"
          >
            {{ error.$message }}
          </p>
        </div>
      </div>
      <button
        class="w-full text-center p-4 my-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-md hover:bg-green-500"
        type="submit"
      >
        Confirm
      </button>
    </form>
    <div class="absolute top-0 left-0 right-0 p-4 font-mono max-w-7xl mx-auto">
      <div class="relative max-w-md lg:mt-20 md:ml-20">
        <div
          class="w-[280px] h-[155px] absolute z-0 right-0 lg:top-44 xl:-right-10"
        >
          <img src="/img/bg-card-back.png" alt="" class="" />
          <p class="absolute text-white px-2 py-1 right-6 top-[60px]">
            {{ formData.csv ? formData.csv : "000" }}
          </p>
        </div>

        <div
          class="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-md w-[280px] h-[155px] absolute z-10 left-0 top-[90px] lg:top-0 lg:left-20 xl:left-40 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500 p-4 overflow-hidden"
        >
          <div class="flex items-center gap-2">
            <div class="h-6 w-6 bg-white rounded-full"></div>
            <div class="h-3 w-3 border-white border rounded-full"></div>
          </div>
          <h1 class="pt-8 pb-4 text-xl tracking-wide">
            {{ formData.num ? formData.num : "0000 0000 0000 0000" }}
          </h1>
          <div class="flex justify-between items-center text-sm">
            <p>{{ formData.name ? formData.name : "Jane Doe" }}</p>

            <p>
              {{ formData.expiryMM ? formData.expiryMM : "00" }}/{{
                formData.expiryYY ? formData.expiryYY : "00"
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  alpha,
  numeric,
} from "@vuelidate/validators";

const toast = useToast();

const formData = reactive({
  name: "",
  num: "",
  expiryMM: "",
  expiryYY: "",
  csv: "",
});

const reset = () => {
  formData.name = "";
  formData.num = "";
  formData.expiryMM = "";
  formData.expiryYY = "";
  formData.csv = "";
  v$.value.$reset();
};

const handleSubmit = async () => {
  //warning for empty form submission
  const isEmptyField = Object.values(formData).every((value) => !value);
  if (isEmptyField) {
    toast.warning("Please fill out all required fields.");
    return;
  }
  //validate form
  const result = await v$.value.$validate();
  if (!result) {
    return;
  }
  //success
  toast.success("Submitted!");

  reset();
};

//form validation
const rules = computed(() => {
  return {
    name: {
      required,
      alpha,
      minLength: minLength(2),
      maxLength: maxLength(10),
    },
    num: {
      required,
      minLength: minLength(12),
      maxLength: maxLength(12),
    },
    expiryMM: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(2),
    },
    expiryYY: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(2),
    },
    csv: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(3),
    },
  };
});

const v$ = useVuelidate(rules, formData);
</script>

<style lang="scss" scoped></style>
