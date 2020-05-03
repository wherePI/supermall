<template>
  <swiper>
    <swiperItem v-for="item in banners">
       <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
        </a>
    </swiperItem>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
      name:"HomeSwiper",
      props:{
        banners:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
        return {
          isload:false
        }
      },
      components:{
          Swiper,
          SwiperItem
      },
      methods:{
        imageLoad(){
          if(!this.isload){
            this.$emit('swiperImageLoad')
            this.isload = true
          }
        }
      }
      }
</script>

<style>
</style>
