<template>
    <div  class="theme">
        <div aspectratio v-lazy-container="{selector: 'img'}" v-for="item in themeList" :key="item.id" class="theme-item">
            <a @click="itemDescribe(item.swiperApi)" aspectratio-content class="modal">
                <IconSvg className="aixin" />
                <span>{{item.des}}</span>
            </a>
            <img aspectratio-content   :data-src="item.img.url"  :alt="item.img.alt" :title="item.img.title">
        </div>
        <ModalCover animation="slide-up" class="theme-modal"  v-drag="{close}" :start="isStartModal" >
            <template #close >
                <IconSvg class="modal-close" className="shuangxiajiantou"/>
            </template>
            <template #default>
                <div class="modal-content" id="modal-content">
                    <swiper   :options="themeOption" ref="themeSwiper">
                        <swiper-slide  v-for="slide in themeSlides" :key="slide.id">
                            <div class="slide-item">
                                <div class="item-content">
                                    <h5>{{slide.headLine}}</h5>
                                    <div aspectratio class="imgWrap">
                                        <img aspectratio-content class="swiper-lazy" :data-src="slide.img.url" :alt="slide.img.alt"  :title="slide.img.title" />
                                    </div>
                                    <p>{{slide.des}}</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </template>
        </ModalCover>
    </div>
</template>

<script>
import IconSvg from '@/components/IconSvg.vue'
import ModalCover from '@/components/ModalCover.vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'theme',
  created () {
    this.apiGet('/coffee-json/theme/list.json', {}).then(data => {
      data = data.data
      this.themeList = data
    })
    // let resizeEvt =   'orientationchange' in window ? 'orientationchange' : 'resize';
    // window.addEventListener(resizeEvt,() => {
    //   this.$nextTick( () => {
    //     this.themeSwiper.init()
    //   } )
    // })
  },
  data: () => ({
    themeList: [],
    isStartModal: false, // 是否开始 modal 出现
    themeOption: {
      init: false,
      initialSlide: 0,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 1.1,
      centeredSlides: true,
      lazy: {
        loadOnTransitionStart: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    },
    themeSlides: []
  }),
  directives: {
    drag: {
      bind (el, binding) {
        let currentEl = el

        // console.log(this)
        currentEl.ontouchstart = function (ev) {
          ev = ev || window.ev

          let y = ev.changedTouches[0].clientY - currentEl.offsetTop

          document.ontouchmove = function (ev) {
            ev = ev || window.ev

            let moveTop = ev.changedTouches[0].clientY - y
            if (moveTop > 30) {
              binding.value.close()
            }
            return false
          }
          document.ontouchup = function (ev) {
            ev = ev || window.ev
            document.ontouchmove = document.ontouchup = null
          }

          return false
        }
      },
      unbind (el) {
        let currentEl = el

        currentEl.ontouchstart = null
      }
    }
  },
  methods: {
    itemDescribe (apiUrl) {
      // console.log(apiUrl)

      // console.log(this.$refs, this)
      this.apiGet(apiUrl, {}).then((data) => {
        // console.log(data)
        data = data.data
        this.themeSlides = data
        this.isStartModal = true
        this.$nextTick(() => {
          this.themeSwiper.init()
          // this.themeSwiper.pagination.update()
        })
      })
    },
    close (ev) {
      this.isStartModal = false
      setTimeout(() => {
        this.themeSlides = []
      }, 600) // 600ms Modal层动画过渡时间
      return false
    }
  },
  computed: {
    themeSwiper () {
      return this.$refs.themeSwiper.swiper
    }
  },
  components: {
    IconSvg,
    ModalCover,
    swiper,
    swiperSlide
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
            .modal:active{
                color: indianred;

            }

        }
        .theme-item{
            aspect-ratio: "3:2"
        }
    }

    .slide-item{
        margin:0  20px;
        background-color: #fff;
        border-radius: 30px;
        padding: 20px;
        .item-content{
            display: flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin: 30px;
            border: 3px solid #000;
            border-radius: 30px;
            padding: 20px 10px;
        }
        h5{
            font-size: 50px;
            margin: 30px 0;
        }
    }
    //设置 swiper 点样式
    #modal-content/deep/ .swiper-pagination-bullet{
        width: 20px;
        height: 20px;
        display:inline-block;
    }

    .imgWrap {
        width: 400px;
    }
    .imgWrap {
        aspect-ratio: "3:5"
    }
    .theme-modal{
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .modal-content {
        width: 750px;
        margin-top: 30px;
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
<style scoped lang="postcss">
    @svg border-1px{
        @rect {
            width:100%;
            height: 100%;
            fill:none;
            stroke: var(--color, #000);
            stroke-width:1px;
        }
    }
   .theme .item-content{
       background-image: svg(border-1px);
    }
</style>
