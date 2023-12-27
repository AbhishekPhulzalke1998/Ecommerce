import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
const Order = (props) => {

    console.log(props);
     
          
  return (

    <Card sx={{ maxWidth: 720, marginTop:'20px', marginBottom: '20px' }}>
          <CardContent>
          {/* <Typography variant="h4" style={{ fontWeight: 'bold',textAlign:'left' }}>ALL ORDERS :-</Typography> */}
            <Typography variant="h5" style={{textAlign:'right'}}>CustomerName: {props.CustomerName}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>OrderNo: {props.OrderNo}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>Total_Amount: {props.Total}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>Status: {props.Status}</Typography>
          </CardContent>
       </Card>

      
  )
}

export default Order;