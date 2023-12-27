import { Avatar, Grid, Paper, Typography,TextField } from '@mui/material';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './RegistrationPage.css';
import { green } from '@mui/material/colors';
import data from './Registrationholder';
import TextFieldGrid from './TextFieldGrid';




const RegistrationPage = () => {
const paperStyle = { padding: '30px 20px', width:500,   margin: "20px auto" };
const headerStyle={margin:0}
const avatarStyle = { backgroundColor: 'green' }
const btnstyle = { margin: '26px 0', color:green}
  return (
         <Grid>

             <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                       <Avatar style={avatarStyle}>
                       <AddCircleOutlineIcon/>
                       </Avatar>
                       <h2 style={headerStyle}>Sign Up</h2>
                       <Typography variant='caption'>Please fill this form to craete an account</Typography>
                </Grid>
                <form style={{ display:'flex', flexDirection: 'column', gap: '20px'}}>
              {
                data.map(placeholder =>
                {
                     return <TextFieldGrid
                label={placeholder.label}
                placeholder={placeholder.placeholder}
                type={placeholder.type}
                />
                }

                )   
              }  
                {/* <Grid className='AB'>
                <TextField fullWidth label='FirstName' placeholder='Enter your FirstName'/>
                <TextField fullWidth label='LastName'placeholder='Enter your LastName'/>
                </Grid>
                <Grid className='AB'>
                <TextField fullWidth label='Email' type='Email' placeholder='Enter your Email'/>
                <TextField fullWidth label='Password' type='password' placeholder='Enter your Password'/>
                </Grid>
                <Grid className='AB'>
                <TextField fullWidth label='PhoneNo' type='PhoneNo'  placeholder='Enter your PhoneNo'/>
                <TextField fullWidth label='date' type='date'/>
                </Grid>
                <Grid className='AB'>
                <TextField fullWidth label='Address' type='Address'placeholder='Enter your Address'/>
                <TextField fullWidth label='Street' type='Street' placeholder='Enter your Street'/>
                </Grid>
                <Grid className='AB'>
                <TextField fullWidth label='City' type='City'placeholder='Enter your City'/>
                <TextField fullWidth label='State' type='State'placeholder='Enter your State'/>
                </Grid>
                <Grid className='AB'>
                <TextField fullWidth label='Pincode' type='Pincode' placeholder='Enter your Pincode'/>
                <TextField fullWidth label='Country' type='Country'placeholder='Enter your Country'/>
                </Grid> */}
              
              </form>
              <button className='BC'type='submit' color='primary' variant="contained"  style={btnstyle}>Sign Up</button>
            
             </Paper>
         </Grid>
       )
}

export default RegistrationPage;
