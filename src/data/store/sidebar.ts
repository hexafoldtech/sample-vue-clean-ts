
import { createStore } from 'vuex';




const sideNavModule = {
  // namespace the module
  namespaced: true,
  state() {
    return {
        isRTL: false,
        sidebarType: "bg-white",
        darkMode: false,
        layout: "default",
    }
  }
 
  
}
const store = createStore({
  modules: {
    sideNavMod: sideNavModule,
  },
})



export default store;

