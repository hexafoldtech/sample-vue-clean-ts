import { addUserUseCase } from "@/di";
import { User } from "@/domain/entities/User";
import {AddUserUseCase} from "@/domain/usecases/AddUserUseCase";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export interface UserState {
    items: User[];
  }

export interface AddItemToUser {
    user: User;
    quantity: number;
  }

  @Module({
    name: "user",
    namespaced: true
  })
  export class UserStore extends VuexModule implements UserState {
    public items: User[] = [];

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
        addUserUseCase.execute(user).toPromise();
        //Update state.
        this.addItem(user as User);
    }
  }