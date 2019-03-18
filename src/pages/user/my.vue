<template>
  <div class="my top-contain">
    <p>welcome to my vue-shop-jd!</p>
    <p>you do not have been logined</p>
    <p>go to register or login in:</p>
    <ul>
      <ol>
        <router-link to="/user/2/register">register</router-link>
      </ol>
      <ol>
        <router-link to="/user/2/login">login in</router-link>
      </ol>
    </ul>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
    <footerbar active="4"></footerbar>
  </div>
</template>
<script>
import headerbar from "@/components/header.vue";

export default {
  name: "my",
  components: {
    headerbar
  }
};
</script>
