import { createApp } from 'vue'
import App from './App.vue'
import router from './presentation/router'
import store from './data/store'

createApp(App).use(store).use(router).mount('#app')
