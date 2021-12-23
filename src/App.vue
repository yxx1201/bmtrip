<!-- App -->
<template>
  <div id="app">
    <router-view #default="{ Component }"> 
      <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive"></component>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<script setup></script>

<style lang="scss">
@import url("assets/scss/base.scss");
@font-face {
  font-family: "icon"; /* Project id 3050352 */
  src: url("//at.alicdn.com/t/font_3050352_63aqbn90o08.woff2?t=1640183777714")
      format("woff2"),
    url("//at.alicdn.com/t/font_3050352_63aqbn90o08.woff?t=1640183777714") format("woff"),
    url("//at.alicdn.com/t/font_3050352_63aqbn90o08.ttf?t=1640183777714")
      format("truetype");
}
.icon {
  font-family: "icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
  font-size: 13.333333vw;
}
body{
  font-size: .3rem;
}
</style>
