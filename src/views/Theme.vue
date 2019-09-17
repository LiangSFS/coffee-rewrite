<template>
    <div  class="theme">
        <div aspectratio v-for="item in themeList" :key="item.id" class="theme-item">
            <a @click="itemDescribe(item.swiperApi)" aspectratio-content class="model">
                <IconSvg className="aixin" />
                <span>{{item.des}}}</span>
            </a>
            <img aspectratio-content :src="item.img.url"  :alt="item.img.alt" :title="item.img.title">
        </div>
    </div>
</template>

<script>
import IconSvg from '@/components/IconSvg.vue'

export default {
  name: 'theme',
  created () {
    this.apiGet('/coffee-rewrite/theme/list.json', {}).then(data => {
      data = data.data
      this.themeList = data
    })
  },
  data: () => ({
    themeList: []
  }),
  methods: {
    itemDescribe (apiUrl) {
      this.apiGet(apiUrl, {}).then((data) => {
        console.log(data)
      })
    }
  },
  components: {
    IconSvg
  }
}
</script>

<style scoped lang="less">
    .theme{
        padding: 0 15px;
        display:flex;
        flex-direction:column;
        align-items:center;
        .theme-item{
            width: 700px;
            margin: 10px;
            font-size: 60px;
            .model{
                background-color: rgba(0, 0, 0, .2);
                z-index: 10;
                display: flex;
                flex-direction: column;
                align-items:center;
                justify-content:center;
                color:#c3c3c3;
                span{
                    font-size: 30px;
                    color: #fff;
                    margin-top: 20px;
                }
            }

        }
        .theme-item{
            aspect-ratio: "3:2"
        }
    }
</style>
