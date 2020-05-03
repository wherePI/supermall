<template>
	<div class="tab-bar-item" @click="relive">
		<div v-if="!isShwo"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-acitve"></slot></div>
		<div :style="isColor"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
export default {
	name:"TabBarItem",
	props:{
	   Path:String,
	   activeColor:{
		   type:String,
		   default:"#FB7299"
	   }
	},
	data(){
		return {
			// isShwo:true,
			
		}
	},
	computed:{
		isShwo(){
			
			return this.$route.path.includes(this.Path) == 1
		},
		isColor(){
			// console.log(this.isShwo ? {color:this.activeColor}:{});
			return this.isShwo ? {color:this.activeColor}:{}
			
		}
	},
	methods:{
		relive(){
			this.$router.replace(this.Path).catch(error=> error);
		}
	}
}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		color: #707070;
	}
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top:3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
</style>
