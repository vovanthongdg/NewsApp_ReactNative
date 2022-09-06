import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fontReducer from './reducers';


const rootReducer = combineReducers({ fontReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));