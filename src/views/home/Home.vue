<template>
  <div id="homeContainer">
    <home-top-bar></home-top-bar>
    <div id="setWhiteBackgroundToHiddenFoot">
    <div id="homeVideoContainer">
      <video src="../../assets/video/inHomeAboutMe.mp4" poster controls></video>
      <div id="aspectsWords">那么我有什么可以奉上？</div>

      <!--电脑上面显示-->
    </div>

      <div class="introduction wow fadeInLeft" data-wow-duration="1.5s">
        <div class="title"><h1>{{$store.state.home.progress1.title}}</h1></div>
        <div class="text">{{$store.state.home.progress1.text}}</div>
      </div>

      <div class="introduction wow fadeInLeft" data-wow-duration="1.5s">
        <div class="title"><h1>{{$store.state.home.progress2.title}}</h1></div>
        <div class="text">{{$store.state.home.progress2.text}}</div>
      </div>

      <div class="introduction wow fadeInLeft"  data-wow-duration="1.5s">
        <div class="title"><h1>{{$store.state.home.progress3.title}}</h1></div>
        <div class="text">{{$store.state.home.progress3.text}}</div>
      </div>

      <div class="introduction wow fadeInLeft"  data-wow-duration="1.5s">
        <div class="title"><h1>{{$store.state.home.progress4.title}}</h1></div>
        <div class="text">{{$store.state.home.progress4.text}}</div>
      </div>


        <div id="laoHuo" style="display:flex; justify-content: center">
        <span><img class="wow bounceIn" data-wow-duration="1.5s" @click="goHtml" src="../../assets/img/home/HTML.svg"><br><b>HTML</b></span>
        <span><img class="wow bounceIn" data-wow-duration="1.5s" @click="goCss" src="../../assets/img/home/CSS.svg"><br><b>CSS</b>  </span>
        <span><img class="wow bounceIn" data-wow-duration="1.5s" @click="goJs" src="../../assets/img/home/js.svg"><br><b>JS</b></span>
        <span><img class="wow bounceIn" data-wow-duration="1.5s" @click="goVue" src="../../assets/img/home/vue.svg"><br><b>vue</b></span>
        </div>


    </div>


    <bottom-foot></bottom-foot>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import BottomFoot from '../../components/BottomFoot.vue'
import HomeTopBar from "../../components/content/HomeTopBar";
export default {
  name: 'Home',
  components: {
    HomeTopBar,
    BottomFoot
  },
  created() {
    document.title = "首页"
  },
  mounted() {
    new this.$wow.WOW({
      live: true
    }).init()
  },
  methods: {
    goCss() {
      this.$router.push('/css')
    },
    goJs() {
      this.$router.push('/js')
    },
    goHtml() {
      this.$router.push('/html')
    },
    goVue() {
      this.$router.push('/vue')
    }
  }
}
</script>


<style scoped>

  #homeVideoContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20rem;
  }

  #setWhiteBackgroundToHiddenFoot{
    margin-bottom: 38rem;
    background-color: #FFFFFF;
  }

  #homeVideoContainer video{
    width: 70%;
    height: 30%;
  }

  #aspectsWords{
    margin-top: 4rem;
    padding-top: 3rem;
    padding-bottom: 4rem;
    color: #333333;
    font-size: 6rem;
    font-weight: 700;
  }


  #aspectsImgsContainer span{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .introduction{
    padding-right: 20%;
    padding-left: 20%;
    padding-bottom: 4rem;
    margin-top: 5rem;
  }

  .introduction .title h1{
    color: #333333;
    font-size: 5rem;
  }

  .introduction .text{
    font-size: 3rem;
    color: #646A73;
  }

  #laoHuo{
    padding-bottom: 3rem;
  }

    span{
      text-align: center;
    }

    b{
      font-size: 3rem;
    }

    img{
      margin-top: 3rem;
      height: 16rem;
      width: 16rem;
      cursor:pointer;
  }

  @media screen and (max-width: 600px) {


    /*#aspectsImgsContainer{
      display: none;
    }*/
    #aspectsWords{
      font-size: 4rem;
    }

    .introduction{
      padding-right: 10%;
      padding-left: 10%;
    }

    .introduction .title h1{
      color: #333333;
      font-size: 18px;
    }

    .introduction .text{
      font-size: 14px;
      color: #646A73;
    }

     #laoHuo{
       flex-direction: column;   /*在手机和平板上以列展示*/
     }

    #homeVideoContainer {
      margin-top: 17rem;
    }


    #homeVideoContainer video{

      width: 100%;
      height: auto;
    }

  }

</style>