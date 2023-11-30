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

const handleShare = () => {
  alert("Work in progress..");
};
</script>

<template>
  <div class="min-w-[400px]">
    <div
      class="w-full ml-[10px] md:ml-[20px]"
      :class="{ 'border-l border-gray-500': hasReplies }"
    >
      <!-- top -->
      <div class="flex items-center gap-2 -ml-[12px] md:-ml-[20px]">
        <img
          :src="props.comment.profileImg"
          alt=""
          class="h-6 w-6 md:h-10 md:w-10 z-10"
        />
        <p class="text-xs md:text-sm lg:text-base tracking-wider font-Karla">
          {{ props.comment.author }}
        </p>
        <p class="text-xs text-gray-500 font-Karla">
          {{ props.comment.createdAt }}
        </p>
      </div>
      <!-- message -->
      <div
        class="flex gap-2 p-2 pl-2.5 md:pl-10 md:py-2 tracking-wide text-sm md:text-base"
      >
        <div
          v-if="isEditing"
          class="flex flex-col items-start gap-2 w-full max-w-[500px]"
        >
          <textarea
            v-model="messageInput"
            class="h-20 w-full border border-slate-800 rounded-md outline-none p-2 bg-inherit text-gray-600 overflow-y-auto max-h-80"
            placeholder="Write.."
          />
          <div class="self-end">
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
      <div class="flex items-center gap-2 relative flex-wrap">
        <div
          :class="{
            'absolute top-[50%] -left-[1px] bottom-0 border-l border-gray-950':
              hasReplies,
          }"
        ></div>
        <div
          class="md:pl-4"
          :class="{ 'border-b border-gray-500 w-4 md:w-8': hasReplies }"
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
            <span class="text-xs font-light tracking-wider hidden md:block"
              >{{ props.comment.replies.length }} more replies</span
            >
          </div>
        </div>

        <div
          class="md:hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 md:px-2"
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
          class="md:hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 md:px-2"
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
          class="md:hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 md:px-2"
          @click="toggleComments"
        >
          <Icon name="iconamoon:comment-bold" size="16px" />
          <span class="text-xs font-light tracking-wider hidden md:block"
            >comment</span
          >
        </div>

        <div
          v-if="props.comment.authorId === 5 && !isEditing"
          @click="showEdit"
          class="md:hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 md:px-2"
        >
          <Icon name="material-symbols:edit-square-outline-sharp" size="16px" />
          <span class="text-xs font-light tracking-wider hidden md:block">
            edit</span
          >
        </div>
        <div
          v-if="props.comment.authorId === 5"
          @click="deleteComment(props.comment.id)"
          class="md:hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 md:px-2"
        >
          <Icon name="material-symbols:delete" size="16px" />
          <span class="text-xs font-light tracking-wider hidden md:block">
            delete</span
          >
        </div>
        <div
          @click="handleShare"
          class="md:hover:bg-gray-700 hover:cursor-pointer rounded-full flex items-center gap-1 h-8 md:px-2"
        >
          <Icon name="ic:outline-ios-share" size="16px" />
          <span class="text-xs font-light tracking-wider hidden md:block"
            >share</span
          >
        </div>
      </div>
    </div>
    <!-- comment slot -->
    <CommentForm
      v-if="isComment"
      class="pl-8 pr-4 my-4"
      @add-comment="addComment"
      @toggle-comments="toggleComments"
      :parentId="props.comment.id"
    />
    <!-- nested -->
    <div class="pl-8 pt-2 mt-4" v-if="toggleExpand">
      <CommentItem
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
      />
    </div>
  </div>
</template>

<style scoped></style>
