import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item, removeFromCart }) => {
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="cart-item relative bg-white p-4 rounded-lg shadow-md transition-transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="absolute top-full right-2 mt-2 text-gray-500 hover:text-red-500"
        onClick={handleRemove}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg mb-2" />

      {isHovered && (
        <div className="absolute top-0 left-0 bg-white p-4 rounded-lg shadow-md transition-opacity">
          <div className="text-lg font-semibold mb-2">{item.title}</div>
          <div className="text-gray-700 mb-2">${item.price}</div>
          <div className="text-gray-500">Quantity: {item.quantity}</div>
          {item.description && (
            <p className="text-sm text-gray-600">{item.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default connect(null, { removeFromCart })(CartItem);
