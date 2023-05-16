import { createStore } from 'vuex'
import * as user from '@/data/store/modules/user'


import * as product from '@/data/store/modules/product'

export interface RootState {
  user: user.UserState,

}

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
