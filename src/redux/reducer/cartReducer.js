import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions/actions';

const localCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cart: localCart,
  amount: 0,
  price: 0,
  shipping: 499,
};

const cartReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_TO_CART) {
    let tempCart;
    const itemExist = state.cart.find((item) => item.id === payload.id);

    if (itemExist) {
      tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item.amount += payload.amount;
        }
        return item;
      });
    } else {
      tempCart = [...state.cart, payload];
    }

    localStorage.setItem('cart', JSON.stringify(tempCart));
    return { ...state, cart: tempCart };
  }
  if (type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, type } = payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (type === 'inc') {
          item.amount =
            item.amount === item.stock ? item.amount : item.amount + 1;
        } else {
          item.amount = item.amount === 1 ? item.amount : item.amount - 1;
        }
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(tempCart));
    return { ...state, cart: tempCart };
  }
  if (type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== payload);
    localStorage.setItem('cart', JSON.stringify(tempCart));
    return { ...state, cart: tempCart };
  }
  if (type === COUNT_CART_TOTALS) {
    const { amount, price } = state.cart.reduce(
      (acc, curr) => {
        acc.amount += curr.amount;
        acc.price += curr.amount * curr.price;
        return acc;
      },
      { amount: 0, price: 0 }
    );
    return { ...state, amount, price };
  }
  if (type === CLEAR_CART) {
    const tempCart = [];
    localStorage.setItem('cart', JSON.stringify(tempCart));
    return { ...state, cart: tempCart };
  }
  return state;
};

export default cartReducer;
