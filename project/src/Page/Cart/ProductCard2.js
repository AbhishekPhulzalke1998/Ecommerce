import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Stack,Grid } from '@mui/material';

const ProductCard2 = (props) => {
  console.log(props);
  
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: '30px' }}>
        <Card sx={{ maxWidth: 720 }}>
          <CardMedia sx={{ height: 250 }}
            image={props.image}
          />
          <CardContent justifyContent="center" alignItems="center">
            <Typography gutterBottom variant="h4" component="div">
            ProductName:   {props.ProductName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ProductDescription: {props.ProductDescription}
            </Typography>

            {/* <Typography variant="h5" style={{textAlign:'right'}}>ProductName:   {props.ProductName}</Typography> */}
            <Typography variant="h6" style={{textAlign:'center'}}>Price :     {props.Price}</Typography>
            <Typography variant="h6" style={{textAlign:'center'}}>Quantity :   {props.Quantity}</Typography>
            <Typography variant="h6" style={{textAlign:'center'}}>Discount :   {props.Discount}</Typography>
            <Typography variant="h6" style={{textAlign:'center'}}>Total_price :   {props.Total_price }</Typography>
          </CardContent>
         </Card>
      </Stack>
    </Grid>
  );

};

export default ProductCard2;