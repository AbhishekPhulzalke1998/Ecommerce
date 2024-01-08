import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import './OrderDetails2.css'; 

const OrderDetails2 = (props) => {
  console.log(props);

  return (
    <Card className="order-details-card">
      <CardContent>
        <Typography variant="h5" className="order-info">Orderid :   {props.OrderId}</Typography>
        <Typography variant='h5' className="order-info">ProductName :     {props.ProductName}</Typography>
        <Typography variant='h5' className="order-info">Price :   {props.Price}</Typography>
        <Typography variant='h5' className="order-info">Discount :   {props.Discount}</Typography>
        <Typography variant='h5' className="order-info">Quantity :   {props.Quantity}</Typography>
        <Typography variant='h5' className="order-info">Total :   {props.Total}</Typography>
      </CardContent>
    </Card>
  );
}

export default OrderDetails2;
