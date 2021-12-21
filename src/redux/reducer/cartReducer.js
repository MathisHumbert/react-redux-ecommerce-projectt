import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions/actions';

const localCart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(localCart);

const initialState = {
  cart: localCart,
  amount: 0,
  price: 0,
  shipping: 4.99,
};

const cartReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_TO_CART) {
    const tempCart = [...state.cart, payload];
    localStorage.setItem('cart', JSON.stringify(tempCart));
    return { ...state, cart: tempCart };
  }
  return state;
};

export default cartReducer;
