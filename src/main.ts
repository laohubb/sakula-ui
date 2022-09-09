import  { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/Switch.vue';
import {router} from './router'



const app= createApp(App)
app.use(router)
app.mount('#app')
