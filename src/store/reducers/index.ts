import { combineReducers } from 'redux'
import counter from './counter'
import user, { UserStoreIF } from './user'

export interface StoreIF {
  counter: any
  user: UserStoreIF
}

const reducer = {
  counter,
  user
}

export default combineReducers(reducer)
