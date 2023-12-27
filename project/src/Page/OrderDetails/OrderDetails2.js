import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
const OrderDetails2 = (props) => {

    console.log(props);
     
          
  return (

    <Card sx={{ maxWidth: 720, marginTop:'20px', marginBottom: '20px',padding:'20px' }}>
          <CardContent>
          {/* <Typography variant="h4" style={{ fontWeight: 'bold',textAlign:'left' }}>MY ORDERS :-</Typography> */}
            <Typography variant="h5" style={{textAlign:'right'}}>Orderid :   {props.OrderId}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>ProductName :     {props.ProductName}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>Price :   {props.Price}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>Discount :   {props.Discount}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>Quantity :   {props.Quantity}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>Total :   {props.Total}</Typography>
          </CardContent>
       </Card>

      
  )
}

export default OrderDetails2;