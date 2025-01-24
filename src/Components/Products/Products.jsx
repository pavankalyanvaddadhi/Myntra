import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = ({ searchTerm, selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from the API
  const getPostData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log('Fetched products:', response.data); // Log fetched data
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch product data when the component mounts
  useEffect(() => {
    getPostData();
  }, []);

  // Log the selected category whenever it changes
  useEffect(() => {
    console.log('Selected category in Products:', selectedCategory);
  }, [selectedCategory]);

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there is an error
  if (error) {
    return <div>{error}</div>;
  }

  const fallbackImage = 'https://via.placeholder.com/150';

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter products based on the selected category
  const productsToDisplay = selectedCategory
    ? filteredProducts.filter(product => product.category === selectedCategory)
    : filteredProducts;

  // Check if there are no products found
  if (productsToDisplay.length === 0) {
    return <div>No products found for "{selectedCategory || searchTerm}"</div>;
  }

  // Map through the filtered products to create product cards
  const productCards = productsToDisplay.map(product => (
    <div className="col-3 py-3" key={product.id}>
      <div className="card-products">
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => { e.target.src = fallbackImage; }}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-rating">
          Rating:
          <span className="rating-stars">
            {'★'.repeat(Math.floor(product.rating.rate))}
            {'☆'.repeat(5 - Math.floor(product.rating.rate))}
          </span>
          ({product.rating.count})
        </p>
      </div>
    </div>
  ));

  return (
    
   
    <div className="container">
      <div className="row">{productCards}</div>
    </div>
  );
};

export default Products;