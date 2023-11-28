<script setup>
const props = defineProps(["comment"]);
const toggleExpand = ref(false);
// console.log(props.comment);
const isLiked = ref(false);
const isDisliked = ref(false);
const isComment = ref(false);

const hasReplies = computed(() => {
  return props.comment.replies && props.comment.replies.length > 0;
});

const toggleLikes = () => {
  isLiked.value = !isLiked.value;
};

const toggleDislikes = () => {
  isDisliked.value = !isDisliked.value;
};

const toggleComments = () => {
  isComment.value = !isComment.value;
};

const addComment = (commentObj) => {
  props.comment.replies.push(commentObj);
  toggleExpand.value = true;
};
</script>

<template>
  <div class="">
    <div
      class="w-full ml-[20px]"
      :class="{ 'border-l border-gray-500': hasReplies }"
    >
      <!-- top -->
      <div class="flex items-center gap-2 -ml-[20px]">
        <img :src="props.comment.profileImg" alt="" class="h-10 w-10 z-10" />
        <p>{{ props.comment.author }}</p>
        <p class="text-xs">{{ props.comment.createdAt }}</p>
      </div>
      <!-- message -->
      <div class="flex gap-2 pl-10 py-4">
        <p>
          {{ props.comment.message }}
        </p>
      </div>
      <!-- bottom -->
      <div class="flex items-center gap-1">
        <div
          class="w-8"
          :class="{ 'border-b border-gray-500': hasReplies }"
        ></div>
        <div v-if="hasReplies" class="z-10">
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
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
          @click="toggleLikes"
        >
          <Icon
            :name="isLiked ? 'icon-park-solid:like' : 'icon-park-outline:like'"
            size="16px"
          />
          <span
            v-if="props.comment.likes > 0"
            class="text-xs font-light tracking-wider"
            >{{ props.comment.likes }}</span
          >
        </div>

        <div
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
          @click="toggleDislikes"
        >
          <Icon
            :name="
              isDisliked
                ? 'icon-park-solid:dislike-two'
                : 'icon-park-outline:dislike'
            "
            size="16px"
          />
          <span
            v-if="props.comment.dislikes > 0"
            class="text-xs font-light tracking-wider"
            >{{ props.comment.dislikes }}</span
          >
        </div>
        <div
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
          @click="toggleComments"
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
    <!-- comment slot -->
    <CommentForm v-if="isComment" class="pl-8 my-4" @addComment="addComment" />
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
