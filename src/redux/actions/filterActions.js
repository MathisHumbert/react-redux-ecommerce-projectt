import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from './actions';
import axios from 'axios';
import { products_url as url } from '../../utils/constants';

const loadProducts = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: LOAD_PRODUCTS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const setListView = () => {
  return (dispatch) => dispatch({ type: SET_LISTVIEW });
};

const setGridView = () => {
  return (dispatch) => dispatch({ type: SET_GRIDVIEW });
};

export { loadProducts, setListView, setGridView };
