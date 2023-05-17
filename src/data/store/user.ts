import { lazyInject } from "@/di";
import { User } from "@/domain/entities/User";
import AddUserUseCase from "@/domain/usecases/AddUserUseCase";
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
    @lazyInject("AddUserUseCase") private addItemToItems!: AddUserUseCase;


    @Mutation
    addItem(user: User) {
        this.items.push(user);
    }

    @Mutation
    clearCart() {
      this.items = []
    }

    @Action
    async addItemToUser({user, quantity}: AddItemToUser) {
        //Make API call.
        console.log(quantity)
        this.addItemToItems.execute(user);
        //Update state.
        this.addItem(user);
    }
  }