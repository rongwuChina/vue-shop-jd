	<template>
		<div class="login">
		
			login {{$route.params.id}}
			<router-link to="/user/1">user</router-link>
			
		</div>
	</template>
	<script>
		export default{
			name:"login"
		}
	</script>
