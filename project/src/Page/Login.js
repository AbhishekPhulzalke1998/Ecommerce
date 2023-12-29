import React from 'react';
// import { Grid, Paper, Avatar, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Avatar, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import './Login.css';


const Login = () => {

    const paperStyle = { padding: 20, margin: "20px auto" };
    const avatarStyle = { backgroundColor: 'green' }
    const btnstyle = { margin: '8px 0' }

    return (
        <Grid>
            <Paper className='grid-container'elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <div className='flex-container'>
                <TextField label='Email' placeholder='Enter Email'  required />
                <TextField label='Password' placeholder='Enter Password' type='password' required />
                </div>
                <button type='submit' color='primary' variant="contained"  style={btnstyle}>Sign in</button>
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
