import 'reflect-metadata'
import { createApp } from 'vue'
import App from './App.vue'
import router from './presentation/router'
import store from './data/store'
import '@/presentation/assets/main.css';
import '@/presentation/assets/scss/argon-dashboard.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AddUserUseCaseImpl } from './domain/usecases/AddUserUseCase'
import UserRepositoryImpl from './data/repositories/UserRepositoryImpl'

import VueModular from "./plugins/VueModular"

const app = createApp(App)

app.config.devtools = true

app.provide('AddUserUseCase', new AddUserUseCaseImpl(new UserRepositoryImpl()));

function bootApp(){
    app.use(VueModular,{
        modules:[

        ],
        configs:{
            router
        }
    })
    .use(store)
    .mount("#app")
}

bootApp()