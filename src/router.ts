import {createWebHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/Switch.vue';
import Dialog from './components/Dialog.vue';
import Tabs from './components/Tabs.vue';
import button from './components/Button.vue';


const history=createWebHistory()
export const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {
            path:'/doc',
            component:Doc,
            children:[
                {path:"switch", component:Switch},
                {path:"dialog",component:Dialog},
                {path:"Tabs",component:Tabs},
                {path:"Button",component:button}
            ]
        }
    ]
})
