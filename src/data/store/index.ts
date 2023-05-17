
import { createStore } from 'vuex';
import {UserState, UserStore} from "./user";


export interface RootState {
  user: UserState,
}

// const store = new Vuex.Store<RootState>({
//   modules: {
//     user: UserStore,
//   }
// });

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
  }
})



export default store;

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
//     user: UserStore,
//   }
// })
