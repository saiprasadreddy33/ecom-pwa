export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const showAlert = (message) => ({
  type: SHOW_ALERT,
  payload: message,
});

export const hideAlert = () => ({
  type: HIDE_ALERT,
});
