import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart,FaUserCircle   } from "react-icons/fa";
import { MdOutlineAddToHomeScreen } from "react-icons/md";

function NavigationMenu() {
  const cartItems = useSelector(state => state.cart.items.length);

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-lg font-semibold">
          <MdOutlineAddToHomeScreen  className="w-5 h-5 mr-1" /> Home
        </Link>
        <Link to="/cart" className="flex items-center cart-link">
          <FaShoppingCart className="w-5 h-5 mr-1" /> Cart ({cartItems})
        </Link>
        <Link to="/profile" className="flex items-center text-white text-lg font-semibold">
          <FaUserCircle className="w-5 h-5 mr-1" /> Profile
        </Link>
       
      </div>
    </nav>
  );
}

export default NavigationMenu;
