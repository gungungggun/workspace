import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Scene1 from '@/components/Scene1'
import Scene2 from '@/components/Scene2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/scene1',
      name: 'Scene1',
      component: Scene1
    },
    {
      path: '/scene2',
      name: 'Scene2',
      component: Scene2
    }
  ]
})
