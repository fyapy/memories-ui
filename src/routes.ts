import {createWebHistory, createRouter} from 'vue-router'
import Buttons from './pages/Buttons.vue'
import Tables from './pages/Tables.vue'
import Inputs from './pages/Inputs.vue'
import Forms from './pages/Forms.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Buttons},
    {path: '/forms', component: Forms},
    {path: '/inputs', component: Inputs},
    {path: '/tables', component: Tables},
  ],
})
