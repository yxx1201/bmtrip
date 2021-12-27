<!--  -->
<template>
  <div class="two-detail">
    <Header :title="state.title">
      <template v-slot:iconL>
        <a class="my-icon" @click="quit">&#xeb15;</a>
      </template>
    </Header>
    <section class="img-box" v-if="state.titleImg.img">
      <img :src="state.titleImg.img.url" />
    </section>
    <TwoDetails :homedata="state.twodetail"></TwoDetails>
    <template v-for="item in state.list" :key="item">
      <TitleImg :list="item" v-if="item.type == undefined"></TitleImg>
      <PlaceList :list="item" v-if="item.type == 1"></PlaceList>
    </template>
  </div>
</template>

<script setup>
// import { onMounted } from 'vue';
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { getDetail } from "../api";
import Header from "../components/Header.vue";
import TitleImg from "@/components/home/TitleImg.vue";
import PlaceList from "@/components/home/PlaceList.vue";
import TwoDetails from "../components/home/TwoDetails.vue";
// import {watch } from "@vue/runtime-core";
function quit() {
  history.back();
}
const state = reactive({
  title: "",
  list: [],
  titleImg: {},
  twodetail: [],
});
const route = useRoute();
const pageId = route.params.id;
useRouter()

// nextTick(() => {
//   reqdata()
// });

function reqdata() {
  getDetail({ pageId }).then((res) => {
    state.title = res.data.pageName;
    state.titleImg = res.data.data[0].data[0];
    state.twodetail = res.data.data[1].data;
    res.data.data.forEach((item, i) => {
      if (i > 1) {
        state.list.push(item.data);
      }
    });
  });
}

reqdata();
</script>

<style lang="scss" scoped>
.two-detail {
  margin-bottom: 1rem;
  .img-box {
    width: 100vw;
    padding: 5vw;
    img {
      width: 100%;
    }
  }
}
</style>
