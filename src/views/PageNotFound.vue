<template>
  <div id="page-not-found">
     <h1>404</h1>
     <h2>Page not found</h2>
     <router-link :to="{name: 'Home'}">
        <ArrowRightLight class="arrow-right-light"/> Back to homepage
      </router-link>
  </div>
</template>

<script>

import ArrowRightLight from '../assets/Icons/arrow-right-light.svg'

export default {
   components: {ArrowRightLight }
}
</script>

<style lang="scss" scoped>
#page-not-found {
   height: calc(100vh - 200px);
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}

h1 {
   font-weight: 800;
   font-size: 90px;
   margin: 0;
}

h2 {
      margin: -13px 0 40px 0;
      font-weight: 300;
      text-align: center;
}

a {
   display: flex;
   justify-content: center;
   align-items: center;
   color: black;
   .arrow-right-light {
      width: 13px;
      margin-right: 8px;
      transform: scaleX(-100%);
      transition: transform ease .2s;
   }
   @media(max-width: 900px) {
      font-size: 15px;
      text-align: center;
      
      .arrow-right-light {
         margin-right: 4px;
         width: 10px;
      }
   }
   
   &:hover > .arrow-right-light {
      transform: scaleX(-100%) translateX(5px);;
   }

}




</style>