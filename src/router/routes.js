/**
 *  Created by liangsfs on 2019-09-15
 */
import TabBar from '@/components/TabBar.vue'
import TopTitle from '@/components/TopTitle.vue'

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import(/* webpackChunkName: "home" */'../views/Home.vue')
const Theme = () => import(/* webpackChunkName: "theme" */'../views/Theme.vue')
const list = () => import(/* webpackChunkName: "list" */'../views/List.vue')
const cart = () => import(/* webpackChunkName: "cart" */'../views/Cart.vue')
const user = () => import(/* webpackChunkName: "user" */'../views/User.vue')
const test = () => import(/* webpackChunkName: "test" */'../views/About.vue')

export let routes = [
  {
    // path: '/coffee-rewrite/home',  gitHub
    path: '/home',
    name: 'home',
    title: '主页',
    meta: {
      requireAuth: true,
      title: '主页'
    },
    className: 'fangzi',
    components: {
      TopTitle: TopTitle,
      TabBar: TabBar,
      default: Home

    }
  },
  {
    // path: '/coffee-rewrite/theme', gitHub
    path: '/theme',
    name: 'theme',
    title: '主题',
    meta: {
      requireAuth: true,
      title: '主题'
    },
    className: 'location',
    components: {
      TopTitle: TopTitle,
      TabBar: TabBar,
      default: Theme

    }
  },
  {
    // path: '/coffee-rewrite/list', gitHub
    path: '/list',
    name: 'list',
    title: '菜单',
    meta: {
      requireAuth: true,
      title: '菜单'
    },
    className: 'caidan',
    components: {
      TopTitle: TopTitle,
      TabBar: TabBar,
      default: list

    }
  },
  {
    // path: '/coffee-rewrite/user',  gitHub
    path: '/cart',
    name: 'cart',
    title: '购物车',
    meta: {
      requireAuth: true,
      title: '购物车'
    },
    className: 'gouwuche',
    components: {
      TopTitle: TopTitle,
      TabBar: TabBar,
      default: cart
    }
  },
  {
    // path: '/coffee-rewrite/user',  gitHub
    path: '/user',
    name: 'user',
    title: '我的',
    meta: {
      requireAuth: true,
      title: '我的'
    },
    className: 'wutouxiang',
    components: {
      TopTitle: TopTitle,
      TabBar: TabBar,
      default: user
    }
  },
  {
    // path: '/coffee-rewrite/user',  gitHub
    path: '/test',
    name: 'test',
    title: '测试',
    meta: {
      requireAuth: true,
      title: '测试'
    },
    className: 'ceshi1',
    components: {
      TopTitle: TopTitle,
      TabBar: TabBar,
      default: test
    }
  }
]
