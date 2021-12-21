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

const toggleCartItemAmount = (id, type) => {
  return (dispatch) =>
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, type } });
};

const removeCartItem = (id) => {
  return (dispatch) => dispatch({ type: REMOVE_CART_ITEM, payload: id });
};

const countCartTotals = () => {
  return (dispatch) => dispatch({ type: COUNT_CART_TOTALS });
};

const clearCart = () => {
  return (dispatch) => dispatch({ type: CLEAR_CART });
};

export {
  addToCart,
  toggleCartItemAmount,
  removeCartItem,
  countCartTotals,
  clearCart,
};
