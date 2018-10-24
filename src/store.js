import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import {promiseMiddleware} from './middleware'




export default createStore(reducer, applyMiddleware(promiseMiddleware))