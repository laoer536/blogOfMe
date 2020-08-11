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
    name: "VueContent",
    data() {
      return {
        drawer: false,
        direction: 'ltr',
        drawerSize: '',
        data: [{
          label: 'vue基础语法1',
          children: [{
            label: '插值操作',
            children: [
              {
                label: 'Mustache语法',
              },
              {
                label: '取消响应之v-once'
              },
              {
                label: '解析变量之v-pre'
              },
              {
                label: '显示变量之v-text'
              },
            ]
          }]
        },
          {
            label: 'vue基础语法2',
            children: [{
              label: '动态绑定属性',
              children: [
                {
                  label: 'v-bind的基本使用',
                },
                {
                  label: 'v-bind的对象语法'
                },
                {
                  label: '动态绑定style'
                },
                {
                  label: '实例'
                },
              ]
            }]
          },
          {
            label: 'vue基础语法3',
            children: [{
              label: '计算属性',
              children: [
                {
                  label: '计算属性的基本使用',
                },
                {
                  label: '计算属性的复杂操作'
                },
                {
                  label: '计算属性的setter和getter'
                },
                {
                  label: '计算属性和methods对比'
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