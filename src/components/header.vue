	<template>
	<!-- 内容区域 -->
			<header id="header" class="db_header">
			          
			          	<!-- logo和搜索icon -->
			          	<div class="db_logo_box" v-show="!isSearch">
			          	<span>精品</span>
			          		<input class="db_logo_text" type="text" placeholder="searchtext" v-on:click="onSearch" v-model="message"/>
			          		<div class="db_search_icon" v-on:click="onSearch"><i class="fa fa-search"></i></div>
			          	</div>
			          	<!-- 搜索块 -->
			          	<div class="db_search_box searchbox" v-show="isSearch">
			          		<input type="text" name="content" placeholder="searchtext" class="db_logo_text ipt_search" v-model="message" />
			          		<!-- <span class="btn_search" v-on:click="onSubmit"><i class="fa fa-search"></i></span> -->
			          		<div class="db_search_icon" v-on:click="onSubmit"><i class="fa fa-search"></i></div>
			          	</div>
			          </div>
			          <!-- mask遮罩层 -->
			          <div class="db_mask" v-show="isSearch" v-on:click="onTapMask">
			          </div>
			          <div class="hotsearch searchbox" v-show="isSearch">
			          	      <p>热门搜索</p>
			          	      <ul class="clearfix">
			          	      	  <ol class="fL tabli" v-for="hotseachli in hotsearch">
			          	      	  	{{hotseachli}}
			          	      	  </ol>
			          	      </ul>
			          </div>
			</header><!-- /header -->
	</template>
	<script>
		export default{
			name:"headerbar",
			data (){
				return {
					searchtext:"云南白药牙膏",
					isSearch:false,
					message:"云南白药牙膏",
					hotsearch: [
					"照片扫描仪","无线扩音器","充电宝","空气净化器"
					]
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
                     .db_header{
                     	position: fixed;
                     	top: 0;
                     	width: 100%;
                     	box-shadow: 0 -1px 10px #8a8a8a;
                     	z-index:10000;
                     }
	   	.db_header .db_header_main{
	   		position: relative;
	   		z-index: 110;
	   		overflow: hidden;
	   		background-color: #68cb78;
	   	}
	   	/* logo盒子css */
	   	.db_header .db_logo_box{
	   		height: 38px;
	   		    line-height: 38px;
	   		    border-radius: 30px;
	   		    border:solid 1px #dcdcdc;
	   		    background: white;
	   		    width: 90%;
	   		    margin: 0 auto;
	   	}
	   	.db_header .db_logo_text{
	   		display: inline-block;
	   		color: #9a9a9a;
	   		font-size: .8rem;
	   		margin: 0 .5rem;
	   		border:none;
	   		outline: none;
	   		width:60%;
	   	}
	   	.db_header .db_search_icon{
	   		float: right;
	   		padding: 0 20px;
	   		cursor: pointer;
	   	}
	   	.db_header .db_search_icon i{
	   		color: #8a8a8a;
	   		font-size: .7rem;
	   		vertical-align: sub;
	   		transform: translateY(-50%);
	   	}
	   	/* search盒子css */
	   	.db_header .db_search_box{
	   		position: relative;
	   		height: 38px;
	   		    line-height: 38px;
	   		    border-radius: 30px;
	   		    border:solid 1px #dcdcdc;
	   		    background: white;
	   	}
	   	.db_header .btn_search{
	   		position: absolute;
	   		top: 0;
	   		right: 0;
	   		z-index: 10;
	   		display: block;
	   		line-height: 30px;
	   		padding: 0 15px;
	   		color: #8a8a8a;
	   		font-size: .5rem;
	   	}
	   	.db_header .db_mask{
	   		position: fixed;
	       	bottom: 0;
	       	left: 0;
	       	right: 0;
	       	z-index: 100;
	       	width: 100%;
	       	height: 100%;
	       	background-color: rgba(0,0,0,0.5);
	   	}

	   	/*热门搜索  tab*/
	   	.db_header .tabli{
	   		padding:0 10px;
	   		background: #f4f4f4;
	   		line-height: 30px;
	   		color:#8a8a8a;
	   		border-radius:6px;
	   		margin:6px;
	   		font-size:0.8rem;
	   	}
	   	.db_header .hotsearch p{margin:10px 0;padding-top:10px;}
	   	.db_header .hotsearch ul{
	   		padding-bottom:30px;
	   	}
	   	.db_header .searchbox {
	   	    position: relative;
	   	    z-index: 1000;
	   	    background:white;
	   	}

	</style>