<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// import Message from '@/components/Message/Message.vue'

export default {
  name: 'About',
  mounted () {
  //  console.log(this.$message)
    this.$message({ type: 'error', text: '用于测试, 重载页面就出现' })
  }
}
</script>

<style></style>
