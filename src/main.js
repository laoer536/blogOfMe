import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import('wowjs/css/libs/animate.css');
import wow from 'wowjs'

import ElementUI from 'element-ui';
import '../theme/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$wow = wow

//配置全局路由守卫验证路由是否需要登录
//router.beforeEach((to, from, next) => {
  //if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
   // if (JSON.parse(sessionStorage.getItem("isLogin"))!=false && JSON.parse(sessionStorage.getItem("isLogin"))!=null) { // 判断当前是否登录
   //   next(); //如果登录了next()就表示允许跳转到要去的路由
   // }
   // else { //否则就跳转到下面的登录界面
     // next({
     //   path: '/login',
      //  query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
     // })
   // }
 // }
 // else {  //如果该路由不需要登录验证就直接允许跳转
 //   next();
 // }
//});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
