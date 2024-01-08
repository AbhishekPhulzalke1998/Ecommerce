import { Avatar, Grid, Paper, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './RegistrationPage.css';
import data from './Registrationholder';
import TextFieldGrid from './TextFieldGrid';
import { registerUser } from '../_services/registrationService';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [isFormValid, setIsFormValid] = useState(null);

  const registerUser = async (formData) => {

  };

  const avatarStyle = { backgroundColor: 'green' };

  const handleInputChange = (label, value) => {
    let newErrorMessages = {};
    let isFormValid = true;

    // Validation for PhoneNo by which only accepts the digits and up to 10 digits
    if (label === 'PhoneNo') {
      const isValidPhoneNo = !isNaN(value) && parseInt(value, 10).toString().length === 10;
      if (!isValidPhoneNo) {
        newErrorMessages[label] = 'Invalid PhoneNo only digits are allowed  (PhoneNo  should be of 10  digits)';
        isFormValid = false;
      } else {
        newErrorMessages[label] = '';
      }
    }

    // Validation for Pincode by which only accepts the digits and up to 6 digits.
    if (label === 'Pincode') {
      const isValidPincode = !isNaN(value) && parseInt(value, 10).toString().length === 6;
      if (!isValidPincode) {
        newErrorMessages[label] = 'Invalid Pincode only digits are allowed  ( Pincode should be of 6 digits)';
        isFormValid = false;
      } else {
        newErrorMessages[label] = '';
      }
    }

    const updatedFormData = { ...formData, [label]: value };

    setFormData(updatedFormData); // updating the FormData
    setErrorMessages(newErrorMessages); // Update error messages state
    setIsFormValid(isFormValid); // Here we are updating isFormValid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (isFormValid) {
      const response = await registerUser(formData);
      if (response?.status === 201) {  // from 200 to 299 indicates Successful response
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
            disabled={isFormValid === null || !isFormValid}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegistrationPage;
