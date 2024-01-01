import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
import ProductCard2 from './ProductCard2';
import OrderData from './Data';

const ProductCard = () => {
    const headerStyle={margin:0}
return (
    <>
    {/* <h2 style={headerStyle}>MyOrder Details</h2> */}
<Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: 'auto' }}>
      {
          OrderData.map(order =>
            {
                return <ProductCard2
                image={order.image}
                ProductName={order.ProductName}
                ProductDescription={order.ProductDescription}
                Price={order.Price}
                Quantity={order.Quantity}
                Discount={order.Discount}
                Total_price={order.Total_price}
                
                
                
                />
            })  
        }
</Stack>
      </Grid>
      </>
)
}

export default ProductCard;