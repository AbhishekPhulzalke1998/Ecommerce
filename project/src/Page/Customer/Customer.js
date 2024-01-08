import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import './Customer.css'; 

const Customer = (props) => {

  console.log(props);
  const hidePassword = (password) => '*'.repeat(password.length);

  return (
    <Card className="customer-card">
      <CardContent>
        <Typography variant="h5" className="customer-info">FirstName:- {props.FirstName}</Typography>
        <Typography variant='h5' className="customer-info">LastName:- {props.LastName}</Typography>
        <Typography variant='h5' className="customer-info">Email:- {props.Email}</Typography>
        <Typography variant='h5' className="customer-info">Password:- {hidePassword(props.Password)}</Typography>
        <Typography variant='h5' className="customer-info">Type:- {props.type}</Typography>
      </CardContent>
    </Card>
  );
}

export default Customer;
