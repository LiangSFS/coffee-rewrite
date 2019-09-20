<template>
    <div class="top-title" :style="{backgroundColor: bgColor }">
        <span  v-if="back"  @click="$router.go(-1)" class="back">{{backText}}</span>
        <span v-if="Boolean(title)" class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
  name: 'TopTitle',
  props: {
    back: { // 是否有返回按钮
      type: Boolean,
      default: true
    },
    backText: { // 返回文本
      type: String,
      default: '返回'
    },
    title: {
      type: String,
      default: '咖啡小窝'
    },
    bgColor: { // 只支持 十六进制的颜色值
      type: String,
      default: '#000',
      validator: function (value) {
        return !(value.indexOf('#') === 0 && (value.length === 4 || value.length === 7) && !(/[^0-9A-Fa-f]/.test(value)))
      }
    }
  }
}
</script>

<style scoped lang="less">
    .top-title {
        position:fixed;
        top:0;
        left:0;
        width: 750px;
        height: 100px;
        z-index: 999;
        background-color: #1b6d85;
       .back {
           font-size: 36px;
           color:#fff;
           position:absolute;
           top:50%;
           left:16px;
           transform:translateY(-50%);
       }
       .title {
           line-height:100px;
           font-weight:700;
           font-size: 50px;
           color: #fff;
       }
    }

</style>
