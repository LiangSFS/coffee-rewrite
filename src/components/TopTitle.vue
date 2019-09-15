<template>
    <div class="top" :style="{backgroundColor: bgColor }">
        <span  v-if="back" class="back">{{backText}}</span>
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
      default: ''
    },
    bgColor: { // 只支持 十六进制的颜色值
      type: String,
      default: '#1b6d85',
      validator: function (value) {
        return !(value.indexOf('#') === 0 && (value.length === 4 || value.length === 7) && !(/[^0-9A-Fa-f]/.test(value)))
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
    .top {
        position:relative;
        height: 100px;
        background-color: #1b6d85;
       .back {
           color:#fff;
           position:absolute;
           top:50%;
           left:4px;
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
