import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Use axios or fetch to make API requests

const ProductDisplayPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details by id from the API
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

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
      <div className="flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-1/2 h-auto" />
      </div>
      <p className="text-gray-700 mt-4">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      {/* Additional product details if needed */}
    </div>
  );
};

export default ProductDisplayPage;
