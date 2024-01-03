import React from 'react';
// import { Grid, Paper, Avatar, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Avatar, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import './Login.css';
import { AuthenticateUser } from '../_services/userservice';
import { loginUser } from '../_services/loginService';
import  { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

  const loginUser = async (Email,Password) => {
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials.email,credentials.password);
    const response = await loginUser(credentials.email, credentials.password);
    if (response.status === 201) {
      console.log('User login successfully');
    } else {
      console.error('Unexpected response status:', response.status);
    }
  };

  const handleChange = (e) => {
    // Update the state based on the input field
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
    console.log(credentials);
  };

    const paperStyle = { padding: 20, margin: "20px auto" };
    const avatarStyle = { backgroundColor: 'green' }
    const btnstyle = { margin: '8px 0' }

    //     const login = async () => {
    //     toggleBackdrop(true);
    //     try {
    //           const response = await AuthenticateUser({userName:"", password:""});
    //          window.location.reload();
    //     } catch (e) {
    //         console.log(e.response);
    //         createErrorToast(e?.response?.data);
    //     } finally {
    //         toggleBackdrop(false);
    //     }
    // };


    return (
        <Grid>
            <Paper className='grid-container' elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <div className='flex-container'>
                    <TextField 
                     label='Email'
                     placeholder='Enter Email'
                      type='email'
                       required
                       name='email'
                       value={credentials.email}
                       onChange={handleChange}
                      
                       />
                    <TextField 
                    label='Password'
                    placeholder='Enter Password'
                    type='password' 
                    required 
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                  
                    />
                </div>
                <button type='submit' color='primary' variant="contained" style={btnstyle}>Sign in</button>
                <FormControlLabel
                    control={
                        <Checkbox

                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"

                />

                <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>

                <Typography> Do you have an account ?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
