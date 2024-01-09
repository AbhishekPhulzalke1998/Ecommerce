import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack, Grid } from '@mui/material';
import './ProductCard2.css'; 

const ProductCard2 = (props) => {
  console.log(props);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack className="product-card-stack">
        <Card className="product-card">
          <CardMedia
            className="product-card-media"
            image={props.image}
          />
          <CardContent className="product-card-content">
            <Typography gutterBottom variant="h4" component="div" className="product-name"> ProductName:   {props.ProductName}</Typography>
            <Typography variant="body2" color="text.secondary" className="product-description">ProductDescription: {props.ProductDescription}</Typography>
            <Typography variant="h6" className="price">Price :     {props.Price}</Typography>
            <Typography variant="h6" className="quantity">Quantity :   {props.Quantity}</Typography>
            <Typography variant="h6" className="discount"> Discount :   {props.Discount}</Typography>
            <Typography variant="h6" className="total-price">Total_price :   {props.Total_price}</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Grid>
  );
};

export default ProductCard2;
