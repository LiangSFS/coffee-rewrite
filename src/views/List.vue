<template>
    <div class="list" id="coffee-list">
        <aside>
            <ul class="list-category">
                <li @click="changeIndex(index, title[0])" v-for="(title, index) in categoryTitle" class="cate-item" :key="index"><a  :class="['title-list', currentIndex ===index?'active':'']" >{{title[1]}}</a></li>
            </ul>
        </aside>
        <div class="products">
            <div class="product-title">{{currentProductList}}</div>
            <div v-for="(productItem, index) in categoryList" class="product-item" :key="index">
                <div  :id="'coffee-' + productItem[0].toLowerCase()" class="item-title">
                    <h4>{{productItem[1].title}}</h4>
                    <div class="des back-line">
                        <span>{{productItem[1].des}}</span>
                    </div>
                </div>
                <div v-lazy-container="{ selector: 'img' }" class="product-list" >
                    <div v-for="listItem in productItem[1].list"  class="detail-item" @click="detailDescribe(listItem)" :key="listItem.id">
                        <div class="back-line"></div>
                        <div aspectratio class="imgWrap">
                            <img aspectratio-content :data-src="listItem.img.url" :alt="listItem.img.alt" :title="listItem.img.title" />
                        </div>
                        <div class="product-detail">
                            <h5>{{listItem.name}}</h5>
                            <p>{{listItem.des}}</p>
                            <span class="price">￥{{listItem.price}}</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <ModalCover animation="slide-left" class="list-modal"  v-drag="{close}" :start="isStartModal" >
            <template #close >
                <IconSvg class="modal-close" className="shuangxiajiantou"/>
            </template>
            <template #default>
                <div class="header">商品详情</div>
                <div class="modal-content" id="modal-content">
                    <div aspectratio class="headImg">
                        <img aspectratio-content :src="modalContent.img.url" :alt="modalContent.img.alt" :title="modalContent.img.title">
                    </div>
                    <h5 class="name">{{modalContent.name}}</h5>
                    <p class="des">{{modalContent.des}}</p>
                    <div @touchstart.stop  class="detail-text">
                        <table>
                            <tr><th>规格</th><td><span class="active">小杯</span></td><td><span>中杯</span></td><td><span>大杯</span></td></tr>
                            <tr><th>温度</th><td><span>冰</span></td><td><span class="active">常温</span></td></tr>
                            <tr><th>糖</th><td><span>无糖</span></td><td><span class="active">单糖</span></td></tr>
                            <tr><th>奶</th><td><span class="active">无奶</span></td><td><span>单份奶</span></td><td><span>双份奶</span></td></tr>
                        </table>
                        <p v-if="modalContent.detailInfo">{{modalContent.detailInfo}}</p>
                        <p v-else>暂无该产品的介绍信息！！！</p>
                    </div>
                    <div class="buttons">

                    </div>
                </div>
            </template>
        </ModalCover>
    </div>
</template>

<script>
import { utils } from '../utils/list.util.js'

