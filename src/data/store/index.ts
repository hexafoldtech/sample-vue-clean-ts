
import { createStore } from 'vuex';
import {UserState, UserStore} from "./user";
import createPersistedState from "vuex-persistedstate";


export interface RootState {
  user: UserState,
}

const counterModule = {
  // namespace the module
  namespaced: true,
  state() {
    return {
      counter: 0
    }
  },
  getters: {
    getCounter(state:any) { return state.counter }
  },
  mutations: {
    increment(state:any, payload:any) {
      state.counter = state.counter + payload
    }
  },
  actions: {
    increment(context:any, payload:any) {
      context.commit('increment', payload);
    }
  }
}
const store = createStore({
  modules: {
    counterMod: counterModule,
    user: UserStore,
  },
  //plugins: [createPersistedState()]
})



export default store;

