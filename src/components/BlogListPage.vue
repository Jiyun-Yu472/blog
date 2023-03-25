<template>
  <div
    v-for="blogItem in BlogDataList"
    :key="blogItem.number"
    @click="moveToDetailPage(blogItem.number)"
  >
    <h5>{{ blogItem.title }}</h5>
    <p>{{ blogItem.date }}</p>
  </div>
</template>

<script>
import BlogDataList from "../assets/blog";

export default {
  name: "BlogList",
  data() {
    return {
      BlogDataList,
    };
  },
  methods: {
    moveToDetailPage(number) {
      return this.$router.push(`/detail/${number}`);
    },
  },
};
</script>

<style></style>
