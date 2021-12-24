<!-- Home -->
<template>
  <Header
    :title="{
      isCon: 'space-between',
      iconL: '&#xec2e;',
      iconR: '&#xe86e;',
      titleTXT: '首页',
    }"
  >
  </Header>
  <router-view #default="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"></component>
  </router-view>
  <Footer></Footer>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped></style>
