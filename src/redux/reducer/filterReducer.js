import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from '../actions/actions';

const initialState = {
  all_products: [],
  filtered_products: [],
  loading: true,
  gridView: true,
  sort: 'price-lowest',
};

const filterReducer = (state = initialState, { type, payload }) => {
  if (type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: payload,
      filtered_products: payload,
      loading: false,
    };
  }
  if (type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (type === UPDATE_SORT) {
    return { ...state, sort: payload };
  }
  if (type === SORT_PRODUCTS) {
    const { sort, all_products } = state;
    let tempProducts = all_products;

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return { ...state, filtered_products: tempProducts };
  }
  return state;
};

export default filterReducer;
