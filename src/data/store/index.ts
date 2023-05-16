import { createStore } from 'vuex';
import Vuex from "vuex";

import * as user from '@/data/store/modules/user'

export interface RootState {
  user: user.UserState,
}
export default new Vuex.Store<RootState>({
  modules: {
    user: user.store,
  }
})

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
