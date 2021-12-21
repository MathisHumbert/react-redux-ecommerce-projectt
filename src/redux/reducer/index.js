import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import filterReducer from './filterReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  productsReducer,
  filterReducer,
  cartReducer,
});

export default rootReducer;
