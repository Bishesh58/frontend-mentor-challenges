<template>
  <div class="relative">
    <div class="absolute z-0 inset-0 -ml-2 bg-red-400 rounded-xl"></div>
    <div class="p-2 bg-white text-gray-900 rounded-md relative z-10">
      <div class="h-20 w-20 rounded-full">
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <p>company name</p>
          <p>New!</p>
          <p>Feautured</p>
        </div>
        <h2>Job Title</h2>
        <div>
          <p>1d ago</p>
          <p>Part Time</p>
          <p>Remote</p>
        </div>
      </div>
      <div v-for="(item, index) in 4" :key="index">
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
