<!-- Home -->
<template>
  <PullRefresh
    v-model="loading"
    @refresh="refresh"
    :head-height="100"
    success-text='刷新成功'
  >
  <template #pulling="props">
    <img src="@/assets/img/ym.gif" :style="{ width:'2rem', transform:`scale(${props.distance / 90})`}">
  </template>
  <template #loosing>
    <img
      src="@/assets/img/ym.gif"
      style="width:1.5rem;height:1.5rem;"
    />
  </template>
  <template #loading>
    <img
      src="@/assets/img/ym.gif"
      style="width:1.5rem;height:1.5rem;"
    />
  </template>
    <Header title="首页">
      <template v-slot:iconL>
        <i class="my-icon" @click="show = !show">&#xec2e;</i>
      </template>
      <template v-slot:iconR>
        <router-link to="/search" class="my-icon">&#xe86e;</router-link>
      </template>
    </Header>
    <router-view #default="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive"></component>
    </router-view>
  </PullRefresh>
  <Footer></Footer>
  <Popup
    v-model:show="show"
    position="bottom"
    :style="{ height: '40%' }"
    closeable
    round
    close-icon="close"
  >
    <h2 class="title">客户服务</h2>
    <div class="on-line" v-for="item in cust" :key="item.id">
      <div class="left">
        <p>{{ item.online }}</p>
        <p>{{ item.phone }}</p>
        <span>{{ item.time }}</span>
      </div>
      <div class="right">
        <i :class="item.icon"></i>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import { Popup, PullRefresh } from "vant";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { reactive, ref } from "@vue/reactivity";
const show = ref(false);

const cust = reactive([
  {
    id: 34531,
    online: "联系在线客服",
    time: "服务时间:周一到周日 9:00 - 22:00",
    icon: "my-icon my-icon-kefu",
  },
  {
    id: 568,
    online: "拨打客服电话",
    phone: "400-021-9988",
    time: "服务时间:周一到周日 9:00 - 22:00",
    icon: "my-icon my-icon-phone",
  },
  {
    id: 374,
    online: "留言咨询",
    time: "服务时间:周一到周日 9:00 - 22:00",
    icon: "my-icon my-icon-xinxi",
  },
]);
const loading = ref(true);

function refresh() {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 0.3rem;
  padding: 0.2rem 0;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.on-line {
  padding: 3vw 5vw 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    font-size: 0.26rem;
    p {
      margin: 0.1rem 0;
    }
    span {
      color: #888;
    }
  }
  .right {
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    border-radius: 50%;
    border: 1px solid rgb(177, 0, 184);
    color: rgb(177, 0, 184);
  }
}
</style>
