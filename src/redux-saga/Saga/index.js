import { all } from "redux-saga/effects";
import { GetRootProduct } from "./Root/RootProductSaga";

export function* RootSaga (){
  yield all([GetRootProduct()])
}