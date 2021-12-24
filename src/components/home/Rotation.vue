<!-- Rotation 顶部轮播组件 -->
<template>
  <Swiper
    :modules="state.modules"
    loop
    pagination
    effect="cards"
    slidesPerView="auto"
    :autoplay="{ disableOnInteraction: false }"
    v-if="props.homedatas.data0"
  >
    <SwiperSlide v-for="item in props.homedatas.data0" :key="item">
      <img :src="item.img.url" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
export default {
  name: "Rotation",
};
</script>

<script setup>
import { defineProps } from "vue";
import { reactive } from "@vue/reactivity";
import { Autoplay, EffectCards, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

const props = defineProps({
  homedatas: Object,
});

console.log(props.homedatas);

const state = reactive({
  modules: [Autoplay, EffectCards, Pagination],
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 90vw;
  margin: 0 5vw;
  overflow: hidden;
  .swiper-slide {
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
