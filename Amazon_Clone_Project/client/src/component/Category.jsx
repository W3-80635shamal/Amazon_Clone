import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/product1.png';
import image2 from '../images/product2.jpg';
import image3 from '../images/product3.jpeg';

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 }
  ];

  const containerStyle = {
    textAlign: 'center',
    marginTop: '30px',
    padding: '0 20px', 
  };

  const headingStyle = {
    marginBottom: '20px',
    cursor: 'pointer',
    fontSize: '24px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // Wrap items on smaller screens
    marginTop: '20px',
  };

  const productButtonStyle = {
    fontSize: '16px', 
    margin: '10px',
    padding: '10px 20px', 
    cursor: 'pointer',
    backgroundColor: '#0047AB',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    minWidth: '150px', 
  };

  const imageStyle = {
    width: '100%', 
    maxWidth: '400px',
    height: 'auto', 
    margin: '10px', 
    cursor: 'pointer',
  };

  const handleProductsClick = () => {
    navigate('/productlist');
  };

  return (
    <div style={containerStyle}>
      <h2 className="btn btn-primary" style={headingStyle} onClick={handleProductsClick}>Products</h2>
      <div style={buttonContainerStyle}>
        {categories.map((category, index) => (
          <div key={index} style={{ textAlign: 'center', flexBasis: '30%', marginBottom: '20px' }}>
            <img
              src={category.image}
              alt={`Category ${category.name}`}
              style={imageStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
