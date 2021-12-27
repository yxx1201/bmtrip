<!-- 中间轮播自由滑动型轮播组件 -->
<template>
  <div class="swiper-content">
    <h1 class="title-img" v-for="item in props.homedata1" :key="item">
      <img :src="item.img.url" />
    </h1>
    <Swiper :modules="state.modules" v-if="props.homedata2" id="swiper-cont">
      <SwiperSlide v-for="item in props.homedata2" :key="item">
        <img :src="item.img.url" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
export default {
  name: "Rotation",
};
</script>

<script setup>
import { defineProps } from "vue";
import { reactive } from "@vue/reactivity";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

const props = defineProps({
  homedata1: Array,
  homedata2: Array,
});

// console.log(props.homedatas);

const state = reactive({
  modules: [],
});
</script>

<style lang="scss" scoped>
.title-img {
  width: 90vw;
  margin-left: 5vw;
  padding: 0.3rem 0;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.swiper {
  width: 95vw;
  padding-right: 15vw;
  margin-left: 5vw;
  overflow: hidden;
  .swiper-slide {
    margin-right: 0.2rem !important;
    img {
      width: 100%;
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
}
</style>
