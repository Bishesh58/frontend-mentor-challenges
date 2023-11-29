<script setup>
const props = defineProps(["comment"]);
const store = useCommentStore();

const toggleExpand = ref(true);
const isLiked = ref(false);
const isDisliked = ref(false);
const isComment = ref(false);
const isEditing = ref(false);
const messageInput = ref(props.comment.message);

const hasReplies = computed(() => {
  return props.comment.replies && props.comment.replies.length > 0;
});

const toggleLikes = (commentId) => {
  //toggle icon
  isLiked.value = !isLiked.value;
  //if liked ++ else --
  if (isLiked.value) {
    store.updateLikes(commentId, "increment");
    //user can't like & dislike at the same time
    if (isDisliked.value) {
      store.updateDislikes(commentId, "decrement");
      isDisliked.value = false;
    }
  } else {
    store.updateLikes(commentId, "decrement");
  }
};

const toggleDislikes = (commentId) => {
  isDisliked.value = !isDisliked.value;
  if (isDisliked.value) {
    store.updateDislikes(commentId, "increment");
    //user can't like & dislike at the same time
    if (isLiked.value) {
      store.updateLikes(commentId, "decrement");
      isLiked.value = false;
    }
  } else {
    store.updateDislikes(commentId, "decrement");
  }
};

const toggleComments = () => {
  isComment.value = !isComment.value;
  isEditing.value = false;
};

const showEdit = () => {
  isEditing.value = true;
  isComment.value = false;
};

const addComment = (parentId, commentObj) => {
  store.addComment(parentId, commentObj);
};

const deleteComment = (commentId) => {
  store.deleteComment(commentId);
};

const updateComment = (commentId) => {
  store.updateComment(commentId, messageInput.value);
  isEditing.value = false;
};

const cancelEditing = () => {
  isEditing.value = false;
  messageInput.value = props.comment.message;
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
        <div v-if="isEditing" class="flex flex-col items-end gap-2">
          <textarea
            v-model="messageInput"
            class="h-20 w-96 border border-slate-800 rounded-md outline-none p-2 bg-inherit text-gray-600 overflow-y-auto max-h-80"
            placeholder="Write.."
          />
          <div>
            <button
              @click="updateComment(props.comment.id)"
              class="bg-blue-500 text-white text-xs px-2 py-1 uppercase rounded-md"
            >
              update
            </button>
            <button
              @click="cancelEditing"
              class="bg-blue-500 text-white text-xs px-2 py-1 uppercase rounded-md ml-2"
            >
              cancel
            </button>
          </div>
        </div>
        <p v-else>
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
          @click="toggleLikes(props.comment.id)"
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
          @click="toggleDislikes(props.comment.id)"
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
          v-if="props.comment.authorId === 5 && !isEditing"
          @click="showEdit"
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
        >
          <Icon name="material-symbols:edit-square-outline-sharp" size="16px" />
          <span class="text-xs font-light tracking-wider"> edit</span>
        </div>
        <div
          v-if="props.comment.authorId === 5"
          @click="deleteComment(props.comment.id)"
          class="hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 px-2"
        >
          <Icon name="material-symbols:delete" size="16px" />
          <span class="text-xs font-light tracking-wider"> delete</span>
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
    <CommentForm
      v-if="isComment"
      class="pl-8 my-4"
      @add-comment="addComment"
      @toggle-comments="toggleComments"
      :parentId="props.comment.id"
    />
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
