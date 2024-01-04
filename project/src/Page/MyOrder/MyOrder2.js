import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
const MyOrder2 = (props) => {

  console.log(props);
  return (

    <Card sx={{ maxWidth: 720, marginTop: '20px', marginBottom: '20px', padding: '20px'}}>
      <CardContent>
        {/* <Typography variant="h4" style={{ fontWeight: 'bold',textAlign:'left' }}>MY ORDERS :-</Typography> */}
        <Typography variant="h5" style={{ textAlign: 'right' }}> Sr.NO :   {props.Sr}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}> OrderNo :     {props.OrderNo}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}> Total_Amount :   {props.Total}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}> OrderStatus :   {props.OrderStatus}</Typography>
      </CardContent>
    </Card>


  )
}

export default MyOrder2;