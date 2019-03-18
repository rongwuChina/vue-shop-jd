<template>
  <div class="top-contain">
    <headerbar></headerbar>
    <div class="catecontent clearfix">
      <ul class="fL tableft">
        <li
          v-for="(categoryli,index) in category"
          v-bind:key="'categoryli'+index"
          v-bind:id="index"
          v-bind:class="showid==index ? 'active' : ''"
          v-on:click="choose($event)"
          class="text-center"
        >{{categoryli.categoryname}}</li>
      </ul>
      <ul class="fR clearfix tabright">
        <ol v-for="(categoryli,index2) in category" :key="'categoryli'+index2" class="fL">
          <div
            v-show="showid==index2"
            v-for="(categorypro,index3) in categoryli.protabbox"
            :key="'categorypro'+index3"
            class="protabbox"
          >
            <p class="text-left">{{categorypro.protabname}}</p>
            <ul class="protabs flexbox clearfix">
              <ol
                class="text-center protab"
                v-for="(catprotabli,indexs) in categorypro.protab"
                :key="'catprotabli'+indexs"
              >
                <router-link to="/product/productdetail?id=catprotabli.id">
                  <img v-bind:src="catprotabli.proimg" alt>
                  <p class="classname">{{catprotabli.proname}}</p>
                </router-link>
              </ol>
            </ul>
          </div>
        </ol>
      </ul>
    </div>
    <footerbar active="1"></footerbar>
  </div>
</template>
<script>
import category from "@/server/category";
import "@/assets/css/style";

export default category;
$(function() {
  $(".top-contain").css("height", $(window).height());
});
$(".top-contain").css("height", $(window).height());
</script>


<style lang="scss" scoped>
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
  position: fixed;
  left: 0;
  top: 40px;
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
.catecontent {
  box-sizing: border-box;
  padding-right: 10px;
  height: calc(100% - 61px);
}

/* 左边tab商城 样式*/
.protabbox {
  margin-top: 15px;
}
.tabright {
  width: calc(78% - 10px);
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 52px;
  background: white;
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