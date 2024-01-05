// TextFieldGrid.js
import React from 'react';
import { TextField } from '@mui/material';

const TextFieldGrid = (props) => {
  const handleInputChange = (e) => {
    const value = e.target?.value;
    let isValid = true;
    // Additional validation for PhoneNo and Pincode
    if (props.label === 'PhoneNo') {
      const isValidPhoneNo = !isNaN(value) && value.length === 10;
      if (!isValidPhoneNo) {
        console.log('Invalid Phone Number');
        return;
      }
    } else if (props.label === 'Pincode') {
      const isValidPincode = !isNaN(value) && value.length === 6;
      if (!isValidPincode) {
        console.log('Invalid Pincode');
        return;
      }
    }

    if (isValid) {
      props.onChange(value);
    }
  };

  return (
    <TextField fullWidth type={props.type} label={props.label} placeholder={props.placeholder} onChange={handleInputChange} />
  );
};

export default TextFieldGrid;
