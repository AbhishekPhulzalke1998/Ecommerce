import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import './MyOrder2.css'; 
const MyOrder2 = (props) => {
  console.log(props);

  return (
    <Card className="my-order-card">
      <CardContent>
        <Typography variant="h5" className="order-info"> Sr.NO :   {props.Sr}</Typography>
        <Typography variant='h5' className="order-info"> OrderNo :     {props.OrderNo}</Typography>
        <Typography variant='h5' className="order-info"> Total_Amount :   {props.Total}</Typography>
        <Typography variant='h5' className="order-info"> OrderStatus :   {props.OrderStatus}</Typography>
      </CardContent>
    </Card>
  );
}

export default MyOrder2;
