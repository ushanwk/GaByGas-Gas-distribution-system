
import React, { useState } from "react";


const SelectBox = () => {
    const [selectedOption, setSelectedOption] = useState("Select an option");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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
                    <option disabled>Select an option</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                </div>
            </div>
        </div>
    );
};

export default SelectBox;
