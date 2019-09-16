<template>
    <nav class="tab-bar">
        <div class="tab-item" v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="each-link">
                <IconSvg :className="route.className" class="iconSvg" />
                {{route.title}}
            </router-link>
        </div>
    </nav>
</template>

<script>
import { routes } from '../router/routes.js'

import IconSvg from '@/components/IconSvg'
// 字体图标名
// let fontNames = ['#icon-fangzi', '#icon-location', '#icon-caidan', '#icon-wutouxiang']

export default {
  name: 'TabBar',
  data: () => ({
    routes
  }),
  components: {
    IconSvg
  }
}
</script>

<style scoped lang="less">
    .tab-bar {
        position:fixed;
        z-index:99;
        left:0;
        bottom:0;
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
</style>
