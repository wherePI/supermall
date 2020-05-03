<template>
  <swiper class="hswiper">
    <swiperItem v-for="item in topImages">
        <img :src="item">
    </swiperItem>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name:"DetailSwiper",
  components:{
      Swiper,
      SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.hswiper {
  height: 300px;
  overflow: hidden;
}
</style>
