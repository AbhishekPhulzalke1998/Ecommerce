import { Avatar, Grid, Paper, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './RegistrationPage.css';
import data from './Registrationholder';
import TextFieldGrid from './TextFieldGrid';
import { registerUser } from '../_services/registrationService';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const registerUser = async (formData) => {
    // Implement your registration logic here
  };

  const avatarStyle = { backgroundColor: 'green' };

  const handleInputChange = (label, value) => {
    let errorMessages = {};

    // Validation for PhoneNo by which only accepts the digits and up to 10 digits
    if (label === 'PhoneNo') {
      const isValidPhoneNo = !isNaN(value) && parseInt(value, 10).toString().length === 10;
      if (!isValidPhoneNo) {
        errorMessages[label] = 'Invalid Phone Number (should be 10 digits)';
    
      }
    }

    // Validation for Pincode by which only accepts the digits and up to 6 digits.
    if (label === 'Pincode') {
      const isValidPincode = !isNaN(value) && parseInt(value, 10).toString().length === 6;
      if (!isValidPincode) {
        errorMessages[label] = 'Invalid Pincode (should be 6 digits)';
     
      }
    }

    const updatedFormData = { ...formData, [label]: value };

    // Below lines of code are check to see if there are any empty or undefined fields
    const isFormValid = data.every((placeholder) => updatedFormData[placeholder.label] !== undefined && updatedFormData[placeholder.label] !== '');

    setFormData(updatedFormData);
    setIsFormValid(isFormValid);

  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await registerUser(formData);
    if (response?.status === 201) {
      console.log('User registered successfully');
    } else {
      console.error('Unexpected response status:', response?.status);
    }
  };

  return (
    <Grid>
      <Paper className='noun'>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 className='headerStyle'>Sign Up</h2>
          <Typography variant="caption">Please fill this form to create an account</Typography>
        </Grid>
        <form className='pro' onSubmit={handleSubmit}>
          {data.map((placeholder) => (
            <div className='flex-container'>
              <TextFieldGrid
                key={placeholder.label}
                label={placeholder.label}
                placeholder={placeholder.placeholder}
                type={placeholder.type}
                value={formData[placeholder.label] || ''}
                onChange={(value) => handleInputChange(placeholder.label, value)}
              />
            </div>
          ))}

          <Button
            className="btnStyle"
            type="submit"
            color="success"
            variant="contained"
            disabled={!isFormValid}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegistrationPage;
