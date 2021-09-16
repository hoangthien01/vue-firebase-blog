<template>
  <div class="post-view" v-if="currentBlog">
    <div class="toggle-edit">
      <span>Toggle Editing Post</span>
      <input type="checkbox" v-model="activeEditPost" :checked="activeEditPost" @click="editPost">
    </div>
    <div class="icons hehe" v-bind:class="{showIcons: activeEditPost}">
      <div @click="editBlog" class="icon">
        <Edit class="edit" />
      </div>
      <div @click="deletePost" class="icon">
        <Delete class="delete" />
      </div>
    </div>

    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <h4>Author: {{this.author.firstName }} {{this.author.lastName}}</h4>
      <div class="blogCoverPhoto">
        <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      </div>
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
      <div class="comment-input">
        <textarea type="text" placeholder="writer your comments" rows="3" v-model="message"> </textarea>
        <button @click="sendMessage">Send</button>
      </div>
      <div class="list-comments">
        <div v-for="(message,index) in messages" :key="'index'+index" class="comment">
          <div class="info">
            <span>{{message.firstName.match(/(\b\S)?/g).join("") + message.lastName.match(/(\b\S)?/g).join("")}}</span>
            <div>
              <h3>{{message.firstName}} {{message.lastName}}</h3>
              <p>{{new Date(message.createdAt).toLocaleString("en-us", { dateStyle: "long" })}}</p>
            </div>
          </div>
          <p>{{message.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase/firebaseInit'
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
  name: "ViewBlog",
  components: { Edit, Delete },
  data() {
    return {
      currentBlog: null,
      author : {},
      message : "",
      messages: [],
      activeEditPost: true
    }
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter(blog => {
      return blog.blogID === this.$route.params.blogID
    })
    const dataBase = await db.collection('users').doc(this.currentBlog[0].profileId)
    const dbResults = await dataBase.get()
    this.author = dbResults.data()
    console.log(dbResults.data())
    db.collection("messages").where("messageInfo.blogId","==",this.$route.params.blogID)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.messages.push(doc.data().messageInfo);
        });
        this.messages.sort((a,b) => {
          return parseInt(a.createdAt) - parseInt(b.createdAt)
        })
    })
  },
  computed: { 
    // editPost: { 
    //   get() {
    //     return this.$store.state.editPost;
    //   },
    //   set(payload) {
    //     this.$store.commit("toggleEditPost", payload)
    //   }
    // },
    // activeEditPost() {
    //   return this.$store.state.editPost;
    // }
  },
  methods : {
    editPost() {
      
    },
    deletePost() {
      this.$store.dispatch("deletePost", this.currentBlog[0].blogID)
      console.log("deletePost")
    },
    editBlog() {
      this.$router.push({ name: "EditBlog", params: { blogID: this.currentBlog[0].blogID } });
      console.log("editPost")
    },
    async sendMessage() {
      const messageInfo = {
        'userUID': this.$store.state.profileId,
        'blogId' : this.currentBlog[0].blogID,
        'firstName': this.$store.state.profileFirstName,
        'lastName' : this.$store.state.profileLastName,
        'text': this.message,
        'createdAt': Date.now(),
      }
      db.collection("messages").add({messageInfo})
      .then(() => {
          this.message = null 
          this.messages.push(messageInfo);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-edit {
  display: flex;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 20px;

  span {
    margin-right: 16px;
  }
  //Toggle checkbox
input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: #fff;
  outline: none;
  width: 55px;
  height: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  top: 0;
  right: 0;
  background: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input:checked[type="checkbox"]:before {
  background: #f3f3f3;
  right: 32px;
}
}
.showIcons {
  display: none;
}
.icons {
  position: absolute;
  top: 100px;
  right: 10px;
  z-index: 10;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    width: 35px;
    height: 35px;
    border: 1px solid #252525;
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

.post-view {
  h2{
    text-align: center;
    font-weight: normal;
  }
  h4{
    color: gray;
    text-align: center;
    margin: 20px auto;
    font-weight: 300;
  }

  .comment-input {
    padding: 20px;
    margin-top: 40px;

    @media (max-width:900px) {
      padding: 0;
    }

    textarea {
      padding: 10px 20px;
      flex: 1;
      outline: none;
      font-size: 18px;
      width: 100%;
    }

    button {
      margin: 15px 0 0;
      padding: 15px 24px;
    }
  }

  .list-comments {
    margin-top: 20px;

    .comment {
      margin: 40px 0;

      .info {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        span {
          width: 50px;
          height: 50px;
          display: block;
          background-color: #000;
          border-radius: 50%;
          margin-right: 10px;
          line-height: 50px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
}
</style>