import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductDisplayPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    alert(`Added ${quantity} ${product.title}(s) to cart.`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-700 text-xl mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Rating:</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                {[...Array(5)].map((_, index) => (
                  <path key={index} fill={index < Math.round(product.rating.rate) ? 'currentColor' : 'none'} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6c1.573-1.026 3.826-.404 5 1l2.6-5.2a1 1 0 011.8 0L12 7h6" />
                ))}
              </svg>
              <span className="text-gray-700 ml-2">{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</span>
            </div>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="text-lg mr-4">Quantity:</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-700 hover:text-black focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13 10a1 1 0 00-2 0v3a1 1 0 002 0v-3zm-6 0a1 1 0 00-2 0v3a1 1 0 002 0v-3z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="mx-4 text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-700 hover:text-black focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13 7a1 1 0 00-2 0v3H8a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 mr-4"
          >
            Add to Cart ({quantity})
          </button>
          <Link to="/" className="text-gray-700 hover:text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block align-middle mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.707 3.293a1 1 0 00-1.414 0l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L5.414 11H17a1 1 0 100-2H5.414l5.293-5.293a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductDisplayPage);
