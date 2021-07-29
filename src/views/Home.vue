<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Xem thêm những blogs gần đây</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCard" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/Blogs/BlogPost.vue"
import BlogCard from "../components/Blogs/BlogCard.vue"
export default {
  name: "Home",
  components: { BlogPost, BlogCard },
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
      ],
      sampleBlogCard: [
        { blogTitle: "Blog Card #1", 
          blogCoverPhoto: "stock-1",
          blogDate: "July 4, 2021"
        },
        { blogTitle: "Blog Card #2", 
          blogCoverPhoto: "stock-1",
          blogDate: "July 4, 2021"
        },
        { blogTitle: "Blog Card #3", 
          blogCoverPhoto: "stock-1",
          blogDate: "July 4, 2021"
        },
        { blogTitle: "Blog Card #4", 
          blogCoverPhoto: "stock-1",
          blogDate: "July 4, 2021"
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>