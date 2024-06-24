// src/pages/ProductListingPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

function ProductListingPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0); // State to track the number of items in cart

  const productsPerPage = 9;

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  useEffect(() => {
    // Update cartItemCount whenever addToCart is called
    setCartItemCount(products.reduce((total, product) => total + (product.quantity || 0), 0));
  }, [products]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/categories`);
      setCategories(['all', ...response.data]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterProducts = (product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (product.rating.rate < minRating) {
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(filterProducts);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSliderChange = (event) => {
    setMinRating(parseFloat(event.target.value));
    setCurrentPage(1);
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add product to cart with a default quantity of 1
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === i
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white shadow'
          }`}
          style={{ transition: 'all 0.3s ease' }}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };
  

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="category" className="block text-gray-700">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rating" className="block text-gray-700">Minimum Rating:</label>
          <input
            type="range"
            id="rating"
            min="0"
            max="5"
            step="0.1"
            value={minRating}
            onChange={handleSliderChange}
            className="mt-1 block w-full"
          />
          <span className="mt-1 block text-sm text-gray-500">{minRating.toFixed(1)}</span>
        </div>
      </div>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts
              .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
              .map((product) => (
                <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-gray-500">Rating: {product.rating.rate}</p>
                    <div className="mt-4 flex items-center justify-between">
                    <button
  onClick={() => handleAddToCart(product)}
  className="relative bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  <span>Add to Cart</span>
  {cartItemCount > 0 && (
    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
      {cartItemCount}
    </span>
  )}
</button>


                      <Link
                        to={`/product/${product.id}`}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8">{renderPaginationButtons()}</div>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(null, mapDispatchToProps)(ProductListingPage);
