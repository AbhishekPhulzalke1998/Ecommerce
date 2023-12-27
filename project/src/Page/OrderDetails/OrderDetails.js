import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
import OrderDetails2 from './OrderDetails2';
import OrderData from './Data';

const OrderDetails = () => {
    const headerStyle={margin:0}
return (
    <>
    <h2 style={headerStyle}>Order Details</h2>
<Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: 'auto' }}>
      {
          OrderData.map(order =>
            {
                return <OrderDetails2
                OrderId={order.OrderId}
                ProductName={order.ProductName}
                Price={order.Price}
                Discount={order.Discount}
                Quantity={order.Quantity}
                Total={order.Total}
                
                />
            })  
        }
</Stack>
      </Grid>
      </>
)
}

export default OrderDetails;