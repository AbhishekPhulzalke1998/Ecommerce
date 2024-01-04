import { Avatar, Grid, Paper, Typography, TextField, Button } from '@mui/material';
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

  };
  const avatarStyle = { backgroundColor: 'green' };

        
// const [FirstName, setFirstName] = useState('')
// const [LastName, setLastName] = useState('')
// const [Email, setEmail] = useState('')
// const [Password, setPassword] = useState('')
// const [PhoneNo, setPhoneNo] = useState('')
// const [date, setdatedate] = useState('')
// const [Address, setAddress] = useState('')
// const [Street, setStreet] = useState('')


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



  const handleInputChange = (label, value) => {
  
    const updatedFormData = { ...formData, [label]: value };
   
  
    const isFormValid = Object.values(updatedFormData).every((value) => value !== undefined && value !== '');
   
   
    setFormData(updatedFormData);
    setIsFormValid(isFormValid);
  };
  

  return (
    <Grid>
      <Paper className='noun'>
        <Grid align="center">
        <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 className='headerStyle'  >Sign Up</h2>
          <Typography variant="caption">Please fill this form to create an account</Typography>
        </Grid>
        <form className='pro' onSubmit={handleSubmit}>
          {data.map((placeholder) => (
               <div className='flex-container'>
            <TextFieldGrid
              key={placeholder.label }
              label={placeholder.label || placeholder.label2}
              placeholder={placeholder.placeholder}
              type={placeholder.type}
              value={formData[placeholder.label || placeholder.label2] ||''}
              
              onChange={(e) => handleInputChange(placeholder.label || placeholder.label2, e.target.value)}
            />
            </div>
          ))}


      
          <Button disabled={!isFormValid} className="btnStyle" type="submit" color="success" variant="contained">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
    
  );
};

export default RegistrationPage;
