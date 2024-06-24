import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = ({ location }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Thank You</h2>
      <p>Thank you for your purchase!</p>
      <p>You have successfully added {location.state.quantity} {location.state.product.title}(s) to your cart.</p>
      <Link to="/products" className="text-blue-500 hover:underline mt-4 block">Continue Shopping</Link>
    </div>
  );
}

export default ThankYouPage;
