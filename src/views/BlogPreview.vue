<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <div class="back" @click="$router.push('/CreatePost')">
        <i class="fas fa-angle-left"></i>
        Back
      </div>
      <h2>{{ this.blogTitle }}</h2>
      <img :src="blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;

  .container {
    max-width: 1000px;
    padding: 60px 25px;

    .back {
      font-size: 18px;
      margin-bottom: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover {
        opacity: 0.6;
      }

      i {
        font-weight: 300;
        font-size: 25px;
        margin-right: 3px;
      }
    }
  }
  .ql-editor {
    padding: 0;
  }
  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
    text-align: center;
  }
  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>