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




</style>
