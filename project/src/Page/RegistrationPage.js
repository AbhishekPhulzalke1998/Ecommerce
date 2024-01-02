import { Avatar, Grid, Paper, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './RegistrationPage.css';
import data from './Registrationholder';
import TextFieldGrid from './TextFieldGrid';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({});

  const registerUser = async (formData) => {
    // ... implementation of registerUser function
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await registerUser(formData);
    if (response.status === 201) {
      console.log('User registered successfully');
    } else {
      console.error('Unexpected response status:', response.status);
    }
  };

  const paperStyle = { padding: '30px 20px', width: 500, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: 'green' };
  const btnstyle = { margin: '26px 0', color: 'green' };

  const handleInputChange = (label, value) => {
    setFormData((prevData) => ({ ...prevData, [label]: value }));
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">Please fill this form to create an account</Typography>
        </Grid>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
          {data.map((placeholder) => (
            <TextFieldGrid
              key={placeholder.label}
              label={placeholder.label}
              placeholder={placeholder.placeholder}
              type={placeholder.type}
              value={formData[placeholder.label] || ''}
              onChange={(e) => handleInputChange(placeholder.label, e.target.value)}
            />
          ))}
          <Button className="BC" type="submit" color="primary" variant="contained" style={btnstyle}>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegistrationPage;
