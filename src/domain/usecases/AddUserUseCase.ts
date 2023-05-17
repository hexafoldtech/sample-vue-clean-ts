import { Observable } from "rxjs";
import { IUser, User, UserEntity } from "../entities/User";
import BaseUseCase from "./BaseUseCase";
import UserRepository from "@/data/repositories/UserRepository";
import { inject, injectable } from "inversify";

export interface AddUserUseCase {
  execute(user: User): Observable<void>;
}
export interface IAddItemUserUseCase {
  userEntity: UserEntity;
  }

@injectable()
export default class AddUserUseCaseImpl implements AddUserUseCase {
 
  constructor(
    @inject("UserRepository") private userRepository: UserRepository
  ) {
  }
  execute(user: User): Observable<void> {
    return this.userRepository.saveItem(user)
  }
    
}