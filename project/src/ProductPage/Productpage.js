import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
import Product from './Product/Product';
import OrderData from './Product/Data';
 
const Productpage = () => {
    const headerStyle={margin:0}
return (
    <>
    {/* <h2 style={headerStyle}>MyOrder Details</h2> */}
<Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: 'auto' }}>
      {
          OrderData.map(order =>
            {
                return <Product
                image={order.image}
                ProductName={order.ProductName}
                ProductDescription={order.ProductDescription}
                Price={order.Price}
                Quantity={order.Quantity}
                Discount={order.Discount}
              
                
                
                
                />
            })  
        }
</Stack>
      </Grid>
      </>
)
}
 
export default Productpage;
