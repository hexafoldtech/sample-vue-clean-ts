import { Container } from "inversify";
import UserRepository from "./data/repositories/UserRepository";
import UserRepositoryImpl from "./data/repositories/UserRepositoryImpl";
import getDecorators from "inversify-inject-decorators";
import {AddUserUseCase,AddUserUseCaseImpl} from "./domain/usecases/AddUserUseCase";


const container = new Container();


container
  .bind<UserRepository>("UserRepository")
  .to(UserRepositoryImpl)
  .inSingletonScope();


  container
  .bind<AddUserUseCase>("AddUserUseCase")
  .to(AddUserUseCaseImpl)
  .inSingletonScope();


const addUser = new AddUserUseCaseImpl(new UserRepositoryImpl());


const {lazyInject} = getDecorators(container);
export {lazyInject, container, addUser};

