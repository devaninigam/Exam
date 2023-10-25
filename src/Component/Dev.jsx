import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT, GET_PRODUCT_PROGRESS } from '../redux-saga/Product/Action/Action';
import { deleteProduct } from '../redux-saga/Product/Api/Api';

function Dev() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.ProductReducer)
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS, })
  }, [])
  const allData = data.Product;
  const HandlerDelete = (Aid) => {
    dispatch({
        type: DELETE_PRODUCT,
        id: Aid,
      });
      deleteProduct(Aid)
  };
  return (
    <React.Fragment>
      <h1>dev</h1>
      {
        allData.map((item, ind) => {
          return (
            <div key={ind}>
              <h1>{item.id}</h1>
              <h1>{item.name}</h1>
              <h1>{item.work}</h1>
              <button onClick={() => HandlerDelete(item.id)}>Delete</button>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default Dev