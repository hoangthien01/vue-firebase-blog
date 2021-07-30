import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'


Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,

    file: null,
    blogHTML : "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    
    mobileNav : null,

    sampleBlogCards: [
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
    ],
    editPost: null,
  },
  mutations: {
    setMobileNav(state, payload) {
      state.mobileNav = payload
    },
    toggleMobileNav (state) {
      state.mobileNav = !state.mobileNav
    },
  
    updateUser(state, payload) {
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email
      state.profileFirstName = doc.data().firstName
      state.profileLastName = doc.data().lastName
      state.profileUsername = doc.data().username
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },

    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log(state.editPost)
    },
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    updateFile(state, payload) {
      state.file = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    setDefaultBlogPost (state) {
      state.blogTitle = "",
      state.blogPhotoName = "",
      state.blogHTML = "Write your blog title here..." ,
      state.file = null,
      state.blogPhotoFileURL = null,
      state.blogPhotoPreview = null
    }
  },
  actions: {
    async getCurrentUser({commit}) {
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get()
      commit("setProfileInfo", dbResults)
      commit("setProfileInitials")
      console.log(this.state.user)
    },
  },
  modules: {}
})