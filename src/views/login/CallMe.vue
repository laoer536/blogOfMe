<template>
  <div id="container">
    <div id="left">

    </div>


    <div id="center">
      <div id="top">
        <img src="../../assets/img/back.svg" @click="backToLogin">
      </div>

      <div class="progressContainer wow fadeInLeft" data-wow-duration="1.5s"  data-wow-offset="10" >
        <span class="title " ><h1>{{$store.state.callMe.progress1.title}}</h1></span>
        <span class="text">{{$store.state.callMe.progress1.text}}</span>
      </div>

      <div class="progressContainer wow fadeInLeft" data-wow-duration="1.5s"  data-wow-offset="10">
        <span class="title"><h1>{{$store.state.callMe.progress2.title}}</h1></span>
        <span class="text">{{$store.state.callMe.progress2.text}}</span>
      </div>

      <div class="progressContainer wow fadeInLeft" data-wow-duration="1.5s"  data-wow-offset="10">
        <span class="title"><h1>{{$store.state.callMe.progress3.title}}</h1></span>
        <span class="text">{{$store.state.callMe.progress3.text}}</span>
      </div>

      <div class="progressContainer wow fadeInLeft" data-wow-duration="1.5s"  data-wow-offset="10">
        <span class="title" ><h1>{{$store.state.callMe.progress4.title}}</h1></span>
        <div class="wow fadeInLeft" data-wow-duration="1.5s"><img src="../../assets/img/callMe/weixin.jpg"></div>
      </div>



    </div>


    <div id="right">

    </div>
  </div>
</template>

<script>

  export default {
    name: "CallMe",
    created(){
      document.title= "联系我"    //设置网页标签名称
    },
    mounted() {
      new this.$wow.WOW({
        live: true
      }).init()
    },
    methods: {
      backToLogin() {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
  #container{
    width: 100%;
    color: #333333;
    display: flex;
  }

  #left{
    position: relative;
    width: 20%;

  }

  #center{
    flex: 1;
  }

  #right{
    position: relative;
    width: 20%;

  }

  #top{
    width: 100%;
    height: 3rem;
  }

  #top>img{
    margin-top: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    cursor: pointer;
  }

  .progressContainer{
    width: 100%;
    padding-bottom: 7rem;
  }

  .progressContainer h1{
    font-size: 6rem;
  }

  .title{
    margin-top: 3.125rem;
    padding-bottom: 4.375rem;
  }

  .text{
    font-size: 4rem;
    color: #646A73;
  }

  .progressContainer div{
    width: 100%;
    height: auto;
    padding: 1.5rem;
  }

  .progressContainer img{
    max-width: 100%;
    max-height: 50%;
    object-fit: fill;
    border-radius: 2rem;
  }

  @media screen and (min-width: 610px){
    #top>img{
      display: none;
    }
  }

  @media screen and (max-width: 600px){

    #left{
      width: 5%;
    }

    #right{
      width: 5%;
    }
  }
</style>