<template>
	<div class="pet_content">
		<v-content></v-content>
	</div>
</template>
<script>
	import Content from './content';
	
	export default{
		components:{
			"v-content":Content
		}
	}
</script>
<style>
	.pet_content { width: 100%; background: #ececec; padding-top: 49px;}
</style>