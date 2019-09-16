<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// import Message from '@/components/Message/Message.vue'

export default {
  name: 'About',
  created () {
    console.log(2, this.$message)
    this.$message({})
  }
}
</script>

<style></style>
