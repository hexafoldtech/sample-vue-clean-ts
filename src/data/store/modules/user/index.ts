import { Module } from 'vuex'
import { mutations } from './mutations'
import { UserState, initialState } from './state'
import { RootState } from '@/data/store'

export * from './state'

export const store: Module<UserState,RootState> = {
  state: initialState,
  mutations
}