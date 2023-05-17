import { Observable } from "rxjs";

import UserRepository from "@/data/repositories/UserRepository";
import { inject, injectable } from "inversify";
import { User } from "../entities/User";

export interface AddUserUseCase {
  execute(user: User): Observable<void>;
}

@injectable()
export class AddUserUseCaseImpl implements AddUserUseCase {
 
  constructor(
    @inject("UserRepository") private userRepository: UserRepository
  ) {
  }
  execute(user: User): Observable<void> {
    console.log("Usecase execute")
    return this.userRepository.saveItem(user)
  }
    
}