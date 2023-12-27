import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Stack,Grid } from '@mui/material';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: '20px' }}>
        <Card sx={{ maxWidth: 520 }}>
          <CardMedia sx={{ height: 250 }}
            image="https://manofmany.com/wp-content/uploads/2017/06/32-Top-Luxury-Watch-Brands.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              Titan Watch
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Titan Company Watches are good to use as they made up
              Good quality material.Company operating in india
              with 585 branches across the country.
            </Typography>

            <Typography variant="h5" style={{ color: ' #24c148', fontWeight: '100' }}>Rs.500</Typography>
            <Typography variant="h6" style={{ color: "skyblue", fontWeight: '50' }}>QTY:- 1</Typography>
            <Typography variant="h6" style={{ color: "skyblue", fontWeight: '50' }}>Discount:- 10%</Typography>
            <Typography variant="h6" style={{ color: ' #24c148', fontWeight: '50' }}>Total_Pirze:- Rs.450</Typography>
          </CardContent>
          <Grid container justifyContent="center" alignItems="center">
          <CardActions>
            <Button  
            size="small" onClick={() => onAddToCart(product)}>
              Add to Cart
            </Button>
          </CardActions>
          </Grid>
        </Card>
      </Stack>
    </Grid>
  );

};

export default ProductCard;