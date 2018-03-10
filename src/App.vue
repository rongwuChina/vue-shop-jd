<template>
  <div id="app">

    <router-view/>
    <loading v-show="loading==1"></loading>
  </div>
</template>
  <loading></loading>
<script>
export default {
  name: 'App',
  beforeCreate: function(){
          this.loading=1
  },
  created:function(){
      this.loading=0
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
