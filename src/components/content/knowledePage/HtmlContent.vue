<template>
  <div id="konwledgePageContainer">


    <div id="openLeftMenu" @click="drawer = true" type="primary">   <!--侧边图标加在这里 触发点开-->
      <img src="../../../assets/img/contentPage/openLeftMenu.svg">
    </div>

    <el-drawer style="margin-top: 17.6rem;"
               title="HTML"
               :size="drawerSize"
               :visible.sync="drawer"
               :direction="direction"
    >

      <el-tree
              :data="data"
              :props="defaultProps"
              accordion
              @node-click="handleNodeClick">
      </el-tree>

    </el-drawer>     <!--这个是弹出栏中的内容-->


    <div style="color: #333333; font-size: 2rem" class="wow flash" data-wow-duration="3s" data-wow-iteration="infinite"><h1>内容建设中……</h1></div>

  </div>

</template>

<script>
  export default {
    name: "HtmlContent",
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        drawerSize: '',
        data: [{
          label: '了解HTML5背景',
          children: [{
            label: 'HTML5深受欢迎的理由',
            children: [
              {
                label: 'HTNL5时代即将来临',
              },
              {
                label: '浏览器厂商对HTML5的支持'
              },
              {
                label: '可以放心使用HTML5的三个理由'
              },
              {
                label: 'HTML5需要解决的三个问题'
              },
            ]
          }]
        },
          {
            label: '掌握HTML5结构',
            children: [{
              label: '新增语义标签元素',
              children: [
                {
                  label: 'article元素',
                },
                {
                  label: 'section元素'
                },
                {
                  label: 'nav元素'
                },
                {
                  label: '其他语义元素'
                },
              ]
            }]
          },
          {
            label: '掌握ECMAScript',
            children: [{
              label: '新增语法',
              children: [
                {
                  label: '使用for-of循环',
                },
                {
                  label: 'let与const关键字'
                },
                {
                  label: '箭头函数'
                },
                {
                  label: '解构赋值'
                },
              ]
            }]
          },
          {
            label:'建设中'
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    created() {
      var size = window.screen.width
      console.log(size)
      if (size < 600) {
        return  this.drawerSize = '50%'
      }
      else {
        return   this.drawerSize = '30%'
      }
    },
    mounted() {
      new this.$wow.WOW({
        live: true
      }).init()
    },
    methods: {

      handleNodeClick(data) {
        console.log(data);

      }
    }
  }
</script>

<style scoped>

  #openLeftMenu{
    position: fixed;
    top: 47%;
    left: 0;
    z-index: 9;    /*使图标固定在屏幕左边 显示在最上层*/
  }

  #openLeftMenu img{
    height: 5rem;
    width: 5rem;
  }

  #konwledgePageContainer{
    margin-top: 20rem;
    margin-bottom: 38rem;
    padding-left: 20%;
    padding-right: 20%;
    width: 100%;
    height: 80rem;
    background-color: #FFFFFF;
  }


  @media screen and (max-width: 600px) {
    #konwledgePageContainer{
      padding-right: 5%;
      padding-left: 5%;
    }


  }

</style>