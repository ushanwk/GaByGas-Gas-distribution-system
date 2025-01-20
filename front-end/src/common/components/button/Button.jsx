import React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

function ButtonComponent({ label, onClick, to, variant = "contained", color = "primary", size = "medium", startIcon, endIcon, disabled = false }) {
  return to ? (
    <Button
      component={RouterLink}
      to={to}
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      sx={{ margin: "10px" }}
    >
      {label}
    </Button>
  ) : (

    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      sx={{ margin: "10px" }}
    >
      {label}
    </Button>
  );
}

export default ButtonComponent;
