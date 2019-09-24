<template>
    <nav class="tab-bar">
        <div class="tab-item" v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="each-link">
                <IconSvg :className="route.className" class="iconSvg" />
                {{route.title}}
                <div v-if="(route.path === '/cart') && cartList.length" class="cart-msg-ball"></div>
            </router-link>
        </div>
    </nav>
</template>

<script>
import { routes } from '../router/routes.js'

import IconSvg from '@/components/IconSvg'

import { mapState } from 'vuex'
// 字体图标名
// let fontNames = ['#icon-fangzi', '#icon-location', '#icon-caidan', '#icon-wutouxiang']

export default {
  name: 'TabBar',
  data: () => ({
    routes
  }),
  computed: {
    ...mapState({
      cartList: 'shoppingCart'
    })
  },
  components: {
    IconSvg
  }
}
</script>

<style scoped lang="less">
    .tab-bar {
        position:fixed;
        left:0;
        bottom:0;
        z-index:999;
        width:750px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tab-item {
            flex:1 1 150px;
            .each-link{
                padding:14px 0;
                display:flex;
                flex-direction: column;
                align-items:center;
                color:#636b6f;
                background-color:#fff;
            }
        }
        .iconSvg{
            font-size: 40px;
            margin-bottom: 4px;
        }
        .each-link.router-link-exact-active {
            background-color: saddlebrown;
            color: #fff;
        }
    }
    .each-link{
        position: relative;
        .cart-msg-ball{
            position: absolute;
            top: -15px;
            right: 15px;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 30px;
            background-color: #f00;
        }
    }
</style>
