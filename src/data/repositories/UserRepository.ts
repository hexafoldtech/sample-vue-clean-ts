import { IUser } from "@/domain/entities/User";
import store from '@/data/store'

import BaseRepository from "./BaseRepository";
import { AddUser } from "../store/modules/user/types";

export default class UserRepository implements BaseRepository {

    constructor() {}
      // save items and params
      saveItem(params: IUser) {
        store.commit(new AddUser(params))
      }

      getItem(): IUser {
        return store.state.user.users
      }
}
