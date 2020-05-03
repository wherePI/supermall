<template>
    <div class="profile">
      <nav-bar class="navbar"><div slot="center">我的档案</div></nav-bar>
        <profile-content></profile-content>
    </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar" //nav

import ProfileContent from './childComps/ProfileContent.vue'

export default {
    name:"Proflie",
    components:{
      ProfileContent,
      NavBar
    }
}
</script>

<style>
.navbar {
  background-color: var(--color-tint);
  color: #FFFFFF;
  font-size: 18px;
}
</style>
