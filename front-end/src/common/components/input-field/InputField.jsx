import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
<<<<<<< HEAD
  width = "100%", 
=======
  width = "100%", // Default width is 100% (full width)
>>>>>>> 1ffe993 (Added  login component)
}) {
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
      InputProps={{
        style: {
          backgroundColor: "white", 
          width: width, 
          borderRadius:"10px"
        },
      }}
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  required: false,
  placeholder: "",
  width: "100%", 
};

export default InputField;
