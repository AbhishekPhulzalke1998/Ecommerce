import React from 'react'
import { Avatar, Grid, Paper, Typography,TextField, Flex } from '@mui/material';
// import './RegistrationPage.css';
const TextFieldGrid = (props) => {

  return (
    <TextField fullWidth type={props.type} label={props.label} placeholder={props.placeholder} onChange = {props.onChange}/>
  )

}

export default TextFieldGrid
