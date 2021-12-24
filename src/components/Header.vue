<!-- Header -->
<template>
  <header class="main" :style="`justify-content:${props.title.isCon}`">
    <router-link to="/" tag="i" class="my-icon">{{props.title.iconL}}</router-link>
    <p>{{props.title.titleTXT}}</p>
    <router-link to="/" tag="i" class="my-icon">{{props.title.iconR}}</router-link>
  </header>
  <div style="height: 1rem"></div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title:Object
});

</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 3vw 5vw;
  background: #fff;
}
.icon {
  font-size: 0.46rem;
}
</style>
