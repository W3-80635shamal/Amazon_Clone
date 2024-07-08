import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:9898/cart/1'); // Replace with actual user ID
        if (response.data && response.data.data) {
          setCartItems(response.data.data);
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (product_id) => {
    try {
      await axios.delete('http://localhost:9898/cart/remove', {
        data: {
          id: 1, // Replace with actual user ID
          product_id,
        },
      });
      setCartItems(cartItems.filter((item) => item.product_id !== product_id));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleContinueShopping = () => {
    navigate('/products'); 
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.product_id}>
              <img src={`http://localhost:9898/${item.image}`} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button className="btn remove-from-cart" onClick={() => handleRemoveFromCart(item.product_id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      <button className="btn continue-shopping" onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
