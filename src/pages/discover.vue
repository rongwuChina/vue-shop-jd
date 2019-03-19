<template>
  <div>
    <h1>discover页面</h1>
    <span>vuex全局数据，项目点赞次数：{{data}}</span>
    <button @click="fetchdata(20)">点赞</button>
    <ul>
      <li v-for="item in datas" :key="item">{{item}}</li>
    </ul>
    <footerbar active="2"></footerbar>
  </div>
</template>

<script>
import discover from "@/server/discover";
export default discover;
</script>
