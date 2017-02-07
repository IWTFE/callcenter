// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css'
import '../static/css/style.css'
// 显示页面进度条
import NProgress from 'nprogress'
// 加载进度条样式
import 'nprogress/nprogress.css'
Vue.use(Element)

// 在路由的生命周期添加上进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
