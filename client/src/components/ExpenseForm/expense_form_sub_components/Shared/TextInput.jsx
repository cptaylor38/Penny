import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = ({ labelText, value, changeHandler, name }) => {
  return (
    <>
      <TextField
        id='standard-basic'
        name={name}
        label={labelText}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
};

export default TextInput;