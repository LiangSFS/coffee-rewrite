<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-' + className"></use>
    </svg>
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    className: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="less">
    //字体图标 运用 svg   symbol方式引入
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