import ModalCover from '../components/ModalCover.vue'
import IconSvg from '../components/IconSvg.vue'
export default {
  name: 'List',
  created () {
    this.apiGet('/coffee-json/list/data.json', {}).then((data) => {
      data = data.data
      this.categoryList = Object.entries(data)
    })
  },
  mounted () {
    // scroll 监听函数
    // 绑定 防抖函数  防抖延时 100ms
    this.handleScroll = utils.throttle(utils.handleScroll.bind(this), 100)
    document.addEventListener('scroll', this.handleScroll, false)
  },
  data: () => ({
    categoryList: [],
    currentIndex: 0,

    isStartModal: false, // 是否要显示弹窗
    modalContent: { img: {} }, // 商品详情
    handleScroll: null // handleScroll
  }),
  directives: {
    drag: {
      bind (el, binding) {
        let currentEl = el

        // console.log(this)
        currentEl.ontouchstart = function (ev) {
          ev = ev || window.ev

          let x = ev.changedTouches[0].clientX - currentEl.offsetLeft

          document.ontouchmove = function (ev) {
            ev = ev || window.ev

            let moveLeft = ev.changedTouches[0].clientX - x
            if (moveLeft > 30) {
              binding.value.close()
            }
          }
          document.ontouchup = function (ev) {
            ev = ev || window.ev
            document.ontouchmove = document.ontouchup = null
          }
        }
      },
      unbind (el) {
        let currentEl = el

        currentEl.ontouchstart = null
      }
    }
  },
  methods: {
    changeIndex (index, elmId) {
      this.currentIndex = index

      // 获取对应元素的offsetTop
      elmId = '#coffee-' + elmId.toLowerCase()
      // console.log(elmId, document.querySelector(elmId).offsetTop)

      let scrollTop = document.querySelector(elmId).offsetTop
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      })
    },
    detailDescribe (productDetail) {
      this.modalContent = productDetail
      this.$nextTick(() => {
        this.isStartModal = true
      })
    },
    close () {
      this.isStartModal = false
    }
  },
  computed: {
    categoryTitle () {
      return this.categoryList.map((item) => {
        return [ item[0], item[1].title ]
      })
    },

    currentProductList () {
      let cateList = this.categoryList.map((item) => {
        return item[1].title
      })
      let curIndex = this.currentIndex
      return cateList[curIndex]
    }
  },
  components: {
    ModalCover,
    IconSvg
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<style scoped lang="less">
   .list{
       padding-left: 240px;
       aside{
           position: fixed;
           left:0;
           top:100px;
           width: 240px;
           height: 84vh;
           background-color: #efefef;
       }
       .products{
           background-color:#DDE;
           position: relative;
           min-height: 100vh;
           margin-bottom: 100px;
           .item-title{
               display: flex;
               flex-direction: column;
               align-items: flex-start;
               h4{
                   margin: 20px 20px 20px 30px;
                   font-weight: 800;
                   font-size: 36px;
               }
               .des{
                   width:100%;
                   text-align:left;
               }
               .des>span{
                   padding:0 30px;
                   background-color:#dde;
               }
           }

           .product-title{
               position: fixed;
               top:100px;
               left:240px;
               width: 100%;
               text-align:left;
               z-index: 10;
               padding: 20px 0 20px 30px;
               background-color: #fff;
               font-size: 36px;
               font-weight: 800;

           }
       }

       .detail-item{
           display: flex;
           justify-content:flex-start;
           align-items:center;
           min-height: 195px;
           margin:15px;
           padding-bottom: 15px;
           position: relative;
           .back-line{
               position: absolute;
               left:0;
               bottom:0;
               width:100%;
               height:1px;
               overflow:hidden;
           }
           .imgWrap{
               width: 180px;
               margin:0 10px;
               background-color: darkcyan;
               border-radius:10px;
               overflow: hidden;
           }
           .imgWrap{
               aspect-ratio: "1:1";
           }
           .product-detail{
               margin-right: 20px;
               padding-bottom:10px;
               text-align: left;
               h5{
                   margin:12px 24px 10px 0;
                   font-size: 32px;
                   font-weight:600;
               }
               p{
                   margin:0 20px  60px 0;
                   font-size: 30px;
                   color:#8C8C8C;
               }
               span{
                   font-size: 24px;
                   color:#ff0000;

               }
           }
       }
   }
   .list-category{
       height:100%;
       margin:0;
       padding:0;
       display:flex;
       flex-direction:column;
       align-items:center;
       li{
           width:100%;
       }

       .title-list {
           padding: 20px 0;
           padding-left: 10px;
           text-align:left;
           display: block;
           font-size: 40px;
           color:#616464;
           background-color: #efefef;
           &.active{
               background-color:#fff;
               font-weight: 700
           }
       }
   }
   .list-modal{
       display:flex;
       justify-content: center;
       align-items: center;
       background-color: rgba(255, 255, 255, .96);
       .modal-close{
           font-weight: 700;
           font-size: 30px;
           animation: moveLeftArrow 1.6s infinite;
       }
   }
   .header{
       position: absolute;
       top: 60px;
       left:50%;
       font-size: 50px;
       font-weight:700;
       transform:translateX(-50%);
   }
   #modal-content{
       width: 600px;
       height:70vh;
       border-radius: 30px;
       background-color: #e3facb;
       position: relative;
       overflow: hidden;
       .headImg{
           aspect-ratio: "17:10"
       }
       .name{
           position: absolute;
           left: 30px;
           top: 180px;
           font-size: 40px;
           z-index: 10;
           color:#fff;
       }
       .des{
           position: absolute;
           left: 30px;
           top: 280px;
           font-size: 26px;
           z-index:10;
           color:#fff;
       }
       .detail-text{
           height: 52%;
           overflow:hidden;
           overflow-y: scroll;
           table{
               margin: 20px;
               font-size: 34px;
               th{
                   text-align:left;
                   padding: 10px;
               }
               td{
                   padding:10px;
                   text-align:center;
               }
               span{
                   cursor: pointer;
                   text-align:center;
                   display: block;
                   padding: 10px 18px;
                   background-color:#fff;
                   border-radius: 34px;
               }
               span.active{
                   background-color: #d7cebf;
                   color: #fff;
               }

           }
           p{
               border-top: 2px solid #ccc;
               border-bottom: 2px solid #ccc;
               padding: 30px 0;
               margin: 0 24px;
               text-indent:2em;
               text-align:left;
               font-size: 34px;
               white-space: normal;
               word-wrap: break-word;
           }
       }
   }
   @keyframes moveLeftArrow {
       from{
           transform: translateX(-200%) rotate(-90deg) ;
       }
       to{
           transform: translateX(-80%) rotate(-90deg) scale(1.4);
       }
   }

</style>
<style scoped lang="postcss">
    @svg border-bottom{
        @rect{
            width: 100%;
            height: 100%;
            fill: transparent;
            stroke: var(--color, #ccc);
            stroke-width: 1px;
            stroke-dasharray: 136%,  180%;
            stroke-dashoffset: -180%;
        }
    }
    @svg background-line{
        @rect{
            width: 100%;
            height:50%;
            fill:transparent;
            stroke:var(--color, #ccc);
            stroke-width: 1px;
            stroke-dasharray: 144%,  200%;
            stroke-dashoffset: 200%;
        }
    }
    @svg product-border-bottom{
        @rect{
            width: 100%;
            height:200%;
            fill:transparent;
            stroke:var(--color, #ccc);
            stroke-width: 1px;
        }
    }

    .cate-item>a {
        background-image: svg(border-bottom);
    }

    .cate-item:nth-last-child(1)>a{
        background-image: none;
    }

    .product-item .back-line {
        background-image: svg(background-line);
    }

    .product-list .detail-item .back-line {
        background-image: svg(product-border-bottom);
    }
    .product-list .detail-item:nth-last-child(1) .back-line{
        background-image: none;
    }
</style>
