import React, { useState, useEffect } from "react";
import axios from "axios";

const OutletSelectBox = ({ onSelect }) => {
    const [outlets, setOutlets] = useState([]); 
    const [selectedOutletId, setSelectedOutletId] = useState(""); 

    useEffect(() => {
        axios.get("http://localhost:8089/api/outlets")
            .then((response) => {
                setOutlets(response.data); 
            })
            .catch((error) => {
                console.error("Error fetching outlets:", error);
            });
    }, []);

    const handleChange = (event) => {
        const outletId = event.target.value;
        setSelectedOutletId(outletId);
        if (onSelect) {
            onSelect(outletId); // ✅ Return Outlet_Id instead of Location
        }
    };

    return (
        <div className="w-64">
            <div className="relative">
                <select
                    id="outlet-select"
                    value={selectedOutletId}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black"
                >
                    <option value="" disabled>Select Outlet</option>
                    {outlets.length > 0 ? (
                        outlets.map((outlet) => (
                            <option key={outlet.Outlet_Id} value={outlet.Outlet_Id}>
                                {outlet.Location} {/* Show Location, return Outlet_Id */}
                            </option>
                        ))
                    ) : (
                        <option disabled>Loading outlets...</option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default OutletSelectBox;
