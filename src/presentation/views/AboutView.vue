<template>
  <h2>{{ $store.state.user.items }}</h2>
  <button @click='addToStore'>Click me</button>

  <p>Counter: {{ $store.state.counterMod.counter}}</p>
  <button @click="incrementCounter">Increment</button>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from 'vue-class-component';
import { User } from "@/domain/entities/User";
import { UserStore } from "@/data/store/user";
import {getModule} from "vuex-module-decorators";



export default class AboutView extends Vue {

  @Prop({required: false}) user: User = {id: 1, name: "Ad", age:10}

  loading = false

  get userStore(): UserStore {
      return getModule(UserStore, this.$store)
  }
  incrementCounter() {
      // specify 'counterMod' namespace
      // before the action name
      console.log(this.$store.state.user)
      this.$store.dispatch('counterMod/increment', 5)
    }

    
  addToStore() {
      this.loading = true;
      console.log(this.userStore);
      this.userStore.addItemToUser({user: this.user, quantity: 1})
        .finally(() => {
          this.loading = false
        })
    }

}


</script>


