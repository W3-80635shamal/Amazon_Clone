import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9898/products');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, (prevQuantities[productId] || 0) + delta), // Updated to start with 0
    }));
  };

  const addToCart = async (product) => {
    const quantity = quantities[product.product_id] || 0; 
    try {
      const response = await axios.post('http://localhost:9898/cart/add', {
        id: 1, 
        product_id: product.product_id,
        quantity,
      });
      console.log('Added to cart:', response.data);
      navigate('/cart'); 
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.product_id}>
            <img src={`http://localhost:9898/${product.image}`} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button className="btn quantity-btn" onClick={() => handleQuantityChange(product.product_id, -1)}>-</button>
              <span className="quantity-display">{quantities[product.product_id] || 0}</span>
              <button className="btn quantity-btn" onClick={() => handleQuantityChange(product.product_id, 1)}>+</button>
            </div>
            <button className="btn add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
