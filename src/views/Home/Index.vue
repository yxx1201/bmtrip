<!-- Index 首页 -->
<template>
 <Rotation :homedatas="state.homedatas"></Rotation>
    <ul class="nav-box">
      <li class="nav-li" v-for="item in state.homedatas.data1" :key="item">
        <img :src="item.img.url" />
      </li>
    </ul>
</template>

<script setup>
import { getPageId, getHomeData } from "@/api";
import { reactive } from "@vue/reactivity";
import Rotation from '@/components/home/Rotation.vue';

const state = reactive({
  homeid: "",
  tuanid: "",
  homedatas: {},
});

console.log(state.homedatas.data1);

getPageId().then((res) => {
  // 请求首页Id
  state.homeid = res.data.nav[0].pageId;
  state.tuanid = res.data.nav[1].pageId;
  // 拿到Id请求数据
  getHomeData({ pageId: state.homeid }).then((data) => {
    // state.homedata = data.data.data;
    data.data.data.forEach((item, i) => {
      // 定义一个对象列表Key值代表homedatas内的每个数据键的名
      const key = "data" + i;
      // 为homedatas的每个键赋值
      state.homedatas[key] = item.data;
      // 拿到首页数据对象
    });
  });
});
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
      margin: .1rem 0;
      img {
        width: 3rem;
      }
      .context {
        font-size: 0.26rem;
      }
    }
  }
</style>
