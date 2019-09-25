<template>
  <div class="about">
    <h1>This is an about page</h1>
      <button @click="lockrm">测试按钮，登录退出</button>
  </div>
</template>

<script>
// import Message from '@/components/Message/Message.vue'
import lockr from 'lockr'

export default {
  name: 'About',
  mounted () {
  //  console.log(this.$message)
    this.$message({ type: 'error', text: '用于测试, 重载页面就出现' })
  },
  methods: {
    lockrm () {
      lockr.flush()

      this.$router.push('/')
    }
  }
}
</script>

<style></style>
