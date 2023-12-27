import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
import Order from './Order';
import OrderData from './Data';

const AllOrders = () => {
    const headerStyle={margin:0}
return (
<>
    <h2 style={headerStyle}>AllOrder Details</h2>
<Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: 'auto' }}>
      {
          OrderData.map(order =>
            {
                return <Order 
                CustomerName={order.CustomerName}
                OrderNo={order.OrderNo}
                Total={order.Total}
                Status={order.Status}
                
                />
            })  
        }
</Stack>
      </Grid>
      </>
)
}

export default AllOrders;