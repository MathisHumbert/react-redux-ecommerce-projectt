import axios from 'axios';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from './actions';
import { products_url as url } from '../../utils/constants';

const openSidebar = () => {
  return (dispatch) => dispatch({ type: SIDEBAR_OPEN });
};

const closeSidebar = () => {
  return (dispatch) => dispatch({ type: SIDEBAR_CLOSE });
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_PRODUCTS_ERROR });
      });
  };
};

const fetchSingleProduct = (url) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      });
  };
};

export { openSidebar, closeSidebar, fetchProducts, fetchSingleProduct };
