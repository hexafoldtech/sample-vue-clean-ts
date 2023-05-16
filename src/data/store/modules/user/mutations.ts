import { MutationTree } from 'vuex'
import { UserState, initialState } from './state'
import { IUser } from '@/domain/entities/User'
import { AddUser } from './types'

export const mutations: MutationTree<UserState> = {

    getUser(){
        return {
            id: 1,
            name: "new",
            age: 30
        }
    },

    setUser(state, action: AddUser){
        const user:IUser = action.payload
        state.users.name = user.name
        state.users.id = user.id
        state.users.age = user.age
    }
}