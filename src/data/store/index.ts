import { createStore } from 'vuex';
import Vuex from "vuex";
import {UserState, UserStore} from "./user";


export interface RootState {
  user: UserState,
}
export default new Vuex.Store<RootState>({
  modules: {
    user: UserStore,
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
