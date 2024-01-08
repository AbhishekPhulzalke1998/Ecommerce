// Order.js

import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import './Order.css'; 

const Order = (props) => {

  console.log(props);

  return (
    <Card className="order-card">
      <CardContent>
        <Typography variant="h5" className="order-text">CustomerName: {props.CustomerName}</Typography>
        <Typography variant='h5' className="order-text">OrderNo: {props.OrderNo}</Typography>
        <Typography variant='h5' className="order-text">Total_Amount: {props.Total}</Typography>
        <Typography variant='h5' className="order-text">Status: {props.Status}</Typography>
      </CardContent>
    </Card>
  )
}

export default Order;
