// src/redux/reducers/cartReducer.js

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // If item already exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return {
          ...state,
          items: updatedItems
        };
      } else {
        // If item doesn't exist, add it to cart
        return {
          ...state,
          items: [...state.items, newItem]
        };
      }

    case 'REMOVE_FROM_CART':
      const productId = action.payload;
      const updatedItems = state.items.filter(item => item.id !== productId);
      return {
        ...state,
        items: updatedItems
      };

    default:
      return state;
  }
};

export default cartReducer;
