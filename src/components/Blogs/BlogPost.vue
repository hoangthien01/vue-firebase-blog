<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link v-if="post.welcomeScreen" to="#">
          Login/Register<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else to="#">
          View The Post<Arrow class="arrow arrow-light" />
        </router-link>
      </div>
      <div class="blog-photo">
        <img v-if="post.welcomeScreen" :src="require(`../../assets/blogPhotos/${post.photo}.jpg`)" alt="">
        <img v-else :src="require(`../../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// import Arrow from "../../assets/Icons/arrow-right-light.svg"
export default {
  name: "blogPost",
  props: ["post"],
  // components: { Arrow },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  @media (min-width: 768px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 768px){
      order: 1;
      flex: 3;
    }
  }
}
</style>
