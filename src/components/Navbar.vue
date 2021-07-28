<template>
<header>
  <nav class="container" v-show="!mobile">
    <div class="nav-links">
      <ul>
        <Tree class="menu-item" :mobileNav="false" :data="navItem" v-for="(navItem,index) in navItems" :key="index">
        </Tree>
      </ul>
    </div>
    <div class="login-register">
      <li class="menu-item" @click="$router.push('/Login')"> 
        LOGIN/REGISTER
      </li>
    </div>
  </nav>
  <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
  <transition name="mobile-nav" >
    <ul class="mobile-nav" v-show="mobileNav">
      <Tree class="menu-item" :mobileNav="true" :data="navItem" v-for="(navItem,index) in navItems" :key="index">
      </Tree>
      <li class="menu-item" @click="$router.push('/Login')"> 
        LOGIN/REGISTER
      </li>
    </ul>
  </transition>
</header>
</template>

<script>
import Tree from "../components/Tree.vue"
import menuIcon from "../assets/Icons/bars-regular.svg"
export default {
  name :"navbar",
  components: {
    menuIcon, Tree, 
  },
  data () {
    return {
      mobile: null,
      mobileNav : null,
      windowWidth: null,
      navItems : [
                {
                    content: 'HOME',
                    link: '/',
                    child : [
                    ],
                },
                {
                    content: 'BLOG',
                    link: '',
                    child : [
                      {
                        content: 'Minimalism',
                        link: '', 
                        child : [],
                      },
                      {
                        content: 'Lifestyle',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Nhật ký',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Cuộc sống ở Nhật Bản',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Cuộc sống ở Hà Nội',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Hành trình của mình',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Học ngoại ngữ',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Productivity',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Đọc sách',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Nấu ăn',
                        link: '',
                        child : [],
                      },
                      {
                        content: 'Khám phá & Du lịch',
                        link: '',
                        child : [],
                      }
                    ],
                },
                {
                    content: 'CREATE-POST',
                    link: '/CreatePost',
                    child : [],
                },
                {
                    content: 'ỦNG HỘ',
                    link: '',
                    child : [],
                },
                {
                    content: 'ABOUT ME',
                    link: '',
                    child : [],
                },
                {
                    content: '日本語',
                    link: '',
                    child : [],
                },
      ]
    }
  },
  created () {
    window.addEventListener("resize",this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 800 ) {
        this.mobile = true;
        return;
      } 
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    }
  }
}
</script>

<style lang="scss" scoped>
.link-template {
    color: #252525;
    padding: 19px 14px;
    font-size: 13px;
    text-decoration: none;
    margin: 0;
    position: relative;
    transition: .08s all linear;
    font-weight: 400;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      color: #d3b062;
    }
}


header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 70;
  background-color: #ececec;
  font-family: 'Montserrat',sans-serif;
  text-align: right;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-links {
      padding: 0 15px;

      .menu-item {
        display: inline-block;
        text-align: center;
        @extend .link-template

      }
    }
    .login-register {
      padding: 0 15px;

      .menu-item {
        display: inline-block;
        text-align: center;
        @extend .link-template
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    width: auto;
    position: absolute;
    top: 16px;
    right: 25px;
    height: 25px;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #252525 ;
    top: 0;
    left: 0;

    .menu-item {
      display: inline-block;
      text-align: left;
      width: 100%;
      color: #fff;
      @extend .link-template
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>