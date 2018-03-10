<template>
   <div class="loading">
        <p class="loadcss">{{message}}</p>   
   </div>
</template>

<script>
 export default {
     name:"loading",
     data (){
      return {
         message: "loading..."
      }
     }
 };
</script>

<style>
     .loadcss{
         color:#8a8a8a;
         animation: opcity 1.5s infinite alternate;
         position:fixed;
         top:20%;
         text-align:center;
         width: 100%;
         z-index: 100000;
         background: white;
     }
     @keyframes opcity{
             from{
                opacity:1;
             }to{
                 opacity:0.3;
             }
       }
</style>
