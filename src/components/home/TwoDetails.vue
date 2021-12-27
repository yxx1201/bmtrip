<!-- 二级分类列表 -->
<template>
  <ul class="nav-box">
    <li class="nav-li" v-for="item in props.homedata" :key="item">
      <router-link :to="'/twodetail/'+item.id">
        <img :src="item.img.url" />
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { defineProps} from "vue";
const props = defineProps({
  homedata: Array,
});
setTimeout(()=>{
   props.homedata.forEach((item) => {
       item.id= item.url.substring(item.url.lastIndexOf('/')+1)
      });
},1500)
   
</script>

<style lang="scss" scoped>
.nav-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  .nav-li {
    position: relative;
    width: 2.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin: 0.1rem 0;
    img {
      width: 3rem;
    }
    .context {
      font-size: 0.26rem;
    }
  }
}

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
