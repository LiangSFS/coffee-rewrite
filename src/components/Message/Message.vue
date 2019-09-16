<template>
    <div>
        <button @click="show = !show">
            toggle
        </button>
        <transition name="coffee-message-fade">
            <div v-if="show" class="coffee-message">
                {{text}}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'Message',
  data: () => ({
    show: false,
    text: '数据加载失败，请检查网路',
    duration: 3000,
    vm: {} // message所借用的vue对象上
  }),
  mounted () {
    this.nextTick(() => {
      setTimeout(() => {
        this.close(this.vm)
      }, this.duration)
    })
  },
  methods: {
    close (vm) {
      vm.$on('after-leave', () => {
        if (vm.$el && vm.$el.parentNode) {
          vm.$el.parentNode.removeChild(vm.$el)
        }
        vm.$destroy()
      })
    }
  }
}
</script>

<style scoped>
    .coffee-message{
        width: 400px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #fff;
        position: fixed;
        top:20px;
        left:50%;
        border-radius: 12px;
        transform: translateX(-50%);
        background-color: red;
    }
    .coffee-message-fade-enter-active, .coffee-message-fade-leave-active {
        transition: all .3s linear;
    }
    .coffee-message-fade-enter, .coffee-message-fade-leave-to {
        opacity: 0;
        top: 0;
    }
</style>
