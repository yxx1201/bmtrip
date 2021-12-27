<!-- Header -->
<template>
  <header class="main">
    <section>
      <slot name="iconL"></slot>
    </section>
    <p>{{ props.title }}</p>
    <section>
      <slot name="iconR"></slot>
    </section>
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
  title: String,
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 3vw 5vw;
  background: #fff;
}
.icon {
  font-size: 0.46rem;
}
span{
  display: block;
  width: 20px;
}
</style>
