import React, { useState } from "react";

const SelectBox = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (onSelect) {
            onSelect(value); 
        }
    };

    return (
        <div className="w-64">
            <div className="relative">
                <select
                    id="options"
                    value={selectedOption}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black"
                >
                    <option value="" disabled>Select Gas Type</option>
                    <option value="Small Gas">Small Gas</option>
                    <option value="Large Gas">Large Gas</option>
                </select>
            </div>
        </div>
    );
};

export default SelectBox;
