/**
 *  Created by liangsfs on 2019-09-15
 */
import TabBar from '@/components/TabBar.vue'
import TopTitle from '@/components/TopTitle.vue'

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
    title: '主页',
    className: 'fangzi',
    components: {
      topTitle: TopTitle,
      tabBar: TabBar,
      default: Home

    }
  },
  {
    path: '/theme',
    name: 'theme',
    title: '主题',
    className: 'location',
    components: {
      topTitle: TopTitle,
      tabBar: TabBar,
      default: Theme

    }
  },
  {
    path: '/list',
    name: 'list',
    title: '菜单',
    className: 'caidan',
    components: {
      topTitle: TopTitle,
      tabBar: TabBar,
      default: list

    }
  },
  {
    path: '/user',
    name: 'user',
    title: '我的',
    className: 'wutouxiang',
    components: {
      topTitle: TopTitle,
      tabBar: TabBar,
      default: user
    }
  }
]
