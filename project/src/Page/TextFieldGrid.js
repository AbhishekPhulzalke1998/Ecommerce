// TextFieldGrid.js

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
      error={props.error !== ''} // This line shows error visually.
      helperText={props.error} // This line adds additional text below the input field.
    />
  );
};

export default TextFieldGrid;
