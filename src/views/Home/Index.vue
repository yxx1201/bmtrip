<!-- Index 首页 -->
<template>
  <Rotation :homedata="state.homedatas.data0"></Rotation>
  <TwoDetails :homedata="state.homedatas.data1"></TwoDetails>
  <ConRotation
    :homedata1="state.homedatas.data2"
    :homedata2="state.homedatas.data3"
  ></ConRotation>
  <template v-for="item in state.list" :key="item">
    <TitleImg :list="item" v-if="item.type != 1 "></TitleImg>
    <PlaceList :list="item" v-if="item.type == 1"></PlaceList>
  </template>
</template>

<script setup>
import { getPageId, getHomeData } from "@/api";
import { reactive } from "@vue/reactivity";
import Rotation from "@/components/home/Rotation.vue";
import ConRotation from "@/components/home/ConRotation.vue";
import PlaceList from "@/components/home/PlaceList.vue";
import TwoDetails from "../../components/home/TwoDetails.vue";
import TitleImg from "../../components/home/TitleImg.vue";

const state = reactive({
  homeid: "",
  tuanid: "",
  homedatas: {},
  list: [],
});
getPageId().then((res) => {
  // 请求首页Id
  state.homeid = res.data.nav[0].pageId;
  state.tuanid = res.data.nav[1].pageId;
  // 拿到Id请求数据
  getHomeData({ pageId: state.homeid }).then((data) => {
    // state.homedata = data.data.data;
    data.data.data.forEach((item, i) => {
      // console.log(item);
      // 定义一个对象列表Key值代表homedatas内的每个数据键的名
      const key = "data" + i;
      // 为homedatas的每个键赋值
      state.homedatas[key] = item.data;
      if (i > 3) {
        state.list.push(item.data);
      }
    });
    // 拿到首页数据对象
    // console.log(state.homedatas.data20);
  });
});
</script>

<style lang="scss" scoped>
</style>
