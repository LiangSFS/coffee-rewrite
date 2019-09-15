<template>
    <nav class="tab-bar">
        <div class="tab-item" v-for="route in routes" :key="route.path">
            <router-link :to="route.path">
                <!--<svg class="icon" aria-hidden="true">-->
                    <!--<use :[xlink:href]="route.fontName"></use>-->
                <!--</svg>-->
            </router-link>
        </div>
    </nav>
</template>

<script>
import { routes } from '../router/routes.js'

// 字体图标名
// let fontNames = ['#icon-fangzi', '#icon-location', '#icon-caidan', '#icon-wutouxiang']

export default {
  name: 'TabBar',
  data: () => ({
    routes
  })
}
</script>

<style scoped lang="less">
    .tab {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tab-item {
            flex:1 1 150px;
        }
    }
</style>
