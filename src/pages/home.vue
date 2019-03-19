  
  <template>
  <div class="home-contain">
    <headerbar></headerbar>
    <div>vuex全局管理数据，项目点赞次数：{{data}}</div>
    <button @click="$store.commit('setdata',1)">点赞</button>
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

    <div class="real-show clearfix">
      <div class="graphic-text fL" v-for="(articleli,index) in article" :key="'articleli'+index">
        <div class="fL graphic-word">
          <p class="graphic-tit" data-titcolor="#000000" style="color: rgb(0, 0, 0);">
            <b>{{articleli.pagename}}</b>
          </p>

          <p class="graphic-wz" style="color:#D663E1">{{articleli.content}}</p>
        </div>

        <div class="graphic-img fR">
          <img v-bind:src="articleli.categoryimg" class="opa1" style="opacity: 1;">
        </div>
      </div>
    </div>
    <div class="floor-title floor-tit-img" data-floorname="特色推荐">
      <span class="tit-img">
        <img
          src="https://m.360buyimg.com/mobilecms/jfs/t15142/226/2262661292/27096/4495e446/5a796754N3c01a224.png!q70.jpg"
        >
      </span>
    </div>
    <div class="pro-box clearfix">
      <div class="proli-box fL" v-for="(proli,index) in product" :key="'proli'+index">
        <img v-bind:src="proli.img" alt>
        <p class="proli-name">{{proli.name}}</p>

        <p class="pro-price">¥&nbsp;{{proli.price}}</p>

        <p class="clearfix">
          <span class="front-light fL">
            好评率
            <span class="price">{{proli.good}}</span>
          </span>
          <span class="base-btn fR">看相似</span>
        </p>
      </div>
    </div>

    <footerbar active="0"></footerbar>
    <keep-alive>
      <router-link to="/user/1/register">register</router-link>
      <router-link to="/user/1/login">login</router-link>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
import home from "@/server/home";
export default home;
</script>
<style type="text/css">
@import url("../assets/css/plugins/swiper.min.css");

.home-contain:before {
  content: "";
  display: block;
  height: 52px;
}
.home-contain:after {
  content: "";
  display: block;
  height: 63px;
}
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
.graphic-text {
  width: 50%;
  box-sizing: border-box;
  border-bottom: solid 1px #f4f4f4;
  padding: 20px 0;
}
.graphic-text:nth-child(odd) {
  border-right: solid 1px #f4f4f4;
}
.graphic-img {
  width: 40%;
  float: right;
}
.graphic-word {
  width: 60%;
  transform: translateY(50%);
  text-align: center;
}
/*商品标签展示box*/
.proli-box.fL {
  width: 48%;
  margin: 1%;
  background: white;
  padding-bottom: 10px;
}
.proli-name {
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
}
.pro-price {
  text-align: left;
  line-height: 30px;
  color: red;
  padding: 0 10px;
}

.front-light {
  color: #8a8a8a;
  font-size: 0.8rem;
  padding: 0 10px;
}
.base-btn {
  border: solid 1px #dcdcdc;
  padding: 3px 5px;
  font-size: 0.9rem;
  margin-right: 10px;
}
.real-show {
  background: white;
}
.graphic-wz {
  font-size: 0.8rem;
  line-height: 28px;
}
</style>