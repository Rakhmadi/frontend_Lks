<template>
    <div>
    
	<div class="form">
		<header>Login</header>
		<form>
			<input type="email" placeholder="Username" v-model="em">
			<input type="password" placeholder="Password" v-model="pass">
			<input type="button" value="Login"  @click='login()'>
		</form>
	</div>
	<div class="form">
		<header>Register</header>
		<form>
		<input type="text" v-model="name">
         <input type="email" v-model="email">
         <input type="password" v-model="password">
        <input type="button" value="Register" @click="register()">
        {{data}}
		</form>
	</div>
        
    </div>
</template>
<script>
import axios from 'axios';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // for all requests
export default {
    data(){
        return{
            name:0,
            email:'',
            password:'',
            data:'',
            em:'',
            pass:''

        }
    },
    methods: {
        register(){
            var g =this;
            axios.post(`http://127.0.0.1:8000/api/v1/register?name=${this.name}&email=${this.email}&password=${this.password}`)
            .then(function(resp){
                g.data=resp.data;
            }).catch(function(err){
                g.data=err.response;
            });
        },
    },

}
</script>
<style>
    *{
	margin: 0px;
	padding: 0px;
	font-family: Arial;
}

.form {
	display: flex;
	margin: 5em;
	align-items: center;
	justify-content: center;
	flex-flow: column;
}

.form input {
	display: flex;
	margin: 0.5em;
	padding: 0.2em;
	font-size: 1.2em;
}

.form header{
	display: block;
	font-weight: bold;
	font-size: 1.5em;
}
*{
	margin: 0px;
	padding: 0px;
	font-family: Arial;
}
</style>