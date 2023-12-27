import React from 'react';
import { Card, CardContent, Typography, Stack,Grid } from '@mui/material';
import CustomerData from './data';
import Customer from './Customer';

const CustomerList = () => {
        const tableStyle = {
            border: '5px solid black', 
            padding: '15px',            
            borderCollapse: 'collapse',
            margin: 'auto',
          };
        
          const cellStyle = {
            border: '1px solid black',  
            padding: '10px',            
          };
  return (
          
//   <>
//   <h2>Customer List</h2>
//     <table style={tableStyle}>

//         <tr>
//            <th style={cellStyle}>First Name</th>
//            <th style={cellStyle}>Last Name</th>
//            <th style={cellStyle}>Email</th>
//            <th style={cellStyle}>Password</th>
//            <th style={cellStyle}>type</th>


//         </tr>
//         {
//           CustomerData.map(customer =>
//             {
//                 return <Customer 
//                 FirstName={customer.FirstName}
//                 LastName={customer.LastName}
//                 Email={customer.Email}
//                 Password={customer.Password}
//                 type={customer.type}
//                 />
//             })  
//         }
//     </table>
//     </>
<>
<h2>Customer List</h2>
<Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: 'auto' }}>
      {
          CustomerData.map(customer =>
            {
                return <Customer 
                FirstName={customer.FirstName}
                LastName={customer.LastName}
                Email={customer.Email}
                Password={customer.Password}
                type={customer.type}
                />
            })  
        }
          {/* <Typography variant="h4" style={{ fontWeight: 'bold',textAlign:'left' }}>CustomerList :-</Typography>
            <Typography variant="h5" style={{textAlign:'right'}}>{CustomerData[0].FirstName}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{CustomerData[0].LastName}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{CustomerData[0].Email}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{hidePassword(CustomerData[0].Password)}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{CustomerData[0].type}</Typography> */}
      </Stack>
      </Grid>
      </>


/* <Grid container justifyContent="center" alignItems="center">
      <Stack sx={{ margin: '20px' }}>
        <Card sx={{ maxWidth: 520 }}>
          <CardContent>
          <Typography variant="h4" style={{ fontWeight: 'bold',textAlign:'left' }}>CustomerList :-</Typography>
            <Typography variant="h5" style={{textAlign:'right'}}>{CustomerData[0].FirstName}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{CustomerData[0].LastName}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{CustomerData[0].Email}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{hidePassword(CustomerData[0].Password)}</Typography>
            <Typography variant='h5' style={{textAlign:'right'}}>{CustomerData[0].type}</Typography>
          </CardContent>
      </Card>
      </Stack>
      </Grid> */
      
  )
}

export default CustomerList;
