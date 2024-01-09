import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import CustomerData from './data';
import Customer from './Customer';

const CustomerList = () => {

  return (
    <>
      <h2>Customer List</h2>
      <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ margin: 'auto' }}>
          {
            CustomerData.map(customer => {
              return <Customer
                FirstName={customer.FirstName}
                LastName={customer.LastName}
                Email={customer.Email}
                Password={customer.Password}
                type={customer.type}
              />
            })
          }

        </Stack>
      </Grid>
    </>




  )
}

export default CustomerList;
