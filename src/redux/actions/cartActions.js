import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from './actions';

const addToCart = (product) => {
  return (dispatch) => dispatch({ type: ADD_TO_CART, payload: product });
};

export { addToCart };
