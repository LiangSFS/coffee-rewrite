<template>
  <div class="home">
    <TopTitle title="咖啡小窝"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopTitle from '@/components/TopTitle.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TopTitle
  }
}
</script>
