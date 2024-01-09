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
  const [errorMessages, setErrorMessages] = useState({});

  const registerUser = async (formData) => {
   
  };

  const avatarStyle = { backgroundColor: 'green' };

  const handleInputChange = (label, value) => {
    const updatedFormData = { ...formData, [label]: value };

    // Validation for PhoneNo: only digits and up to 10 digits
    if (label === 'PhoneNo') {
      const isValidPhoneNo = !isNaN(value) && value.length === 10;
      if (!isValidPhoneNo) {
        // Invalid PhoneNo
        setFormData(updatedFormData);
        setErrorMessages({ ...errorMessages, [label]: 'Invalid PhoneNo. Only digits are allowed (PhoneNo should be of 10 digits)' });
        setIsFormValid(false);
        return;
      } else {
        setErrorMessages({ ...errorMessages, [label]: '' });
      }
    }

    // Validation for Pincode: only digits and up to 6 digits
    if (label === 'Pincode') {
      const isValidPincode = !isNaN(value) && value.length === 6;
      if (!isValidPincode) {
        // Invalid Pincode
        setFormData(updatedFormData);
        setErrorMessages({ ...errorMessages, [label]: 'Invalid Pincode. Only digits are allowed (Pincode should be of 6 digits)' });
        setIsFormValid(false);
        return;
      } else {
        setErrorMessages({ ...errorMessages, [label]: '' });
      }
    }

    // Check if all fields are filled
    const isFormValid = data.every((placeholder) => updatedFormData[placeholder.label] !== undefined && updatedFormData[placeholder.label] !== '');

    setFormData(updatedFormData);
    setIsFormValid(isFormValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (isFormValid) {
      const response = await registerUser(formData);
      if (response?.status === 201) {
        console.log('User registered successfully');
      } else {
        console.error('Unexpected response status:', response?.status);
      }
    } else {
      console.log('Form is not valid. Please correct errors.');
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
            <div className='flex-container' key={placeholder.label}>
              <TextFieldGrid
                label={placeholder.label}
                placeholder={placeholder.placeholder}
                type={placeholder.type}
                value={formData[placeholder.label] || ''}
                onChange={(value) => handleInputChange(placeholder.label, value)}
                error={errorMessages[placeholder.label] || ''}
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
