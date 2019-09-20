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
                    <div v-for="listItem in productItem[1].list"  class="detail-item" :key="listItem.id">
                        <div class="back-line"></div>
                        <div aspectratio class="imgWrap">
                            <img aspectratio-content src="" alt="" />
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
    </div>
</template>

<script>
import { utils } from '../utils/list.util.js'
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

    handleScroll: null // handleScroll
  }),
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
