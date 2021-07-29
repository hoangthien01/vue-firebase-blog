<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <Edit class="edit" />
      </div>
      <div class="icon">
        <Delete class="delete" />
      </div>
    </div>

    <img
      :src="require(`../../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on: {{ post.blogDate }}</h6>
      <router-link class="link" to="#">
        View The Post <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../../assets/Icons/arrow-right-light.svg";
import Edit from "../../assets/Icons/edit-regular.svg";
import Delete from "../../assets/Icons/trash-regular.svg";

export default {
  name: "blogCard",
  props: ["post"],
  components: { Arrow, Edit, Delete },
};
</script>

<style lang="scss" scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  min-height: 420px;
  cursor: pointer;
  transition: 0.5s ease all;

  &hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s;

      &:hover {
        background-color: #252525;

        .edit, .delete {
          path {
            fill: #fff;
          }
        }
      }
      .edit, .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
      &:nth-child(1) {
        margin-right: 8px;
      }
    }
  }

  img {
    display: block;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
  .info{
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #252525;
    h4{
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }
    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }
    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      padding-bottom: 4px;
      transition: 0.3s;
    }
  }
}
</style>
