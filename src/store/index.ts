import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware())
)
