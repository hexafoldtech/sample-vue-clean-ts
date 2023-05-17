import { User } from "@/domain/entities/User";

import { Observable } from "rxjs";

export default interface UserRepository {
  saveItem(params: User) : Observable<void>;
}
