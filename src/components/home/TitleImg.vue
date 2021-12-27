<!-- 图片标题 -->
<template>
    <h1 class="title-img" v-if="list">
      <img :src="list.img.url" />
    </h1>
</template>

<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
  list: Array,
});
const list = reactive(props.list[0]);
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
</style>
