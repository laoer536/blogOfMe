<template>
  <div id="topBarContainer">
    <span id="left" @click="goHome"><slot name="logo"></slot></span>
    <span id="name"><slot name="myName"></slot></span>
    <slot name="title"></slot>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    mounted() {
      new this.$wow.WOW({
        live: true
      }).init()
    },
    methods: {
      goHome() {
        this.$router.replace('/home')
      }
    }
  }
</script>

<style scoped>

  #topBarContainer{
    display: flex;
    width: 100%;
    background-color: #24A19C;
    padding: 5rem 5% 6rem 5%;
    position: fixed;
    z-index: 10;
    top: 0;
    box-shadow: 0 2px 2px rgba(87, 96, 111,0.5);
  }

  #left{
    cursor: pointer;
  }

  #left img{
    margin-top: 1rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }

  /*#right{
    display: flex;
    align-items: center;
    margin-left: auto;  !*让元素在盒子中居右*!
    height: auto;
    width: 6rem;

  }*/

  #name{
    font-family: "EnglishBold";
    font-size: 2rem;
    margin-top: auto;
    margin-left: 3rem;
    padding-bottom: 0.8rem;
  }

  #topBarContainer>div{
    font-family: "EnglishBold";
    font-size: 3rem;
    color: #333333;
    height: 5rem;
    padding-top: 1rem;
    margin-left: auto;
    border-bottom: 2px solid #191919;
  }


  @media screen and (min-width: 640px) {
    #topBarContainer div{
      width: 10%;
    }
  }



</style>