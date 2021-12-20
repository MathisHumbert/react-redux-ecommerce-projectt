import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions/actions';

const initialState = {
  isSidebarOpen: false,
};

const productsReducer = (state = initialState, { type, payload }) => {
  if (type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
};

export default productsReducer;
