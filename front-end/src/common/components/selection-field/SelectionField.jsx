import PropTypes from "prop-types";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function SelectionField({
                         label,
                         name,
                         value,
                         onChange,
                         options,
                         required = false,
                         width = "10%",
                     }) {
    return (
        <FormControl fullWidth margin="normal" required={required}>
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={value}
                onChange={onChange}
                variant="outlined"
                style={{
                    backgroundColor: "white",
                    width: width,
                    borderRadius: "10px",
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

SelectionField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    required: PropTypes.bool,
    width: PropTypes.string,
};

SelectionField.defaultProps = {
    required: false,
    width: "10%",
};

export default SelectionField;
