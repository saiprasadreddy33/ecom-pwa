// components/CartItem.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item, removeFromCart }) => {
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
        <p className="cart-item-quantity">Quantity: {item.length}</p>
        <button onClick={handleRemove} className="remove-from-cart-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartItem);
