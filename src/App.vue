<template>
  <div id="app">
        <div class="header">
		<div>
			<a href="#">Papan</a>
		</div>
	</div>
    <router-link :to="{name:'init'}">init</router-link>
    <router-link :to="{name:'home'}">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>
<style >
  *{
	margin: 0px;
	padding: 0px;
	font-family: Arial;
}
</style>