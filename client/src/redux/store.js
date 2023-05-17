import {createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk"


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);


export default store;

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducer';
// import thunkMiddleware from 'redux-thunk'

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunkMiddleware),
// );

// export default store;
