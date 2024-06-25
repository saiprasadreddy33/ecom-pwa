import { SHOW_ALERT, HIDE_ALERT } from '../actions/alertActions';

const initialState = {
  message: null,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
