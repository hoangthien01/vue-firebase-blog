<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null,
    }
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter(blog => {
      return blog.blogID === this.$route.params.blogID
    })
  }
}
</script>

<style lang="scss" scoped>
.post-view {
  h2{
    text-align: center;
  }
  h4{
    color: gray;
    text-align: center;
    margin: 20px auto;
    font-weight: 300;
  }
}
</style>