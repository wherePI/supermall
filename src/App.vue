<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    <main-tab-bar>
      <tab-bar-item>
      </tab-bar-item>
    </main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"


export default {
  name:"App",
  components:{
     MainTabBar,
     TabBarItem
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
