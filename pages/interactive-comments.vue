<template>
  <main
    class="min-h-screen max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-950 text-white"
  >
    <div class="py-8">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <div class="flex items-start gap-4">
      <div>
        <img src="/img/user/angela.webp" alt="" class="h-10 w-10" />
      </div>
      <div
        ref="commentInput"
        contenteditable="true"
        @input="handleInput"
        class="h-20 w-96 border-2 border-slate-200 rounded-md outline-none p-2 bg-inherit text-gray-600 overflow-y-auto"
        placeholder="Write.."
      ></div>
      <button
        @click="handleSumbmit"
        class="bg-blue-500 text-white px-4 py-2 uppercase rounded-md"
      >
        send
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const comments = ref([
  {
    id: 1,
    author: "John Doe",
    profileImg: "/img/user/angela.webp",
    message:
      "This is my first comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, reprehenderit! Quam debitis laborum ipsa provident commodi dolor recusandae. Officia natus dolor delectus ullam iusto ducimus ipsam nemo placeat itaque facilis!",
    createdAt: "1 month ago",
    likes: 9,
    dislikes: 5,
    replies: [
      {
        id: 2,
        author: "Jane Doe",
        profileImg: "/img/user/anna.webp",
        message:
          "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam! Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
        createdAt: "3 weeks ago",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 2,
        author: "Jane Doe",
        profileImg: "/img/user/anna.webp",
        message:
          "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
        createdAt: "3 weeks ago",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 2,
        author: "Jane Doe",
        profileImg: "/img/user/anna.webp",
        message:
          "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
        createdAt: "3 weeks ago",
        likes: 0,
        dislikes: 0,
      },
    ],
  },
  {
    id: 3,
    author: "First John",
    profileImg: "/img/user/angela.webp",
    message:
      "This is my first comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, reprehenderit! Quam debitis laborum ipsa provident commodi dolor recusandae. Officia natus dolor delectus ullam iusto ducimus ipsam nemo placeat itaque facilis!",
    createdAt: "1 month ago",
    replies: [
      {
        id: 4,
        author: "Second John",
        profileImg: "/img/user/anna.webp",
        message:
          "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
        createdAt: "3 weeks ago",
        replies: [
          {
            id: 8,
            author: "Third John",
            profileImg: "/img/user/anna.webp",
            message:
              "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
            createdAt: "3 weeks ago",
            replies: [
              {
                id: 8,
                author: "Four John",
                profileImg: "/img/user/anna.webp",
                message:
                  "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
                createdAt: "3 weeks ago",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    author: "John Doe",
    profileImg: "/img/user/angela.webp",
    message:
      "This is my first comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, reprehenderit! Quam debitis laborum ipsa provident commodi dolor recusandae. Officia natus dolor delectus ullam iusto ducimus ipsam nemo placeat itaque facilis!",
    createdAt: "1 month ago",
  },
]);

const commentInput = ref("");

const handleInput = () => {
  commentInput.value = commentInput.innerText;
};

const handleSumbmit = () => {
  if (!commentInput.value) {
    return;
  }
  const commentObj = {
    id: Math.floor(Math.random() * 1000),
    author: "John Doe",
    profileImg: "",
    text: commentInput.value,
    createdAt: new Date(),
    replies: [], // Initialize replies for the new comment
  };
  comments.value.push(commentObj);

  // Reset
  commentInput.value = "";
};

const editComment = () => {};

const deleteComment = () => {};
</script>

<style lang="scss" scoped></style>
