// pages/CartPage.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../styles/cart-page.css'; // Import external CSS file
import { removeFromCart } from '../redux/actions/cartActions';
import { showAlert } from '../redux/actions/alertActions';

const CartPage = ({ cart, removeFromCart, showAlert }) => {
  const handleProceedToCheckout = () => {
    showAlert('Proceeding to checkout...');
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
    showAlert('Item removed from cart.');
  };

  const { items } = cart;

  return (
    <div className="cart-page">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <div className="empty-cart-message">
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <Link to="/" className="back-to-shopping">
            ← Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} handleRemove={() => handleRemove(item.id)} />
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <Link onClick={handleProceedToCheckout} to="/thankyou" className="proceed-to-checkout">
              Proceed to Checkout →
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
