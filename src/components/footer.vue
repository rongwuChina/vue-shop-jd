<template>
<!-- 内容区域 -->
       <footer class="clearfix footer-bar ">
          <div class="foot-li fL" >
             <div class="foot-icon" v-on:click="onSearch">
             <i class="fa fa-home" v-bind:class="active==0 ? 'active' : ''"></i>
             </div>
             <span class="foot-text" v-bind:class="active==0 ? 'active' : ''">首页</span>
          </div>
          <div class="foot-li fL">
             <div class="foot-icon" v-on:click="onSearch">
             <i class="fa fa-navicon" v-bind:class="active==1 ? 'active' : ''"></i>
             </div>
             <span class="foot-text" v-bind:class="active==1 ? 'active' : ''">分类</span>
          </div>
          <div class="foot-li fL">
             <div class="foot-icon" v-on:click="onSearch">
             <i class="fa fa-eye" v-bind:class="active==2 ? 'active' : ''"></i>
             </div>
             <span class="foot-text" v-bind:class="active==2 ? 'active' : ''">发现</span>
          </div>
          <div class="foot-li fL">
             <div class="foot-icon" v-on:click="onSearch">
             <i class="fa fa-shopping-cart" v-bind:class="active==3 ? 'active' : ''"></i>
             </div>
             <span class="foot-text" v-bind:class="active==3 ? 'active' : ''">购物车</span>
          </div>
          <div class="foot-li fL">
             <div class="foot-icon" v-on:click="onSearch">
             <i class="fa fa-user-o" v-bind:class="active==4 ? 'active' : ''"></i>
             </div>
             <span class="foot-text" v-bind:class="active==4 ? 'active' : ''">我的</span>
          </div>
       </footer>
</template>
<script>
	export default{
		name:"headerbar",
               props:["active"],
		data (){
			return {
				searchtext:"云南白药牙膏",
				isSearch:false,
				message:"云南白药牙膏",
				hotsearch: [
				"照片扫描仪","无线扩音器","充电宝","空气净化器"
				],
                              
			}
		},
		methods: {
			onSearch: function(){
				this.isSearch = !this.isSearch;
				$('.ipt_search').focus();
			},
			onTapMask: function(){
				this.isSearch = !this.isSearch;
			},
			onSubmit: function(){
				let v = document.querySelector(".ipt_search").value;
				alert(v);
			}
		}
	}
</script>
<style scoped>
          .footer-bar {
              position: fixed;
              bottom: 0;
              width: 100%;
              box-shadow: 0 1px 10px #8a8a8a;
              background: white;
              padding: 6px 0;
              z-index: 10000;
          }
   	.foot-li.fL {
          width: 20%;
         }
         .foot-li .foot-text {
             font-size:0.8rem;
             line-height: 22px;
         }
         .foot-li .fa{
             font-size:1.8rem;
         }
         .foot-li .active {
             color: red;
         }
</style>