<template>
  <div id="app">
		<v-header></v-header>
		<v-more></v-more>
		<router-view></router-view>
  </div>
</template>
<script>
	import Header from './components/header';
	import More from './components/more';
	
	export default{
		name:'app',
		components:{
			"v-header":Header,
			"v-more":More
		},
		mounted(){
			console.log('app',this.$http)
		}
	}
</script>



