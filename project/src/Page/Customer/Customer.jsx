import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
const Customer = (props) => {

  console.log(props);
  const hidePassword = (password) => '*'.repeat(password.length);
  // const cellStyle = {
  //   border: '1px solid black',  
  //   padding: '10px',            
  // };
  return (

    <Card sx={{ maxWidth: 520, marginTop: '10px', marginBottom: '10px' }}>
      <CardContent>
        {/* <Typography variant="h4" style={{ fontWeight: 'bold',textAlign:'left' }}>CustomerList :-</Typography> */}
        <Typography variant="h5" style={{ textAlign: 'right' }}>FirstName:- {props.FirstName}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}>LastName:- {props.LastName}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}>Email:- {props.Email}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}>Password:- {hidePassword(props.Password)}</Typography>
        <Typography variant='h5' style={{ textAlign: 'right' }}>type:- {props.type}</Typography>
      </CardContent>
    </Card>

    // <tr>
    //   <td style={cellStyle}>{props.FirstName}</td>
    //   <td style={cellStyle}>{props.LastName}</td>
    //   <td style={cellStyle}>{props.Email}</td>
    //   <td style={cellStyle}>{hidePassword(props.Password)}</td>
    //   <td style={cellStyle}>{props.type}</td>
    // </tr>

  )
}

export default Customer;