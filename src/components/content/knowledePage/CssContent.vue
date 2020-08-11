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
    name: "CssContent",
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        drawerSize: '',
        data: [{
          label: 'CSS3概述',
          children: [{
            label: '概要介绍',
            children: [
              {
                label: 'CSS3是什么',
              },
              {
                label: 'CSS3历史'
              },
              {
                label: 'CSS3能做什么'
              },
              {
                label: '模块与模块化结构'
              },
            ]
          }]
        },
          {
            label: 'CSS3选择器',
            children: [{
              label: '选择器概述',
              children: [
                {
                  label: '属性选择器',
                },
                {
                  label: '伪元素选择器'
                },
                {
                  label: '伪类选择器'
                },
                {
                  label: '循环使用样式'
                },
              ]
            }]
          },
          {
            label: '文字与字体相关样式',
            children: [{
              label: '给文字添加阴影',
              children: [
                {
                  label: 'text-show使用',
                },
                {
                  label: '阴影的模糊半径'
                },
                {
                  label: '阴影的颜色'
                },
                {
                  label: '指定多个阴影'
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
        location.reload()
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