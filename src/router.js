import Vue from 'vue';
import Vrouter from 'vue-router';
Vue.use(Vrouter);
import home from './components/HelloWorld.vue'
import init from './components/init.vue'
export default new Vrouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:home
        },
        {
            path:'/init',
            name:'init',
            component:init
        }
    ]
})