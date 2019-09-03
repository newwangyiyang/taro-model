/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 08:18:54
 * @LastEditTime: 2019-09-03 08:35:02
 * @LastEditors: Please set LastEditors
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers =(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default function configStore () {
  const store = createStore(rootReducer, enhancer)
  return store
}
  