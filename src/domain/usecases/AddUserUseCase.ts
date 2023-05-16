import { IUser, UserEntity } from "../entities/User";
import BaseUseCase from "./BaseUseCase";

export interface IAddItemUserUseCase {
    user: UserEntity;
  }

export default class AddUserUseCase implements BaseUseCase {
    user: UserEntity
    
    constructor({ user }: IAddItemUserUseCase) {
        this.user = user

      }
    
    async execute(item: IUser) {
        console.log(item)
        this.user.addItem(item)
        return
      }
}