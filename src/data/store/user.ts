
import { addUser, lazyInject } from "@/di";
import { User } from "@/domain/entities/User";
import { Credentials } from "@/domain/entities/credentials";
import {AddUserUseCase} from "@/domain/usecases/AddUserUseCase";
import router from "@/presentation/router";
import axios from "axios";


import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";


export interface UserState {
    items: User[];
  }

export interface AddItemToUser {
    user: User;
    quantity: number;
  }

export interface LoginUser {
  user:Credentials;

}

  @Module({
    name: "user",
    namespaced: true
  })
  export class UserStore extends VuexModule implements UserState {
    public items: User[] = [];
    //@lazyInject("AddUserUseCase") private addUser!: AddUserUseCase;

    @Mutation
    addItem(user: User) {
      console.log("Mutation ->"+user)
        this.items.push(user);
    }

    @Mutation
    clearCart() {
      this.items = []
    }

    @Action({rawError: true})
    async addItemToUser({user, quantity}: AddItemToUser) {
        //Make API call.
        console.log("quantity -> store action" + quantity)
        addUser.execute(user).toPromise();
        //Update state.
        this.addItem(user as User);
    }


    @Action
    async loginUser({user}:LoginUser){
      try{
        await axios.post(`${process.env.VUE_APP_BASEAPI}login`,user);
        router.push({path:"/"})
      }catch(err){
       alert("user auth failed try after some time")
      }
    }
  }