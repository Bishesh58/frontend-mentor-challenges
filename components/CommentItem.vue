<script setup>
const props = defineProps(["comment"]);
const toggleExpand = ref(true);
console.log(props.comment);

const hasReplies = computed(() => {
  return "replies" in props.comment;
});
</script>

<template>
  <div class="">
    <div
      class="w-full ml-[20px] -mt-8"
      :class="{ 'border-l rounded-bl-lg pb-8': hasReplies }"
    >
      <!-- first row -->
      <div class="flex items-center gap-2 -ml-[20px]">
        <img :src="props.comment.profileImg" alt="" class="h-10 w-10 z-10" />
        <p>{{ props.comment.author }}</p>
        <p class="text-xs">{{ props.comment.createdAt }}</p>
      </div>
      <div class="flex gap-2 pl-10 py-4">
        <p>
          {{ props.comment.message }}
        </p>
      </div>
      <div class="flex items-center gap-1 pl-8">
        <div
          v-if="props.comment.replies && props.comment.replies.length > 0"
          class="z-10"
        >
          <div v-if="toggleExpand" @click="toggleExpand = !toggleExpand">
            <Icon name="ic:round-remove-circle-outline" size="16px" />
          </div>
          <div
            v-else
            class="flex items-center gap-2"
            @click="toggleExpand = !toggleExpand"
          >
            <Icon name="material-symbols:add-circle-outline" size="16px" />
            <span class="text-xs font-light tracking-wider"
              >{{ props.comment.replies.length }} more replies</span
            >
          </div>
        </div>

        <div
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full grid place-items-center h-8 w-8"
        >
          <Icon name="icon-park-outline:like" size="16px" />
        </div>

        <div
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full grid place-items-center h-8 w-8"
        >
          <Icon name="icon-park-outline:dislike" size="16px" />
        </div>
        <div
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
        >
          <Icon name="iconamoon:comment-bold" size="16px" />
          <span class="text-xs font-light tracking-wider">comment</span>
        </div>
        <div
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
        >
          <Icon name="ic:outline-ios-share" size="16px" />
          <span class="text-xs font-light tracking-wider">share</span>
        </div>
      </div>
    </div>
    <!-- nested -->
    <div class="pl-8 py-2" v-if="toggleExpand">
      <CommentItem
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
      />
    </div>
  </div>
</template>

<style scoped></style>
