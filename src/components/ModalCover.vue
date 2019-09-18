<template>
    <transition :name="'modal-cover-' + animation">
        <div v-show="start" class="modal-cover">
            <slot name="close" ></slot>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'ModalCover',
  props: {
    animation: {
      type: String,
      default: 'slide-up'
    },
    start: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
   .modal-cover {
       width: 750px;
       height: 100vh;
       position: fixed;
       top:0;
       left:0;
       z-index: 1000;  //盖住 TopTitle  TabBar 组件
       background: rgba(0, 0, 0, .4);
       display: flex;
       justify-content: center;
       align-items: center;
       cursor: pointer;
   }
   .modal-cover-slide-up-enter-active, .modal-cover-slide-up-leave-active {
      transition: top  .6s cubic-bezier(0,.28,.72,.94);
   }
   .modal-cover-slide-up-enter, .modal-cover-slide-up-leave-to {
       top: 100vh;
   }
</style>
