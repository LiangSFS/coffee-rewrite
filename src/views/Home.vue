<template>
  <div class="home">
      <!--<div class="search">-->
          <!--<input type="search"   />-->
      <!--</div>-->
      <Banner class="banner" :BannerOption="bannerOption" :BannerSlides="bannerSlides" :BannerInit="bannerInit"/>
    <div class="coffee-msg" >
        <ul class="guide">
            <li v-for="guide in coffeeGuides" class="guide-item" :key="guide.id">
                <div aspectratio class="iconCoffee">
                    <img aspectratio-content  :src="guide.iconUrl" alt="" />
                </div>
                <span>{{guide.title}}</span>
            </li>
        </ul>
    </div>
    <div class="selected" >
        <h2 class="title">
            <img class="selectIcon" src="../assets/home/selected.png"  />今日精选
        </h2>
        <!-- v-lazy-container="{selector: 'img'}"  class="swiper-lazy" -->
        <swiper  v-lazy-container="{selector: 'img'}"  :options="todaySelectOption" ref="todaySelectSwiper">
            <swiper-slide  v-for="slide in selectedSlides" :key="slide.id">
                <div  class="today-item">
                    <div aspectratio   class="today-img">
                        <img aspectratio-content :data-src="slide.img.url" :alt="slide.img.alt" :title="slide.img.title"  />
                        <!--<div class="swiper-lazy-preloader"></div>-->
                    </div>
                    <h4 class="name">{{slide.name}}</h4>
                    <p class="describe">{{slide.describe}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

      <!--<img src="../assets/logo.png" />-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

// import { utils } from '../utils/home.util.js'

import Banner from '@/components/Banner.vue'

export default {
  name: 'home',
  created () {
    this.apiGet('/coffee-json/home/data.json', {}).then((data) => {
      data = data.data
      this.bannerSlides = data.banner

      this.coffeeGuides = data.guides
      this.selectedSlides = data.selected

      this.$nextTick(() => {
        this.bannerInit = true
      })
    })

    // console.log(this, this.apiGet);
    // this.apiGet('/home', {}).then((data) => {  gitHub
    // this.apiGet('/eg/home', {}).then((data) => {  easy-mock
  },

  data: () => ({
    bannerOption: {
      init: false,
      initialSlide: 0,
      lazy: {
        loadPrevNext: true
      },
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        stopOnLastSlide: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }

    },
    bannerInit: false,
    bannerSlides: [],

    coffeeGuides: [],

    todaySelectOption: {
      freeMode: true,
      initialSlide: 0,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slidesPerView: 1.1
    },
    selectedSlides: []
  }),
  components: {
    swiper,
    swiperSlide,
    Banner
  }
}
</script>

<style scoped lang="less">
    .home {
        background-color: #efefef;
    }
    .banner{
        height:35vh;
        background-color: #efefef;
    }

    .coffee-msg{
        background-color: #efefef;
        height: 17.2vh;

    }
    .guide{
        position: relative;
        top: -4vh;
        left: 4px;
        z-index:10;
        padding: 40px 0;
        border-radius: 24px;
        background-color:#fff;
        width: 700px;
        margin:0 25px;
        height:8vh;
        display:flex;
        justify-content: space-between;
        align-items:center;
        .iconCoffee{
            width: 76px;
            margin-bottom: 6px;
        }
        .iconCoffee{
            aspect-ratio: "1:1";
        }
        .guide-item{
            flex:1 1 150px;
            display:flex;
            text-align:center;
            flex-direction: column;
            align-items:center;
            font-weight:600;
            span{
                font-size: 30px;
            }
        }
    }
    .selected{
        position: relative;
        top: -6.8vh;
        background-color: #efefef;
        padding:6px 30px 18px;
        text-align: left;
        height:33vh;
        .title{
            margin: 16px 0;
            padding-left: 44px;
            font-size: 40px;
            font-weight: 600;
            position: relative;
            .selectIcon{
                width:44px;
                position: absolute;
                top:50%;
                left:0;
                transform: translateY(-50%);
            }
        }
    }
    .today-item{
        background-color: #efefef;
        .today-img{
            width: 600px;
            margin-right:10px;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items:center;
        }
        .name{
            font-size: 20px;
            font-weight:700;
            margin: 10px 0;
        }
        .describe{
            margin: 8px 0;
            font-size: 18px;
            color:#7a7a7a
        }
        .today-img{
            aspect-ratio: "16:9";
        }
    }

</style>
