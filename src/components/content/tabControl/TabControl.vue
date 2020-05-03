<template>
  <div class="tab-control">
        <div v-for="(item,index) in ttl" class="tab-control-item" :class="{active: count === index}" @click="tabActive(index)">
          <span>{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    ttl:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      count:0
    }
  },
  methods:{
    tabActive(index){
       this.count=index
       this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped="scoped">
.tab-control {
  display: flex;
  text-align: center;
  /* font-size: 15px; */
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
