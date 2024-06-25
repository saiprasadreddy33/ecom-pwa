// ThankYouPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions/cartActions';
import { showAlert } from '../redux/actions/alertActions';

const ThankYouPage = ({ location, clearCart, showAlert }) => {
  useEffect(() => {
    clearCart();
    showAlert('Thank you for your purchase!');
  }, [clearCart, showAlert]); 
  if (!location || !location.state) {
    // Handle case where location or location.state is undefined (optional)
    return (
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4">Thank You</h2>
        <p>Thank you for your purchase!</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">Continue Shopping</Link>
      </div>
    );
  }

  const { product, quantity } = location.state;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Thank You</h2>
      <p>Thank you for your purchase!</p>
      <p>You have successfully added {quantity} {product.title}(s) to your cart.</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 block">Continue Shopping</Link>
    </div>
  );
}
const mapDispatchToProps = {
  clearCart,
  showAlert,
};

export default connect(null, mapDispatchToProps)(ThankYouPage);
