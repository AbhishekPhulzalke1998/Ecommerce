import React, { useState } from 'react';
import { Grid, TextField, Container, Typography, Card } from '@mui/material';
import Product from './Product/Product';

const Productpage = () => {
    const [productData, setProductData] = useState({
        productname: '',
        productdescription: '',
        price: '',
        quantity: '',
        image: '',
        discount: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Data:', productData);
    };

    return (
        <Container className="product-container">
            <Typography variant="caption" className="product-title">
                Product Page
            </Typography>
            <Product />
        </Container>
    );
};

export default Productpage;
