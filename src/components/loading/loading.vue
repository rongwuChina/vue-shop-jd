<template>
   <div class="loading">
        <p class="loadcss"> loading...</p>   
   </div>
</template>

<script>
 export default {
     name:"loading"
 }
</script>

<style>
    .loadcss{
    color:#8a8a8a;
    transform:rotateX(90grd);
    animation: opcity1 1.5s infinite alternate;
    position:relative:
    top:20%;
    text-align:center;
    }
    @keyframes opcity1{
      from{
         opacity:1;
      }to{
          opacity:0.3;
      }
}
</style>
