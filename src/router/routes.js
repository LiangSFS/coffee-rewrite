/**
 *  Created by liangsfs on 2019-09-15
 */
import TabBar from '@/components/TabBar.vue'

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import(/* webpackChunkName: "home" */'../views/Home.vue')
const Theme = () => import(/* webpackChunkName: "home" */'../views/About.vue')
const list = () => import(/* webpackChunkName: "home" */'../views/About.vue')
const user = () => import(/* webpackChunkName: "home" */'../views/About.vue')

export let routes = [
  {
    path: '/home',
    name: 'home',
    components: {
      tabBar: TabBar,
      default: Home

    }
  },
  {
    path: '/theme',
    name: 'theme',
    components: {
      tabBar: TabBar,
      default: Theme

    }
  },
  {
    path: '/list',
    name: 'list',
    components: {
      tabBar: TabBar,
      default: list

    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      tabBar: TabBar,
      default: user
    }
  }
]
