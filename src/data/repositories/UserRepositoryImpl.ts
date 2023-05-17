import { User, IUser } from "@/domain/entities/User";
import { injectable } from "inversify";
import { Observable, of, map } from "rxjs";
import store from "../store";
import { AddUser } from "../store/modules/user/types";
import UserRepository from "./UserRepository";

@injectable()
export default class UserRepositoryImpl implements UserRepository {

      // save items and params
      saveItem(params: User) : Observable<void> {
        store.commit(new AddUser(params))
        return of(1).pipe(
          // delay(1000),
          map(() => {
            return;
          })
        );
      }

      getItem(): User {
        return store.state.user.users
      }
}