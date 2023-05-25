<template>
  <div class="vue-tempalte">
      <form>
          <h3>Sign In</h3>

          <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control form-control-lg" v-model="email"/>
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control form-control-lg" v-model="password"/>
          </div>

          <button type="submit" class="btn btn-outline-dark btn-lg btn-block" @click.prevent="handleUserLogin">Sign In</button>

          <p class="forgot-password text-right mt-2 mb-4">
              <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>

      </form>
  </div>
</template>

<script lang="ts">

import { UserStore } from "@/data/store/user";

import {Vue} from "vue-class-component"

import {getModule} from "vuex-module-decorators";


export default class LoginPage extends Vue{
      
    get userStore(): UserStore {
      return getModule(UserStore, this.$store)
    }

      data() {
          return {
            email:"",
            password:""
          }
      }

      addToStore() {
      this.loading = true;
      console.log(this.userStore);
      this.userStore.addItemToUser({user: this.user, quantity: 1})
        .finally(() => {
          this.loading = false
        })
    }

      handleUserLogin(){
        const user={
            email:this.email,
            password:this.password
        }
        this.userStore.loginUser({user:user})
      }
      
  }
</script>