<template>
  <h2>Helo</h2>
  <button @click='addToStore'>Click me</button>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from 'vue-class-component';
import { User } from "@/domain/entities/User";
import { UserStore } from "@/data/store/user";
import {getModule} from "vuex-module-decorators";


export default class TestView extends Vue {

  @Prop({required: false}) user!: User

  loading = false

  get userStore(): UserStore {
      return getModule(UserStore, this.$store)
  }

  addToStore() {
      this.loading = true;
      this.userStore.addItemToUser({user: this.user, quantity: 1})
        .finally(() => {
          this.loading = false
        })
    }

}


</script>