import {createWebHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './components/DocDemo.vue';
import Tabs from './components/Tabs.vue';
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

const history=createWebHistory()
export const router=createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {
            path:'/doc',
            component:Doc,
            children:[
                {path:"", component:DocDemo},
                {path:"switch", component:SwitchDemo},
                {path:"dialog",component:DialogDemo},
                {path:"Tabs",component:TabsDemo},
                {path:"Button",component:ButtonDemo}
            ]
        }
    ]
})
