<!-- App -->
<template>
<div id="app" @onselectstart="false">
  <router-view #default="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"></component>
  </router-view></div>
</template>

<script setup>
</script>

<style lang="scss">
@import url("assets/scss/base.scss");
@import url("//at.alicdn.com/t/font_3050352_9228tgx60q.css");
@font-face {
  font-family: "my-icon"; /* Project id 3050352 */
  src: url("//at.alicdn.com/t/font_3050352_9228tgx60q.woff2?t=1640362388216")
      format("woff2"),
    url("//at.alicdn.com/t/font_3050352_9228tgx60q.woff?t=1640362388216") format("woff"),
    url("//at.alicdn.com/t/font_3050352_9228tgx60q.ttf?t=1640362388216")
      format("truetype");
}
.my-icon {
  font-size: 0.4rem;
  font-family: "my-icon" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  font-size: 13.333333vw;
}
body {
  font-size: 0.3rem;
}
</style>
