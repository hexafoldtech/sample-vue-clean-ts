import { IUser } from "@/domain/entities/User";

export enum Types {
    ADD_USER = 'user/add',
    CLEAR_ITEMS = 'user/clear',
    GET_USER = 'user/get'
  }

  interface FluxStandardAction {
    readonly type: string;
    payload?: any;
  }

  export class AddUser implements FluxStandardAction {
    type = Types.ADD_USER
    constructor(public payload: IUser){}
  }