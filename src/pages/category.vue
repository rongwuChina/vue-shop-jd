<template>
  <div class="top-contain">
    <headerbar></headerbar>
    <router-link to="/" replace>
      <i class="fa fa-home"></i>
    </router-link>
    <div class="catecontent clearfix">
      <ul class="fL tableft">
        <li
          v-for="(categoryli,index) in category"
          v-bind:key="'categoryli'+index"
          v-bind:id="index"
          v-bind:class="showid==index ? 'active' : ''"
          v-on:click="choose($event)"
        >{{categoryli.categoryname}}</li>
      </ul>
      <div class="fL clearfix tabright">
        <div v-for="(categoryli,index2) in category" :key="'categoryli'+index2" class="fL">
          <div
            v-show="showid==index2"
            v-for="(categorypro,index3) in categoryli.protabbox"
            :key="'categorypro'+index3"
            class="protabbox"
          >
            <p class="text-left">{{categorypro.protabname}}</p>
            <div class="protabs clearfix">
              <div
                class="fL protab"
                v-for="(catprotabli,indexs) in categorypro.protab"
                :key="'catprotabli'+indexs"
              >
                <router-link to="/product/productdetail?id=catprotabli.id">
                  <img v-bind:src="catprotabli.proimg" alt>
                  <p>{{catprotabli.proname}}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerbar active='1'></footerbar>
  </div>
</template>
<script>
import category from "@/server/category.js";
export default category;

$(function() {
  $(".top-contain").css("height", $(window).height());
});
$(".top-contain").css("height", $(window).height());

</script>


<style type="text/css">
.top-contain {
  height: 100%;
  overflow: hidden;
}
/* 右边tab栏 样式*/
.tableft {
  width: 22%;
  background: white;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 52px;
}
.tableft li {
  padding: 15px 0;
  border-bottom: solid 1px #e5e5e5;
  font-weight: bold;
  font-size: 1rem;
}
.tableft .active {
  color: red;
}
.catecontent.clearfix {
  box-sizing: border-box;
  padding-right: 10px;
  height: 100%;
}

/* 左边tab商城 样式*/
.protabbox {
  margin-top: 15px;
}
.tabright {
  width: 78%;
  padding-left: 10px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 52px;
}
.protabbox {
}
.protabs {
  background: white;
  margin-top: 10px;
  margin-bottom: 20px;
}

.protab {
  width: 33.3%;
  padding: 15px 0;
}
.protab img {
  width: 60%;
}
.protab p {
  font-size: 0.6rem;
}
body,
html,
#app {
  height: 100%;
}
</style>