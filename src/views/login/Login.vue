<template>
  <div id="loginContainer">
    <img id="musicPlay" src="../../assets/img/musicPlay.svg" alt="" @click="musicPlay">
    <span id="music" @click="musicPlay">
     <el-tooltip class="item" effect="dark" content="或许你也想起舞？" placement="bottom">
      <p>Music</p>
    </el-tooltip>
    </span>

    <span id="loginBar">
      <span id="story" @click="storyClick">故事</span>
      <span id="content" @click="contendClick">交流</span>
      <span id="notice"  @click="noticeClick">注意</span>
    </span>
    <video id="loginVideo" src="../../assets/video/loginBackground.mp4"  autoplay loop muted></video>
  <div class="login-box">
    <img src="../../assets/img/logo.jpg">
    <form>
      <div class="user-box">
        <input type="text" id="name" required="" autocomplete="off">
        <label >请输入博主姓名</label>
      </div>
      <a @click="loginBlog" >
        确认
      </a>
    </form>
  </div>
    <span id="edition"><em>@版本 {{$store.state.edition}} bylaoer536 for前端技术</em></span>
  </div>
</template>

<script>
  export default {
    name: "Login",
    created() {
      document.title = "登录"  //用vue生命周期函数，实现设置网页标题
    },
    methods: {
    musicPlay() {
      var elem = document.getElementById("loginVideo");
      var boolean = elem.muted;   //只要video元素中添加了这个muted属性 那么muted属性默认就是true
      elem.muted = !boolean;  //实现每次执行这个函数时，改变一次状态  即用户第一次点击播放，第二次点击就会关闭音乐
    },
      storyClick() {
      const {href} = this.$router.resolve({path: '/story'});
        window.open(href,'_blank')   //路由对象的resolve方法可以获取路由的href、location、route等信息， 使用window.open即可打开新的窗口 blank决定了跳转到新的标签页
      },
      contendClick() {
        const {href} = this.$router.resolve({path: '/call'});
        window.open(href,'_blank')
      },
      noticeClick() {
        const {href} = this.$router.resolve({path: '/notice'});
        window.open(href,'_blank')
      },
      loginBlog() {
        var text = document.getElementById("name").value;
        console.log(text);
        if (text == "刘杰") {
          this.$store.dispatch('aIsLogin', {
            message: '正在进行登陆',
            success: () => {
              console.log('已经完成isLogin的状态改变，改变为true')
            }
          });
          this.$router.push('/home')
        }
        else  {
          alert("输入错误")
        }

      }
    }
  }
</script>

<style scoped>
  #loginContainer{
    width: 100%;
    height: auto;
    color: #FFFFFF;
  }

  #music{
    position: absolute;
    font-size: 14px;
    letter-spacing: 3px;
    left: 65px;
    top: 26px;
    cursor: pointer ;
    transition: .5s;
  }

  #music:hover{
    color: #FFC7C7;
  }

  #loginBar{
    position: absolute;
    letter-spacing: 5px;
    right: 65px;
    top: 20px;
  }

  #loginBar>span{
    margin-right: 30px;   /*设定间距*/
    font-size: 14px;
    cursor: pointer ;
  }

  #story:hover{
    color: #FFC7C7;
  }

  #content:hover{
    color: #FFC7C7;
  }

  #notice:hover{
    color: #FFC7C7;
  }

  video{
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .login-box img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-top: 110px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .login-box .user-box label {
    position: absolute;
    top: 110px;
    left: 0;
    padding: 10px 0;
    font-size: 17px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }

  .login-box .user-box input:focus ~ label,   /*波浪号的作用是针对兄弟元素，选择波浪号之后的元素，如果是类名，就是选择该类类名的元素，这里是选择元素  这里波浪号就相当于链接了两个兄弟元素 ，前面一个元素的伪类事件的出发，影响的是另外一个兄弟元素，而本生无影响*/
  .login-box .user-box input:valid ~ label {
    top: 70px;
    left: 0;
    font-size: 14px;  /*位置上移动20px 左边不变，因为原来也是0px  颜色由原来的白色变为绿色 字体由原来的16px变为12px*/
  }

  .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 10px;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;  /* 看懂这个动画的关键，就是这里，如果你删除这丫行overflow代码  你就可以看到下面动画的真实表现*/
    transition: .5s;    /*让hover的样式过渡更加柔和 即定义了一个transition-duration=0.5s*/
    margin-top: 30px;
    letter-spacing: 5px
  }

  .login-box a:hover {
    background: #24A19C;
    color: #fff;
    border-radius: 5px;
  }

  img{
    position: absolute;
    top: 2px;
    width: 60px;
    height: 60px;
    cursor: pointer;
  }

  #edition{
    position: absolute;
    bottom: 0.5rem;
    left: 5%;
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    #loginBar{
      right: 4px;
      letter-spacing: 3px;
    }

    #loginBar>span{
      margin-right: 10px;   /*设定间距*/
      font-size: 13px;
    }

    #musicPlay{
      display: none;
    }

    #music{
      display:none;
    }

  }

</style>