<script setup>
const props = defineProps(["comment"]);
</script>

<template>
  <div>
    <div
      class="w-full md:w-[512px] px-4 border-l text-black md:px-6 rounded-md text-xs sm:text-sm md:text-base"
    >
      <div class="flex justify-between">
        <div class="flex-grow flex items-center gap-2 -ml-12">
          <img :src="comment.profileImg" alt="" class="h-10 w-10" />
          <p>{{ comment.author }}</p>
          <p>{{ comment.createdAt }}</p>
        </div>
        <button><Icon name="mdi:reply" size="16px" /> reply</button>
      </div>
      <p>
        {{ comment.text }}
      </p>

      <!-- Render replies using recursion -->
      <CommentItem
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
      />
    </div>
  </div>
</template>

<style scoped></style>
