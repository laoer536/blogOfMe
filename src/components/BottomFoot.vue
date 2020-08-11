<template>
  <div id="footContainer">
    <div id="footWords">
      <span>{{$store.state.footWords}}</span> <br>
      <span>Let's talk @<span id="myEmail">1547698569@qq.com </span>!</span>
    </div>

    <div id="myORcodeContainer">
      <img id="QQ" class="wow bounceInUp" data-wow-duration="1s" v-show="showQq"  src="../assets/img/foot/QQ.jpg" >
      <img id="weixin" class="wow bounceInUp" data-wow-duration="1s" v-show="showWeixin" src="../assets/img/foot/weixin.jpg" >
    </div>

      <span></span>
    <div id="lastLine">
      <span id="edition"><em>@版本 {{$store.state.edition}} GitHub-laoer536</em></span>
      <span id="rightIcon"><img src="../assets/img/foot/qq-huiColor.svg" @click="qqClick"><img src="../assets/img/foot/weixin-huiColor.svg" @click= "weixinClick"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "foot",
    mounted() {
      new this.$wow.WOW({
        live: true
      }).init()
    },
    data() {
      return {
        showQq: false,
        showWeixin: false
      }
    },
    methods: {
      qqClick() {
        console.log(this.showQq);
        this.showWeixin = false;
        this.showQq = !this.showQq
      },
      weixinClick() {
        this.showQq = false;
        this.showWeixin = !this.showWeixin
      }
    },
  }
</script>

<style scoped>
  #footContainer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40rem;
    z-index: -1;
    background-color: #000000;
    padding: 8rem 5%;
  }

  #footWords{
    padding-left: 20%;
  }

  #footWords span{
    font-family: "EnglishBold";
    font-size: 4rem;
    color: #FFFFFF;
  }

  #myEmail{
    border-bottom: 2px solid #FFFFFF;
  }

  #myORcodeContainer {
    position: relative;
    height: 14rem;
  }

  #myORcodeContainer img{
    position: absolute;
    height: 10rem;
    width: 10rem;
    right: 4rem;   /*此时两张照片是重合在一起的*/
  }



  #lastLine{
    display: flex;    /* 需要在父元素加上了这个才能实现子元素的居左，居右，居上，居下*/
    align-items: center;
  }

  #edition{
    color: #BFBFBF;
  }

  #rightIcon{
      margin-left: auto;
  }

  #rightIcon img{
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 4rem;
    cursor: pointer;
  }


  @media screen and (max-width: 600px){
    #footWords{
      padding-left: 0;
    }
  }

</style>