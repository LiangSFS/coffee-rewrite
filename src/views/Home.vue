<template>
  <div class="home">
    <TopTitle title="咖啡小窝"/>
    <swiper :options="swiperOption" >
      <swiper-slide  v-for="slide in swiperSlides" :key="slide.id">
          <div aspectratio class="banner-img">
              <img aspectratio-content :src="slide.url" :alt="slide.alt" :title="slide.title" />
          </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="coffee-msg">
        <ul class="guide" >
            <li v-for="guide in coffeeGuids" class="guide-item" :key="guide.id">
                <div aspectratio class="icon">
                    <img aspectratio-content  :src="guide.iconUrl" alt="" />
                </div>
                <span>{{guide.title}}</span>
            </li>
        </ul>
    </div>
      <!--<img src="../assets/logo.png" />-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopTitle from '@/components/TopTitle.vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  data: () => ({
    swiperOption: {
      autoplay: {
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    swiperSlides: [
      {
        id: 0,
        title: '1',
        alt: '1',
        url: 'https://liangsfs.github.io/coffee-pictrue/home/011.jpg'
      },
      {
        id: 1,
        title: '2',
        alt: '2',
        url: 'https://liangsfs.github.io/coffee-pictrue/home/012.jpg'
      },
      {
        id: 2,
        title: '3',
        alt: '3',
        url: 'https://liangsfs.github.io/coffee-pictrue/home/013.jpg'
      }
    ],
    coffeeGuids: [
      {
        id: 0,
        iconUrl: 'https://liangsfs.github.io/coffee-pictrue/home/b1.png',
        title: '咖啡菜单'
      },
      {
        id: 1,
        iconUrl: 'https://liangsfs.github.io/coffee-pictrue/home/b2.png',
        title: '冲煮方式'
      },
      {
        id: 2,
        iconUrl: 'https://liangsfs.github.io/coffee-pictrue/home/b3.png',
        title: '记录风味'
      },
      {
        id: 3,
        iconUrl: 'https://liangsfs.github.io/coffee-pictrue/home/b4.png',
        title: '品味余香'
      }
    ]
  }),
  components: {
    HelloWorld,
    TopTitle,
    swiper,
    swiperSlide
  }
}
</script>

<style  lang="less">
    .banner-img {
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
        .icon{
            width: 76px;
            margin-bottom: 6px;
        }
        .icon {
            aspect-ratio: "1:1";
        }
        .guide-item{
            width:150px;
            display:flex;
            text-align:center;
            flex-direction: column;
            align-items:center;
            font-size: 16px;
            font-weight:600;
        }
    }
</style>
