import {createApp} from 'vue'
import {router} from './routes'
import App from './App.vue'
import './styles/main.scss'

createApp(App).use(router).mount('#app')
