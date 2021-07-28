<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from "../components/Blogs/BlogPost"
export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "WELCOME!",
        blogPost: "Mình là hehe. Chào mừng bạn đến với blog của mình. Đây là nơi mình thường xuyên chia sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của mình. Mình tin rằng, hạnh phúc đến từ những điều giản dị nhất. Hi vọng bạn sẽ tìm thấy được sự bình yên và một chút niềm vui khi đọc blog của mình.",
        welcomeScreen: true,
        photo: "minimalism",
      },
      sampleBlogPost: [
        {
          title: "This is a filter Title!",
          blogHTML: "This is blog post filter content",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a filter Title!2",
          blogHTML: "This is blog post filter content",
          blogCoverPhoto: "designed-for-everyone",
        }
      ]
    }
  }
};
</script>
