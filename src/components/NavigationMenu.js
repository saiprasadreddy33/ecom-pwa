import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavigationMenu() {
  const cartItems = useSelector(state => state.cart.items.length);
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Home</Link>
        <Link to="/cart" className="cart-link">
        Cart ({cartItems})
      </Link>
      </div>
    </nav>
  );
}

export default NavigationMenu;