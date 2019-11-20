<template>
  <div id="app">
        <div class="header">
		<div>
			<a href="#">Papan</a>
		</div>
	</div>
    <router-link :to="{name:'init'}">init</router-link>
    <router-link :to="{name:'home'}">home</router-link>
    <a href="#" @click="logout()">logout</a>
    <router-view></router-view>
    {{n}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      n:'',
     
    }

  },
  methods: {
    logout(){
     var tokens =localStorage.getItem('token');
      var u=this;
      axios.get(`http://127.0.0.1:8000/api/v1/logout?token=${tokens}`,{
        
      }).
      then(function(resp){
        u.n=resp.data;
      }).catch(function(err){
        u.n=err.response;
      })
    }
  },
}
</script>
<style >
  *{
	margin: 0px;
	padding: 0px;
	font-family: Arial;
}
</style>