import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import image1 from '../images/product1.png';
import image2 from '../images/electronic.jpg';
import image3 from '../images/clothbanner.jpg';
import '../css/CarouselComponent.css';

function CarouselComponent() {
    const items = [
        {
            image: image1,
            alt: "First slide"
        },
        {
            image: image2,
            alt: "Second slide"
        },
        {
            image: image3,
            alt: "Third slide"
        }
    ];

    const imageStyle = {
        width: '100%',
        height: 'auto', 
        maxHeight: '400px', 
        objectFit: 'cover' 
    };

    return (
        <Carousel>
            {items.map((item, index) => (
                <Paper key={index} elevation={3}>
                    <img
                        src={item.image}
                        alt={item.alt}
                        style={imageStyle}
                    />
                </Paper>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;
