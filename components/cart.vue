<template>
  <div class="absolute inset-0 bg-black/30 z-50">
    <div
      class="absolute right-0 bottom-0 top-0 w-[400px] bg-white text-[#68707D] font-light"
    >
      <div class="p-4 flex flex-col justify-between h-full">
        <div class="p-4 pb-6 flex items-center justify-between border-b">
          <p class="flex items-center gap-2">
            <span> SHOPPING CART</span>
            <span
              class="px-2 py-1 bg-[#ff7d1a] inline-grid place-items-center text-xs text-white rounded-full"
              >{{ store.cart.length }}</span
            >
          </p>
          <Icon
            name="ion:close"
            size="24px"
            class="hover:rotate-90 hover:text-[#ff7d1a] hover:cursor-pointer transition-transform transform duration-200"
            @click="$emit('close')"
          />
        </div>
        <div class="flex-grow p-4">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="py-2 px-4 border text-left font-light">Product</th>
                <th class="py-2 px-4 border text-center font-light">
                  Quantity
                </th>
                <th class="py-2 px-4 border text-right font-light">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in store.cart" :key="i" class="w-full">
                <td class="py-2 px-4 border text-left">
                  <img :src="item.img" alt="" class="h-[100px] w-[120px]" />
                </td>
                <td class="py-2 px-4 border text-center">
                  <p>{{ item.quantity }}</p>
                </td>
                <td class="py-2 px-4 border text-right">
                  <p>{{ item.price }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="border-t py-6 rounded-md">
          <div class="flex items-center justify-between py-4">
            <p class="capitalize">subtotal:</p>
            <p>{{ item.price }}</p>
          </div>
          <button
            class="py-2.5 px-8 w-full rounded-md bg-[#ff7d1a] text-white uppercase font-semibold tracking-wide hover:bg-opacity-70 hover:shadow-md hover:cursor-pointer"
            @click="$emit('close')"
          >
            checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/product";
const store = useProductStore();

defineEmits(["close"]);
</script>

<style scoped></style>
