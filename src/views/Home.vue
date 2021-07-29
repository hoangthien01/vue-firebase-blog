<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Xem thêm những blogs gần đây <Arrow class="arrow"/></h3>
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
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
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
          blogCoverPhoto: "stock-2",
          blogDate: "July 4, 2021"
        },
        { blogTitle: "Blog Card #3", 
          blogCoverPhoto: "stock-3",
          blogDate: "July 4, 2021"
        },
        { blogTitle: "Blog Card #4", 
          blogCoverPhoto: "stock-4",
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
    display: block;
    background-color: #fff;
    width: fit-content;
    padding: 10px 35px;
    font-weight: 300;
    font-size: 26px;
    margin-bottom: 32px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: black;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    &:hover .arrow{
      transform: translateX(15px);
    }
  }
  .arrow {
    width: 16px;
    transition: 0.4s;
  }
}
</style>