import { DELETE_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../Action/Action";

const initialState = {
  Product : [],

  GetProductProgress: false,
  GetProductError : null,

  DeletePrduct : false,
  ProductIsLoaded:false,
}
function ProductReducer(state = initialState ,  action){
switch (action.type) {
  case GET_PRODUCT_PROGRESS:
    return({
      ...state,
      GetProductProgress: true,
    });
    case GET_PRODUCT_ERROR:
    return({
      ...state,
      GetProductError : action.data, 
    });
    case GET_PRODUCT_SUCCESS:
    return({
      ...state,
      ProductIsLoaded:true,
      Product : action.data
    });

    //delete product 

    case DELETE_PRODUCT : 
    return{
      ...state,
      DeletePrduct : true,
      Product: state.Product.filter(item => item.id !== action.id),
    }
  default: return state
}
}
export default ProductReducer;