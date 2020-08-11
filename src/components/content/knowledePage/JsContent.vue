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
    name: "JsContent",
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        drawerSize: '',
        data: [{
          label: '无处不在的JavaScript',
          children: [{
            label: '理解JS语言',
            children: [
              {
                label: 'JS是如何发展的',
              },
              {
                label: 'JS核心语言特性'
              },
              {
                label: 'JS引擎核心要素'
              },
              {
                label: 'JS开发中的实践'
              },
            ]
          }]
        },
          {
            label: 'JS的运行',
            children: [{
              label: '运行时的页面构建过程',
              children: [
                {
                  label: '生命周期概览',
                },
                {
                  label: '页面构建阶段'
                },
                {
                  label: '事件处理'
                },
                {
                  label: '小结'
                },
              ]
            }]
          },
          {
            label: '理解函数',
            children: [{
              label: '定义与参数',
              children: [
                {
                  label: '回电函数',
                },
                {
                  label: '函数作为对象'
                },
                {
                  label: '函数定义'
                },
                {
                  label: '函数的实参和形参'
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