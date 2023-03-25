<template>
  <div>
    <h4>상세페이지: {{ blogId }}번째</h4>
    <h5>{{ getBlogData.title }}</h5>
    <p>{{ getBlogData.content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogDataList from "../assets/blog";

export default {
  name: "BlogDetail",
  data() {
    return {
      BlogDataList,
    };
  },
  computed: {
    blogId() {
      const blogId = this.$route.params.blogId;
      return blogId;
    },
    getBlogData() {
      const blogId = this.blogId;
      return this.BlogDataList[blogId];
    },
  },
};
</script>

<style></style>
