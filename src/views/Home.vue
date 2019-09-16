<template>
  <div class="home">
    <swiper :options="bannerOption" >
      <swiper-slide   v-for="slide in bannerSlides" :key="slide.id">
          <div aspectratio class="banner-img">
              <img aspectratio-content :src="slide.url" :alt="slide.alt" :title="slide.title" />
          </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="coffee-msg">
        <ul class="guide" >
            <li v-for="guide in coffeeGuides" class="guide-item" :key="guide.id">
                <div aspectratio class="iconCoffee">
                    <img aspectratio-content  :src="guide.iconUrl" alt="" />
                </div>
                <span>{{guide.title}}</span>
            </li>
        </ul>
    </div>
    <div class="selected">
        <h2 class="title">
            <img class="selectIcon" src="../assets/home/selected.png"  />今日精选
        </h2>
        <swiper  :options="todaySelectOption" >
            <swiper-slide  v-for="slide in selectedSlides" :key="slide.id">
                <div  class="today-item">
                    <div aspectratio class="today-img">
                        <img aspectratio-content :src="slide.img.url" :alt="slide.img.url" :title="slide.img.url" />
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

export default {
  name: 'home',
  created () {
    // console.log(this, this.apiGet);
    // this.apiGet('/home', {}).then((data) => {  gitHub
    this.apiGet('/eg/home', {}).then((data) => {
      data = data.data
      this.bannerSlides = data.banner
      this.coffeeGuides = data.guides
      this.selectedSlides = data.selected
    })
  },
  data: () => ({
    bannerOption: {
      autoplay: {
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    bannerSlides: [],

    coffeeGuides: [],

    todaySelectOption: {
      freeMode: true,
      slidesPerView: 1.1
    },
    selectedSlides: []
  }),
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style  lang="less">
    .banner-img{
        width: 750px;
    }
    .banner-img{
        aspect-ratio: "16:9";
    }
    //设置 swiper 点样式
    span.swiper-pagination-bullet{
        width: 30px;
        height: 30px;
        display:inline-block;
    }

    .guide{
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding:4px 0;
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
            font-size: 16px;
            font-weight:600;
        }
    }
    .selected{
        background-color: #efefef;
        padding:6px 30px 18px;
        text-align: left;
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
