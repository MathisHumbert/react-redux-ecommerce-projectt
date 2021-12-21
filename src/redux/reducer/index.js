import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  productsReducer,
  filterReducer,
});

export default rootReducer;
