import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import menu from  '@/components/menu'
import View1 from '@/views/View1.vue'
import View2 from '@/views/View2.vue'
import warn from '@/views/WarnPain.vue'
import bigTalk from '@/views/BigTalk.vue'
Vue.use(Router)

export default new Router({
  // base:'/myVueProject',
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/view1',
      component: View1
    }, {
      path: '/view2',
      component: View2
    },
    , {
      path: '/',
      component: warn
    }
    , {
      path: '/warn',
      component: warn
    },
    {
      path: '/bigTalk/:cellId',
      component: bigTalk
    }
    //  {
    //   path: '/menu',
    //   component: menu
    // }
  ]
})
