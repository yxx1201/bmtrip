<!-- Rotation 顶部轮播组件 -->
<template>
  <div class="swiper-title">
    <Swiper
      id="swiper-title"
      :modules="state.modules"
      loop
      pagination
      effect="cards"
      slidesPerView="auto"
      :autoplay="{ disableOnInteraction: false }"
      v-if="props.homedata"
    >
      <SwiperSlide v-for="item in props.homedata" :key="item">
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
import { Autoplay, EffectCards, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

const props = defineProps({
  homedata: Object,
});

// console.log(props.homedatas);

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

}
</style>
<style lang="scss">
  .swiper-pagination-bullet {
    background: #fff;
    border-radius: 0;
    height: 2px;
    width: 6px;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
</style>