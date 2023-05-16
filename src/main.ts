import { createApp } from 'vue'
import App from './App.vue'
import router from './presentation/router'
import store from './data/store'
import '@/presentation/assets/main.css';

import 'bootstrap/dist/css/bootstrap.min.css'


createApp(App).use(store).use(router).mount('#app')
