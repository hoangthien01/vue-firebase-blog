<template>
  <li class="nav-item" @click="clickNavItem">
    <span >{{ data.content }}</span>
    <treeContents :mobileNav="mobileNav" :children="data.child" 
      :class="[(data.child.length !== 0 && mobileNav === false ) ? 'sub-nav' : 'sub-nav-mobile']"
      v-show="subNavMobile | mobileNav === false"
    >
    </treeContents>
  </li>
</template>

<script>
import treeContents from "./Tree-content.vue";
export default {
  name: "tree",
  props: ["data" , "mobileNav"],
  components: {
    treeContents,
  },
  data () {
    return {
      subNavMobile : false
    }
  },
  methods: {
    clickNavItem() {
      this.$router.push(this.data.link)
    }
  }
};
</script>

<style lang="scss" scoped>

.nav-item:hover .sub-nav {
  display: block;
}

.sub-nav {
  display: none;
  position: absolute;
  top: 90%;
  left: calc(-109px + 50%);
  list-style: none;
  width: 218px;
  background-color: #fff;
  border: 2px solid #d3b062;
  color: #000;

  &::before {
    content: "";
    left: calc(50% - 5px);
    position: absolute;
    z-index: 1;
    background-color: #fff;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    border: 1px solid #d3b062;
    top:-5px;
  }
}

.sub-nav-mobile {
  position: relative;
  list-style: none;
  color: #fff;
}

</style>