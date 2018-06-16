import Vue from 'vue'
import Router from 'vue-router'
import Tabscreen  from '@/Screen/Tabscreen'
import Homescreen  from '@/Screen/Homescreen'
import Carsscreen  from '@/Screen/Carsscreen'
import Newsscreen  from '@/Screen/Newsscreen'
import Minescreen  from '@/Screen/Minescreen'
import Detailscreen from  '@/Screen/Detailscreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home',
      component:Tabscreen,
      children:[
        {
          path:'/home',
          name:'home',
          component:Homescreen
        },
        {
          path:'/cars',
          name:'cars',
          component:Carsscreen
        },
        {
          path:'/news',
          name:'news',
          component:Newsscreen
        },
        {
          path:'/mine',
          name:'mine',
          component:Minescreen
        }
      ]
    },
    {
      path:'/home/detail',
      name:'detail',
      component:Detailscreen
    }
  ]
})
