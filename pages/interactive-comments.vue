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
    <CommentForm @addComment="addComment" />
  </main>
</template>

<script setup>
import { ref } from "vue";

const comments = ref([
  {
    id: 1,
    author: "First John",
    profileImg: "/img/user/angela.webp",
    message:
      "This is my first comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, reprehenderit! Quam debitis laborum ipsa provident commodi dolor recusandae. Officia natus dolor delectus ullam iusto ducimus ipsam nemo placeat itaque facilis!",
    createdAt: "1 month ago",
    likes: 4,
    dislikes: 9,
    replies: [
      {
        id: 2,
        author: "Second John",
        profileImg: "/img/user/anna.webp",
        message:
          "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
        createdAt: "3 weeks ago",
        likes: 3,
        dislikes: 2,
        replies: [
          {
            id: 3,
            author: "Third John",
            profileImg: "/img/user/anna.webp",
            message:
              "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
            createdAt: "3 weeks ago",
            likes: 8,
            dislikes: 5,
            replies: [
              {
                id: 4,
                author: "Four John",
                profileImg: "/img/user/anna.webp",
                message:
                  "Replying to John's comment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quisquam!",
                createdAt: "3 weeks ago",
                likes: 86,
                dislikes: 57,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
]);

const addComment = (commentObj) => {
  comments.value.push(commentObj);
};

const editComment = () => {};

const deleteComment = () => {};
</script>

<style lang="scss" scoped></style>
