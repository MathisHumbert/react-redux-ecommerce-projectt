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

const updateSort = (sort) => {
  return (dispatch) => dispatch({ type: UPDATE_SORT, payload: sort });
};

const sortProducts = () => {
  return (dispatch) => dispatch({ type: SORT_PRODUCTS });
};

const updateFilters = (e) => {
  return (dispatch) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    if (name === 'price') {
      value = Number(e.target.value);
    }

    dispatch({
      type: UPDATE_FILTERS,
      payload: { name, value },
    });
  };
};

const filterProducts = () => {
  return (dispatch) => dispatch({ type: FILTER_PRODUCTS });
};

const clearFilters = () => {
  return (dispatch) => dispatch({ type: CLEAR_FILTERS });
};

export {
  loadProducts,
  setListView,
  setGridView,
  updateSort,
  sortProducts,
  updateFilters,
  filterProducts,
  clearFilters,
};
