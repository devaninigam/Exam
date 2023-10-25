import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware ,  legacy_createStore as createStore } from "redux";
import RootReducer from "./RootReducer";
import { RootSaga } from "./Saga";
import {composeWithDevTools} from 'redux-devtools-extension'; 
const SagaMiddleware = createSagaMiddleware()
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware)) 
) 
SagaMiddleware.run(RootSaga)
export default store