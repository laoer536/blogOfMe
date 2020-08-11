import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
   {
      path: '/',
     redirect: '/login'
   },
    {
      path: '/login',
      name: 'Login',
      component:  () => import('../views/login/Login.vue')
    },
    {
      path: '/story',
      name: 'Story',
      component:  () => import('../views/login/Story.vue'),
    },
    {
      path: '/notice',
      name: 'Notice',
      component:  () => import('../views/login/Notice.vue'),
    },
    {
      path: '/call',
      name: 'CallMe',
      component:  () => import('../views/login/CallMe.vue'),
    },
   {
    path: '/home',     //用于路由跳转 例如router-link
    name: 'Home',      //用于渲染指定的组件  用于router-view  名字可以为汉字
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/home/Home.vue'),
   },
    {
      path: '/html',
      name: 'Html',
      component: () => import('../views/html/HtmlPage.vue')
    },
    {
      path: '/css',
      name: 'Css',
      component: () => import('../views/css/CssPage.vue')
    },
    {
      path: '/js',
      name: 'Js',
      component: () => import('../views/js/JsPage.vue')
    }
    ,
    {
      path: '/vue',
      name: 'Vue',
      component: () => import('../views/vue/VuePage.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
