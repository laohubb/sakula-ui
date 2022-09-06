import  { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter} from 'vue-router'
import home from './components/Home.vue';
import home2 from './components/Home2.vue';

const history=createWebHistory()
const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:home},
        {path:'/xxx',component:home2}
    ]
})
const app= createApp(App)
app.use(router)
app.mount('#app')
