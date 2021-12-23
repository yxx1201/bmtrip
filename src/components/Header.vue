<!-- Header -->
<template>
  <header class="main">
    <router-link to="/" tag="i" class="icon">&#xec2e;</router-link>
    <slot name="title"></slot>
    <router-link to="/" tag="i" class="icon">&#xe86e;</router-link>
  </header>
  <div style="height:1rem;"></div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
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
