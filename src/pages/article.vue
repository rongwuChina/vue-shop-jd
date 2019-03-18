	
	<template>
  <div>
    <headerbar></headerbar>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img
          src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t16408/50/2132441154/66722/396419bb/5a94c2dbN7a83c0ef.jpg!q70.jpg"
          alt
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img1.360buyimg.com/da/jfs/t17467/149/584943303/434400/ae743e60/5a98f957N647870eb.jpg"
          alt
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img1.360buyimg.com/da/s750x366_jfs/t16579/322/2174294359/148386/94c3a591/5a990e75Ncf096051.jpg"
          alt
        >
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>

      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <div v-for="(articleli,index) in article" :key="index">
      <h2>{{articleli.pagename}}</h2>
      <p>{{articleli.content}}</p>
    </div>
    <router-link to="/" exact>首页</router-link>
  </div>
</template>
<script src="../assets/js/plugins/swiper.min.js"></script>
	<script type="text/javascript" charset="utf-8">
import headerbar from "@/components/header.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "article",
  data() {
    return {
      article: [
        {
          pagename: "使用vue-cli创建项目目录",
          content:
            "vue/node/npm/webpack为辅助，npm install vue-cli,vue init webpack 项目名称"
        },
        {
          pagename: "使用vue-cli创建项目目录2",
          content:
            "vue/node/npm/webpack为辅助，npm install vue-cli,vue init webpack 项目名称"
        },
        {
          pagename: "使用vue-cli创建项目目录3",
          content:
            "vue/node/npm/webpack为辅助，npm install vue-cli,vue init webpack 项目名称"
        },
        {
          pagename: "使用vue-cli创建项目目录4",
          content:
            "vue/node/npm/webpack为辅助，npm install vue-cli,vue init webpack 项目名称"
        }
      ],
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // direction : 'vertical',
        effect: "coverflow",

        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: true,
        paginationType: "bullets",

        loop: true,
        autoplay: {},
        autoHeight: true
      }
    };
  },
  components: {
    headerbar,
    swiper,
    swiperSlide
  }
};
</script>
	<style type="text/css" scope>
@import url("../assets/css/plugins/swiper.min.css");
h2 {
  color: #ff6607;
  line-height: 30px;
}
.swiper-wrapper {
  width: 100%;
  height: 300px;
}
.swiper-wrapper img {
  width: 100%;
}
</style>