<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroller",
        data() {
            return {
                scroller:{
                    type:Object,
                    default() {
                        return {}
                    }
                }
            }
        },
        //接收父组件来的值
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
              type:Boolean,
              default:false
            }
        },
        mounted() {
          // 创建BScroll对象
            this.scroller = new BScroll(this.$refs.wrapper, {
                probeType:this.probeType,
                click:true,
                pullUpLoad:this.pullUpLoad
            })
            // 监听滚动位置
            this.scroller.on('scroll', (postion) => {
                //console.log(postion);
                this.$emit('scroll', postion)
            })
            // 监听上拉事件
            this.scroller.on('pullingUp',()=>{
              this.$emit("pullingUp")
            })

        },
        methods:{
          // 滚动坐标，响应时间 回到顶部
            scrollTo(x, y, time=300) {
                this.scroller.scrollTo(0, 0, time)
            },
            // 重复上拉加载更多操作
            finishPullUp(){
              this.scroller.finishPullUp()
            },
            // 重新计算滚动长度的（高度）的函数
            refresh(){
              this.scroller.refresh()
            }
        }
    }
</script>

<style scoped>

</style>
