//src/components/ProductCard.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { Link } from 'react-router-dom';
import '../styles/product-card.css';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const newItem = { ...product, quantity }; // Create a new item object with quantity
    addToCart(newItem); // Dispatch addToCart action with the new item
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="overlay">
          <div className="overlay-content">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <div className="flex items-center mt-2">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="quantity-input"
                min="1"
              />
              <button onClick={handleAddToCart} className="add-to-cart-button">
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="view-details-button">
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addToCart })(ProductCard); // Connect addToCart action
