<!-- 旅游地点列表组件 -->
<template>
  <ul class="place-list">
    <li class="place-li" v-for="item in state.dataList" :key="item">
      <div class="img-box">
        <img :src="item.img" />
        <p>{{ item.tip_mark }}</p>
      </div>
      <div class="contxt">
        <p class="title">{{ item.title }}</p>
        <p class="subtitle">{{ item.subtitle }}</p>
        <span class="marks" v-for="i in item.mark" :key="i.name">{{ i.name }}</span>
        <span class="price">￥{{ item.price }}/{{ item.unit }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { getDuctIds } from "@/api";
const props = defineProps({
  list: Object,
});

const state = reactive({
  dataList: [],
});
getDuctIds({ ids: props.list.ids }).then((res) => {
  res.data.list.forEach((item, i) => {
    if (i < props.list.show_num) {
      state.dataList.push(item);
    }
  });
  // console.log(state.dataList);
});
</script>

<style lang="scss" scoped>
.place-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  overflow: hidden;
  padding: 0 4vw;
  .place-li {
    width: 3.36rem;
    margin-bottom: 0.1rem;
    .img-box {
      width: 100%;
      height: 2.1rem;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        top: 0;
        left: 2vw;
        font-size: 0.22rem;
        background: #00000090;
        padding: 0.05rem;
        color: #fff;
      }
    }
    .contxt {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      font-size: 0.22rem;
      padding: 0.1rem 0;
      .subtitle,
      .title {
        padding: 0.05rem 0;
        width: 99%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .subtitle {
        color: #999;
      }
      span{
          color: rgb(177, 0, 88);
      }
      .marks{
          display: block;
          text-align: center;
          font-size: .2rem;
          border: 1px solid #f700ffa1;
          margin: 5px 10px 5px 0;
          padding: 1px 2px;
      }
      .price{
          display: block;
          width: 100%;
      }
    }
  }
}
</style>
