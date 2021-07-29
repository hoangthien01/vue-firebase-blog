<template>
  <div id="app">
    <Navbar v-show="activeNav"/>
    <router-view/>
    <Footer v-show="activeNav"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components: { Navbar , Footer },
  data() {
    return {
      activeNav: null,
    }
  },
  methods: {
    checkActiveNav() {
      if(this.$route.name == "Login" || this.$route.name == "Register" || this.$route.name == "ResetPassword") {
        this.activeNav = false
        return
      }
      this.activeNav = true
      return
    }
  },
  created() {
    this.checkActiveNav()
    
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user)
      if(user) {
        this.$store.dispatch("getCurrentUser")
      }
    });

  },
  watch: {
    $route() {
      this.checkActiveNav()
    }
  }
}
</script>
<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
  // font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.error {
  text-align: center;
  font-size: 14px;
  color: red;
}

button {
      margin-top: 20px;
      transition: ease all 0.5s;
      cursor: pointer;
      padding: 12px 24px;
      background-color: black;
      color: #fff;
      border: none;

      &:hover {
        background-color: #555555;
      }
    }



</style>
