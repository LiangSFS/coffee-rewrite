<template>
    <transition name="coffee-message-fade">
        <div v-if="show" :class="['coffee-message', type]">
            {{text}}
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Message',
  data: () => ({
    show: false,
    text: '数据加载失败，请检查网路',
    duration: 3000,
    type: 'waring'
  })
}
</script>

<style scoped lang="less">
    .coffee-message{
        width: 400px;
        padding: 20px 10px;
        text-align: center;
        position: fixed;
        top:20px;
        left:50%;
        z-index: 9999;  // 添加 z-index  层级 保证在最上层
        border-radius: 12px;
        transform: translateX(-50%);
        color: #fff;
    }
    .warning{
        background-color: orange;
    }
    .error{
        background-color: red;
    }
    .success {
        background-color: green;
    }
    .coffee-message-fade-enter-active, .coffee-message-fade-leave-active {
        transition: all .3s linear;
    }
    .coffee-message-fade-enter, .coffee-message-fade-leave-to {
        opacity: 0;
        top: 0;
    }
</style>
