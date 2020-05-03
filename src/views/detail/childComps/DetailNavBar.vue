<template>
    <nav-bar>
      <div slot="left" @click="backClick" class="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detailCenter">
        <div
        v-for="(item,index) in list"
        class="item"
        :class="{active:count === index}" @click="detailClick(index)">
        {{item}}</div>
      </div>
      </nav-bar>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:"DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      list:['商品','参数','评论','推荐'],
      count:0
    }
  },
  methods:{
    detailClick(index){
      this.count = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
 .detailCenter {
   display: flex;
 }
 .item {
   flex: 1;
 }
 .active {
   color: var(--color-high-text);
 }
 .left img {
   margin-top: 10px;
 }
</style>
