<template>
    <!--  **ref="swiperOption"**    动态内容数据  都必须加 ref v-lazy-container="{selector: 'img'}" -->
    <swiper    :options="BannerOption" ref="bannerSwiper" id="banner">
        <swiper-slide   v-for="slide in BannerSlides" :key="slide.id">
            <div aspectratio class="banner-img">
                <img  class="swiper-lazy" aspectratio-content :data-src="slide.url" :alt="slide.alt" :title="slide.title" />
                <div class="swiper-lazy-preloader"></div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Banner',
  props: {
    BannerOption: {
      type: Object,
      require: true
    },
    BannerSlides: {
      type: Array, // 或者 Object  和后台 约定好
      require: true
    },
    BannerInit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    BannerInit: {
      // immediate: true,   // 该回调将会在侦听开始之后被立即调用  在对象结构较大时， 无法等待 watch 遍历完所有   甚至有时deep：true
      handler: function (newVal, oldVal) {
        newVal && this.bannerswiper.init()
      }
    }
  },
  computed: {
    bannerswiper () {
      return this.$refs.bannerSwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped  lang="less">
    .banner-img{
        width: 750px;
    }
    .banner-img{
        aspect-ratio: "16:9";
    }

    //设置 swiper 点样式
    #banner/deep/ .swiper-pagination-bullet{
        width: 30px;
        height: 30px;
        display:inline-block;
        border-radius:100%;
    }
</style>
