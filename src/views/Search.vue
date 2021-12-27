<!-- 搜索页 -->
<template>
  <VanNotify />
  <header class="main">
    <div class="search-box">
      <i class="my-icon">&#xe86e;</i>
      <input
        type="text"
        @keydown.enter="submi"
        v-model="state.text"
        placeholder="请输入"
      />
    </div>
    <i @click="quit">取消</i>
  </header>
  <div class="bar">
    <h3>热门搜索</h3>
    <ul class="hot-search">
      <li v-for="item in state.hotsearch" :key="item">{{ item.keyword }}</li>
    </ul>
  </div>
  <div class="bar">
    <h3>搜索历史</h3>
    <ul class="hot-search">
      <li v-for="item in state.strArr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { Notify } from "vant";
import { hotSearch } from "../api";
import { reactive } from "@vue/reactivity";
const VanNotify = Notify.Component;

const state = reactive({
  hotsearch: [],
  text: "",
  strArr: [],
});

function quit() {
  history.back();
}
hotSearch().then((res) => {
  state.hotsearch = res.data.list;
});

function submi() {
  if (state.text=='') {
    Notify("搜索内容不能为空");
  }else{
    location.href='/search/index'
  }
  
}
</script>

<style lang="scss" scoped>
.main {
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 0.26rem;
  }
  .search-box {
    width: 6rem;
    border: 1px solid #ccc;
    .my-icon {
      color: #bbb;
      font-size: 0.4rem;
      vertical-align: middle;
      padding: 0 0.2rem;
    }
    input {
      border: 0;
      width: 4rem;
      font-size: 0.28rem;
      vertical-align: middle;
      padding: 0.15rem 0;
      ::-ms-input-placeholder {
        color: #bbb;
      }
      ::-moz-placeholder {
        color: #bbb;
      }
      ::-webkit-input-placeholder {
        color: #bbb;
      }
      &::placeholder {
        color: #bbb;
      }
    }
  }
}
.bar {
  padding: 3vw 5vw;
  h3 {
    color: #333;
    font-weight: 500;
  }
  .hot-search {
    padding: 3vw 0;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    li {
      padding: 2vw 6vw;
      margin: 2vw 2vw;
      background: rgb(245, 245, 245);
      color: #666;
      font-size: 0.26rem;
    }
  }
}
</style>
