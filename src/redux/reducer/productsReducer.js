import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
} from '../actions/actions';

const initialState = {
  products: [],
  featured_products: [],
  isSidebarOpen: false,
  loading: true,
  error: false,
};

const productsReducer = (state = initialState, { type, payload }) => {
  if (type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, loading: true, error: false };
  }
  if (type === GET_PRODUCTS_ERROR) {
    return { ...state, error: true, loading: false };
  }
  if (type === GET_PRODUCTS_SUCCESS) {
    console.log(payload);
    const tempProducts = payload.filter((product) => product.featured === true);
    return {
      ...state,
      loading: false,
      products: payload,
      featured_products: tempProducts,
    };
  }
  return state;
};

export default productsReducer;
