<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <tab-control v-show="isTabFixed" class="tabcontrol" :ttl="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"></tab-control>
        <scroller class="home-scroller" ref="scroller" :probe-type="3" @scroll="getPostion" :pull-up-load="true" @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <recommends-views :recommends="recommends" />
        <feature-view />
        <tab-control :ttl="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
        <goods-list :goods="showTab"></goods-list>
        </scroller>
        <back-top @click.native="backTopClick" v-show="isShowTop" />
    </div>
</template>


<script>
  // home
import HomeSwiper from "./childComps/HomeSwiper.vue" //lbt
import RecommendsViews from "./childComps/RecommendsViews.vue" // 4 div
import FeatureView from "./childComps/FeatureView.vue" // 1 img
import Scroller from "components/common/scroller/Scroller";
// components
import NavBar from "components/common/navbar/NavBar" //nav
import TabControl from "components/content/tabControl/TabControl.vue" // tab
import GoodsList from "components/content/goods/GoodsList.vue"
// http
import {getHomeMultiData,getGoodsData} from 'network/home.js'
// common
import { backTopMinxin } from "common/mixin.js";
import {debounce} from 'common/utils.js'
export default {
    name:"Home",
    components:{
        HomeSwiper,
        RecommendsViews,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
        Scroller,
    },
    mixins: [backTopMinxin],
    data() {
        return {
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
            },
            tabValue:'pop',
            isTabFixed:false,
            taboffsetTop:0,
            saveY:0
        }
    },
    created() {
      // 请求首页数据
       this.getHomeMultiData()
      // 请求tab数据
      this.getGoodsData("pop")
      this.getGoodsData("new")
      this.getGoodsData("sell")

    },
    mounted() {
      const refresh = debounce(this.$refs.scroller.refresh,500)
      // 监听item中图片加载完成
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
    },
    computed:{
      showTab(){
        return this.goods[this.tabValue].list
      }
    },
    // 当前活跃路由
    activated(){
      this.$refs.scroller.refresh()
      this.$refs.scroller.scroller.scrollTo(0, this.saveY,0)
    },
    // 离开路由
    deactivated(){
      this.saveY = this.$refs.scroller.scroller.y
    },
    methods:{
      /*
       监听事件方法
      */
     // 动态获取数据
      tabClick(index){
          switch(index){
            case 0:
            this.tabValue='pop'
            break
            case 1:
            this.tabValue='new'
            break
            case 2:
            this.tabValue='sell'
            break
          }
          this.$refs.tabControl1.count = index;
          this.$refs.tabControl2.count = index;
      },
      // 回到顶部
      backTopClick() {
          // 通过$refs拿到组件中的对象
          this.$refs.scroller.scroller.scrollTo(0, 0, 500)
      },

      getPostion(postion) {
        // 回到顶部的显示隐藏
          this.isShowTop = -postion.y > 300
          // 决定TabControl是否吸顶
          this.isTabFixed = -postion.y > this.taboffsetTop
      },
      // 上拉加载更多
      loadMore(){
        this.getGoodsData(this.tabValue)
      },
      swiperImageLoad(){
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /*
       请求网络数据方法
      */
      getHomeMultiData(){
        getHomeMultiData().then(res=>{
            this.banners = res.data.banner.list,
            this.recommends = res.data.recommend.list
        })
      },
      getGoodsData(type){
       let pages = this.goods[type].page + 1
        getGoodsData(type,pages).then(res=>{
          this.goods[type].list.push(...res.data.list),
          this.goods[type].page += 1
          // 重复上拉加载更多的方法
          this.$refs.scroller.finishPullUp()
        })
      }
    }
}
</script>

<style>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.tabcontrol {
  position: relative;
  z-index: 9;
  background-color: #FFFFFF;
}
.home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>
