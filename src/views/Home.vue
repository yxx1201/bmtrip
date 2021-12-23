<!-- Home -->
<template>
  <div class="header">
    <Header>
      <template v-slot:title>
        <p>首页</p>
      </template>
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: '',
  components:{
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>