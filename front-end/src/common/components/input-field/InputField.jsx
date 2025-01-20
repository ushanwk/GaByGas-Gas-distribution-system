import React from "react";
import TextField from "@mui/material/TextField";

function InputField({ label, name, value, onChange, type = "text", required = false, placeholder }) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}

export default InputField;
