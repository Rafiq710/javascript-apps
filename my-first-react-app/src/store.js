
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const myLogger = (store) => (next) => (action) =>{
    console.log("Logged actions : ",action);
    next(action);
};
const store = createStore(rootReducer,{},applyMiddleware(myLogger,logger));

export default store;