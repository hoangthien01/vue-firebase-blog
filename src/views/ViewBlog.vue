<template>
  <div class="post-view" v-if="currentBlog">
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
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null,
      author : {},
      message : "",
      messages: [],
    }
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter(blog => {
      return blog.blogID === this.$route.params.blogID
    })
    const dataBase = await db.collection('users').doc(this.currentBlog[0].profileId)
    const dbResults = await dataBase.get()
    this.author = dbResults.data()
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
  methods : {
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