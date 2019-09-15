<template>
  <div class="home">
    <TopTitle title="咖啡小窝"/>
    <swiper   :options="bannerOption" >
      <swiper-slide   v-for="slide in bannerSlides" :key="slide.id">
          <div aspectratio class="banner-img">
              <img aspectratio-content :src="slide.url" :alt="slide.alt" :title="slide.title" />
          </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="coffee-msg">
        <ul class="guide" >
            <li v-for="guide in coffeeGuids" class="guide-item" :key="guide.id">
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
        <swiper :options="todaySelectOption" >
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
import TopTitle from '@/components/TopTitle.vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
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
    bannerSlides: [
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
    ],

    todaySelectOption: {
      freeMode: true,
      slidesPerView: 1.1
    },
    selectedSlides: [
      {
        id: 0,
        img: {
          title: '1',
          alt: '1',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Allan Lesch',
        describe: 'Maxime dolorem'

      },
      {
        id: 1,
        img: {
          title: '2',
          alt: '2',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Dennis Funk',
        describe: 'Iusto omnis adi'

      },
      {
        id: 2,
        img: {
          title: '3',
          alt: '3',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Zachary Sawayn',
        describe: 'Non est odit ra'

      },
      {
        id: 3,
        img: {
          title: '4',
          alt: '4',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Elvis Herman',
        describe: 'Necessitatibus '

      },
      {
        id: 4,
        img: {
          title: '5',
          alt: '5',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Mervin Bruen',
        describe: 'Temporibus blan'

      },
      {
        id: 5,
        img: {
          title: '6',
          alt: '6',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Ms. Emelia Kohler',
        describe: 'Quis facilis qu'

      },
      {
        id: 6,
        img: {
          title: '7',
          alt: '7',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Mrs. Liliane Carter',
        describe: 'Est quaerat ut '

      },
      {
        id: 7,
        img: {
          title: '8',
          alt: '8',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Lindsey Dickinson',
        describe: 'A suscipit itaq'

      },
      {
        id: 8,
        img: {
          title: '9',
          alt: '9',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Rusty Macejkovic',
        describe: 'Vel porro tempo'

      },
      {
        id: 9,
        img: {
          title: '10',
          alt: '10',
          url: 'https://liangsfs.github.io/coffee-pictrue/home/timg.jpg'
        },
        name: 'Arvid Nader',
        describe: 'Vel sunt magnam'

      }
    ]
  }),
  components: {
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
