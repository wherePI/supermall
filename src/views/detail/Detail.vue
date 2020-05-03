<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroller class="centenr"  ref="scroller" :probeType="3" @scroll="DetailScroller">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo" @loadImgEvent="loadimgevent"></detail-goods-info>
    <datail-params :paramInfo="paramInfo" ref="paramInfo1"></datail-params>
    <detail-comment :comment="comment" ref="commentRef1"></detail-comment>
    <goods-list :goods="recommend" ref="recommend1"></goods-list>
    </scroller>
    <detail-bottom-bar @addEvent="addEvent"/>
    <back-top @click.native="backTopClick" v-show="isShowTop" />

  </div>
</template>

<script>
 // child
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DatailParams from './childComps/DetailParams.vue'
import DetailComment from "./childComps/DetailComment.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
// compents
import Scroller from "components/common/scroller/Scroller";
import GoodsList from "components/content/goods/GoodsList.vue"
import Toast from "components/common/toast/Toast";
// common
import { backTopMinxin } from "common/mixin.js";

// http
import {getDetail,Goods,Shop,GoodsParam,getDetailRecommend} from 'network/detail.js'
export default {
  name:"Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroller,
    DetailGoodsInfo,
    DatailParams,
    DetailComment,
    DetailBottomBar,
    GoodsList,
    Toast
  },
  mixins: [backTopMinxin],
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop: {},
      detailInfo:{},
      paramInfo:{},
      comment:{},
      recommend:[],
      titile:[0],
      count:0
    }
  },
  created(){
    // 获取当前id
    this.iid = this.$route.params.iid
    // 通过id请求对应数据
    getDetail(this.iid).then((res)=>{
      // console.log(res)
      const data = res.result
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取商家信息
       this.shop = new Shop(data.shopInfo);
       // 请求详细信息
       this.detailInfo = data.detailInfo
       // 请求参数信息
       this.paramInfo = new GoodsParam(
         data.itemParams.info,
         data.itemParams.rule
       );
       //获取评论
           if (data.rate.cRate !== 0) {
             this.comment = data.rate.list[0];
           }


    })
          // 获取推荐信息
          getDetailRecommend().then(res=>{
            this.recommend = res.data.list

          })


  },
  methods:{
    loadimgevent(){
      this.$refs.scroller.refresh()
      // console.log(this.recommend)
      // 添加titile参数
      this.$nextTick(()=>{
        this.titile=[0]
        this.titile.push(this.$refs.paramInfo1.$el.offsetTop-44)
        this.titile.push(this.$refs.commentRef1.$el.offsetTop-44)
        this.titile.push(this.$refs.recommend1.$el.offsetTop-44)
        // console.log(this.titile)
      })
    },
    titleClick(index){
      // console.log(index)
        this.$refs.scroller.scroller.scrollTo(0, -this.titile[index], 300)
    },
    DetailScroller(option){
      // 回到顶部
      this.isShowTop = -option.y > 300
      // nav
      const optionY = -option.y
      let lenght = this.titile.length
      for(let i = 0; i< lenght; i++){
        if(this.count !== i && ((i < lenght - 1 && optionY >= this.titile[i] && optionY < this.titile[i+1]) || (i === lenght -1 && optionY >= this.titile[i]))){
                 this.count = i
                 this.$refs.nav.count = this.count
        }
      }
    },
  addEvent(){
    //把信息发送到vuex里
    const obj = {
      iid: this.iid,
      desc: this.goods.desc,
      price: this.goods.lowNowPrice,
      title: this.goods.title,
      img: this.topImages[0]
    };
    this.$store
      .dispatch("ChangeCart", obj)
      .then(() => {
        this.$toast.show("加入购物车");
      })
      .catch(() => {
        this.$toast.show("购买数量+1");
      });
  }
  }
}
</script>

<style>
#detail {
  position: relative;
  z-index: 9;
  background-color: #FFFFFF;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #FFFFFF;
}
.centenr {
    height: calc(100% - 93px);
}
</style>
