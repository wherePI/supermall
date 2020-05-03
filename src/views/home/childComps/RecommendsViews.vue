<template>
  <div class="home-recommends">
     <div class="recommends-Item" v-for="item in recommends">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
       </a>
     </div>
  </div>
</template>

<script>
 export default {
   name:"RecommendsViews",
   props:{
     recommends:{
       type:Array,
       default(){
         return []
       }
     }
   }
 }
</script>

<style>
  .home-recommends{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommends-Item {
    flex: 1;
  }
  .recommends-Item img {
    width: 85%;
    margin-bottom: 10px;
  }
</style>
