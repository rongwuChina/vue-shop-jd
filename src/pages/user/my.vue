<template>
	<div class="my top-contain">
	<headerbar></headerbar>
		<p>welcome to my vue-shop-jd!</p>
		<br>
		<p>you do not  have been logined</p>
		<br>
		<p>go to register or login in:</p>
		<router-link to="/user/2/register">register</router-link>
		<router-link to="/user/2/login">login in</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
         import headerbar from "../../components/header.vue"

	export default{
		name:"my",
		components: {
			headerbar
		}
	}
</script>
