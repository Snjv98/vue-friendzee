import {createWebHistory, createRouter}  from 'vue-router'
import Signup from '../src/views/Signup.vue'
import Timeline from '../src/views/Timeline.vue'
import Network from './views/Network.vue'
import Login from './views/Login.vue'

const routes =[
    {
        name:'Signup',
        path:'/',
        component:Signup
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Timeline',
        path:'/timeline',
        component:Timeline
    },
    {
        name:'Network',
        path:'/network',
        component:Network
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router