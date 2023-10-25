import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../Product/Action/Action";
import { GetManageProduct } from "../ManageProduct/ManageProduct";

export function* GetRootProduct() {
  yield takeLatest(GET_PRODUCT_PROGRESS, GetManageProduct);
}
