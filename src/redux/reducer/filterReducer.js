import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../actions/actions';

const initialState = {
  all_products: [],
  filtered_products: [],
  loading: true,
  gridView: true,
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
  return state;
};

export default filterReducer;
