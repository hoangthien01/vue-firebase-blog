<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link class="link" v-if="post.welcomeScreen" to="#">
          Login/Register<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link class="link" v-else to="#">
          View The Post<Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" :src="require(`../../assets/blogPhotos/${post.photo}.jpg`)" alt="">
      <img v-else :src="require(`../../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
    </div>
  </div>
</template>

<script>
import Arrow from "../../assets/Icons/arrow-right-light.svg"
export default {
  name: "blogPost",
  props: ["post"],
  components: { Arrow },
};
</script>

<style lang="scss" scoped>
$darkYellow: #b68723;
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
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
    @media (min-width: 700px){
      order: 1;
    }
    @media (min-width: 800px){
      flex: 2;
    }

    div{
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px){
        padding: 0 24px;
      }

      h2{
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px){
          font-size: 40px;
        }
      }
      p{
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }
      .content-preview{
        font-size: 13px;
        max-height:24px;
        width: 250px;;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link{
        padding: 20px 0 10px;
        display: inline-block;
        border-bottom: 1px solid #fff;
        text-decoration: none;
        text-transform: uppercase;
        color: #252525;
        transition: 0.5s;
        &:hover {
          color: $darkYellow;
          border-bottom: 1px solid $darkYellow;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;
    @media (min-width: 700px) {
      order: 2;
    }

    img{
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }

  .arrow {
    margin-left: 8px;
    width: 12px;
    path {
      fill: $darkYellow;
    }
  }
}
</style>
