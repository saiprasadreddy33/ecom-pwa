// pages/CartPage.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../styles/cart-page.css'; // Import external CSS file
import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = ({ cart, removeFromCart }) => {
  const { items } = cart;

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

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
              <CartItem key={item.id} item={item} handleRemove={handleRemove} />
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <Link
              to="/thankyou"
              className="proceed-to-checkout"
            >
              Proceed to Checkout →
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { removeFromCart })(CartPage);
