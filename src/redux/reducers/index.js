import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Create your cartReducer

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers if any
});

export default rootReducer;
