<template>
  <div id="app" >
      <router-view  name="TopTitle" :title="$route.meta.title" />
      <router-view  />
      <router-view  name="TabBar" />
  </div>
</template>

<style lang="less">
body{
    margin: 0;
}
*{
    outline: none; //选中框
}
li {
    list-style:none;
}
a {
    text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-blur{
    filter: blur(4px);
}

.clear-fix::after {
    content: '';
    display: block;
    width: 0;
    height:0;
    clear:both;
}

[aspectratio] {
    position: relative;
    &::before {
        content: '';
        display: block;
        width: 1px;
        margin-left: -1px;
        height: 0;
    }
}
[aspectratio-content] {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
}
img {
    content: normal !important;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
