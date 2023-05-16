import { IUser, UserEntity } from "../entities/User";
import BaseUseCase from "./BaseUseCase";

export interface IAddItemUserUseCase {
  userEntity: UserEntity;
  }

export default class AddUserUseCase implements BaseUseCase {
    userEntity: UserEntity
    
    constructor({ userEntity }: IAddItemUserUseCase) {
        this.userEntity = userEntity

      }
    
    async execute(item: IUser) {
        console.log(item)
        this.userEntity.addItem(item)
        return
      }
}