import { combineReducers } from "redux";
import ProductReducer from "./Product/Reducer/Reducer";

const RootReducer = combineReducers({
  ProductReducer,
})
export default RootReducer;