import React from 'react';
import { TextField } from '@mui/material';

const TextFieldGrid = (props) => {
  return (
    <TextField
      fullWidth
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      error={props.error !== ''}
      helperText={props.error}
    />
  );
};

export default TextFieldGrid;
