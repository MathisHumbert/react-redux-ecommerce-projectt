import {
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from '../actions/actions';

const initialState = {
  all_products: [],
  filtered_products: [],
  loading: true,
  gridView: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    max_price: 0,
    min_price: 0,
    shipping: false,
  },
};

const filterReducer = (state = initialState, { type, payload }) => {
  if (type === LOAD_PRODUCTS) {
    const max = Math.max(...payload.map((item) => item.price));
    return {
      ...state,
      all_products: payload,
      filtered_products: payload,
      loading: false,
      filters: { ...state.filters, max_price: max, price: max },
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
  if (type === UPDATE_FILTERS) {
    return {
      ...state,
      filters: { ...state.filters, [payload.name]: payload.value },
    };
  }
  if (type === FILTER_PRODUCTS) {
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = state.all_products;

    if (text) {
      tempProducts = tempProducts.filter((p) => p.name.includes(text) === true);
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter((p) => p.category === category);
    }
    return { ...state, filtered_products: tempProducts };
  }
  return state;
};

export default filterReducer;
