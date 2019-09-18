<template>
    <div  class="theme">
        <div aspectratio v-lazy-container="{selector: 'img'}" v-for="item in themeList" :key="item.id" class="theme-item">
            <a @click="itemDescribe(item.swiperApi)" aspectratio-content class="modal">
                <IconSvg className="aixin" />
                <span>{{item.des}}</span>
            </a>
            <img aspectratio-content   :data-src="item.img.url"  :alt="item.img.alt" :title="item.img.title">
        </div>
        <ModalCover animation="slide-up"  :start="isStartModal"  @click.native="close">
            <template #close >
                <IconSvg class="modal-close" className="shuangxiajiantou"/>
            </template>
        </ModalCover>
    </div>
</template>

<script>
import IconSvg from '@/components/IconSvg.vue'
import ModalCover from '@/components/ModalCover.vue'

export default {
  name: 'theme',
  created () {
    this.apiGet('/coffee-json/theme/list.json', {}).then(data => {
      data = data.data
      this.themeList = data
    })
  },
  data: () => ({
    themeList: [],
    isStartModal: false // 是否开始 modal 出现
  }),
  methods: {
    itemDescribe (apiUrl) {
      this.isStartModal = true
      // console.log(this.$refs, this)
      // this.apiGet(apiUrl, {}).then((data) => {
      //   console.log(data)
      // })
    },
    close (ev) {
      // ev.preventDefault();
      this.isStartModal = false
      // (isStartModal = false) && ( $refs.theme.className = 'theme')
      // this.$refs.theme.className = 'theme content'
      return false
    }
    // triggerClose() {
    //
    // }
  },
  components: {
    IconSvg,
    ModalCover
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
            .modal{
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
    .modal-close{
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
        font-weight: 800;
        color: white;
        cursor: pointer;
        animation: moveArrow 1.6s infinite;
    }
    @keyframes moveArrow {
        from{
            top: 30px;
        }
        to{
            top:60px;
            transform: scale(1.4) translateX(-50%);
        }
    }
</style>
