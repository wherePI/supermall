<template>
  <div>
    <div class="head">
       <div class="left">
         <img src="~assets/img/profile/avatar.svg" alt="">
         <span>登录/注册</span>
       </div>
       <div class="right">></div>
    </div>
      <div class="middle">
          <div>
            <p><span>0.00</span>元</p>
            <p>我的余额</p>
          </div>
          <div>
            <p><span>0</span>个</p>
            <p>我的优惠</p>
          </div>
          <div>
            <p><span>0</span>分</p>
            <p>我的积分</p>
          </div>
      </div>
     <div class="bottom">
       <ul>
         <li>
           <img src="~assets/img/profile/message.svg" alt="">
           <span>我的消息</span>
         </li>
         <li>
           <img src="~assets/img/profile/pointer.svg" alt="">
           <span>积分商城</span>
         </li>
         <li>
           <img src="~assets/img/profile/vip.svg" alt="">
           <span>会员卡</span>
         </li>
       </ul>
     </div>
     <div class="floot">
       <ul>
         <li>
           <img src="~assets/img/profile/cart.svg" alt="">
           <span>我的购物车</span>
         </li>
         <li>
           <img src="~assets/img/profile/shopping.svg" alt="">
           <span>下载购物App</span>
         </li>
       </ul>
     </div>
  </div>

</template>

<script>
export default {
  name:"ProfileContent"
}
</script>

<style scoped>
.head {
  display: flex;
  height: 80px;
  background-color: var(--color-tint);
}
.left {
  flex: 5;
  line-height: 80px;
  text-align: left;
}
.left img {
  width: 60px;
  vertical-align: middle;
  margin-left: 20px;
  margin-right: 20px;
}
.left span {
  font-size: 18px;
  color: #FFFFFF;
}
.right {
  flex: 1;
  line-height: 80px;
  text-align: center;
  color: #FFFFFF;
  font-size: 30px;
}
.middle {
  display: flex;
  text-align: center;
  height: 80px;
  /* line-height: 80px; */
}
.middle div {
  flex: 1;
  padding-top: 20px;
  border-right:1px solid ghostwhite ;
  border-bottom: 10px solid ghostwhite;
}
.middle div span {
  color: var(--color-tint);
  font-size: 24px;
}
.bottom {
  border-bottom: 10px solid ghostwhite;
}
.floot li,
.bottom li {
  height: 50px;
  border-bottom: 1px solid ghostwhite;
  line-height: 50px;
  padding-left: 20px;
}
.floot img,
.bottom img {
  width: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
