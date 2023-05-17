import { AddUser } from "@/data/store/modules/user/types";
import store from '@/data/store'

export interface IUser {
    id: number;
    name: string;
    age: number;
  }

  export interface User {
    id: number;
    name: string;
    age: number;
  }

  export class UserEntity {
    constructor() {
      // do nothing.
    }


    addItem(item: IUser) {
      // do some price calculation.
      const name = item.name + "- Preprocessing"
      const userItem = {
        ...item,
      }
      store.commit(new AddUser(userItem))
    }
  }