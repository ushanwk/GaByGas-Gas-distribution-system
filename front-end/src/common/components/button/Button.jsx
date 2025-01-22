import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

function ButtonComponent({
  label,
  onClick,
  to,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  disabled = false,
  customColor, 
  customWidth, 
  customHeight, 
}) {
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
      sx={{
        backgroundColor: customColor || undefined,
        width: customWidth || "auto", 
        height: customHeight || "auto",
        borderRadius:"10px"
      }}
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
      sx={{
        backgroundColor: customColor || undefined,
        width: customWidth || "auto", 
        height: customHeight || "auto", 
      }}
    >
      {label}
    </Button>
  );
}

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  disabled: PropTypes.bool,
  customColor: PropTypes.string, 
  customWidth: PropTypes.string, 
  customHeight: PropTypes.string, 
};

ButtonComponent.defaultProps = {
  onClick: null,
  to: null,
  variant: "contained",
  color: "primary",
  size: "medium",
  startIcon: null,
  endIcon: null,
  disabled: false,
  customColor: null,
  customWidth: null,
  customHeight: null,
};

export default ButtonComponent;
