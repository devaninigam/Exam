import { call, put } from "redux-saga/effects"
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR } from "../../Product/Action/Action"
import { GetProductUrl } from "../../Product/Api/Api";
export function* GetManageProduct(action) {
  try {
    const res = yield call(GetProductUrl, action);
    const status = res.status;
    const data = res.data
    if (status === 200) {
      yield put({type : GET_PRODUCT_SUCCESS, data })
    } else {
      yield put({type : GET_PRODUCT_ERROR, data })
    }
  } catch (error) {
    yield put({type : GET_PRODUCT_ERROR, error })
  }

}