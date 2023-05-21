import  {User}  from "@/domain/entities/User";
import { injectable } from "inversify";
import { Observable, of, map } from "rxjs";
import store from "../store";
import UserRepository from "./UserRepository";

@injectable()
export default class UserRepositoryImpl implements UserRepository {

      // save items and params
      saveItem(params: User) : Observable<void> {
        // TODO: Make API call
        console.log("API CALL");
        return of(1).pipe(
          // delay(1000),
          map(() => {
            return;
          })
        );
      }  
}