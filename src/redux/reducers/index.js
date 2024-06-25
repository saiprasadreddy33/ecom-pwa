import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  cart: cartReducer,
  alert: alertReducer,
});
