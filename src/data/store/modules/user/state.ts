import { IUser } from '@/domain/entities/User'

export interface UserState {
  users: IUser,
  isLoggedIn: boolean
}

export const initialState = (): UserState => {
  return {
    users: {
      'id': 0,
      'age': 18,
      'name': 'Nishant'
    },
    isLoggedIn: false
  }
}