import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Knowledge from 'components/knowledge.vue'
import Hello from 'components/hello.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    }
  ]
})
