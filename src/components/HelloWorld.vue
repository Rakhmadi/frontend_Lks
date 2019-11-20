<template>
  <form>
			<input type="email" placeholder="Username" v-model="em">
			<input type="password" placeholder="Password" v-model="pass">
			<input type="button" value="Login"  @click='login()'>
       {{data}}
		</form>
</template>
<script>
import axios from 'axios';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // for all requests
export default {
    data(){
        return{
            data:'',
            em:'',
            pass:''

        }
    },
    methods: {
        login(){
            var h=this;
            axios.post(`http://127.0.0.1:8000/api/v1/login`,{
                email:this.em,
                password:this.pass
            })
            .then(function(resp){
                h.data=resp.data; 
                localStorage.setItem("token",`${resp.data.token}`);
            }).catch(function(errr){
                h.data=errr.response;                                                                                                                                                                                                                                                                    
            });
        }
    },

}
</script>

