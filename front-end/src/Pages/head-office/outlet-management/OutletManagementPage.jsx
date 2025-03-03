import InputField from "../../../common/components/input-field/InputField.jsx";
import ButtonComponent from "../../../common/components/button/Button.jsx";
import axios from "axios";
import {useState} from "react";
import {OutletTable} from "./OutletTable.jsx";

export const OutletManagementPage = () => {

    const [outletName, setOutletName] = useState("");
    const [location, setLocation] = useState("");

    const handleOutletNameChange = (e) => setOutletName(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);

    // Step 3: Handle button click
    const onClickAddOutlet = () => {
        const addOutlet = async () => {
            try {
                const response = await axios.post('http://localhost:8089/api/outlets', {
                    Name: outletName,  // Send the state values here
                    Location: location
                });

                console.log('Outlet created:', response.data);
            } catch (error) {
                console.error('Error creating outlet:', error.response.data);
            }
        };

        addOutlet();
    };



    return (
        <div className="flex-1 p-6 bg-yellow-50">
            <h1 className="font-bold text-2xl text-blue-600">Add an Outlet</h1>
            <div className="flex gap-10 w-3/4 pb-4">
                <InputField
                    label="Outlet Name"
                    name="outlet name"
                    placeholder="Enter outlet name"
                    type="text"
                    required
                    value={outletName}
                    onChange={handleOutletNameChange}
                />
                <InputField
                    label="Location"
                    name="location"
                    placeholder="Enter outlet location"
                    type="text"
                    required
                    value={location}
                    onChange={handleLocationChange}
                />
            </div>
            <ButtonComponent
                label="Add Outlet"
                onClick={onClickAddOutlet}
                customColor="#004AB0"
                customWidth="250px"
                customHeight="50px"
                size="large"
                variant="contained"
            />


            <OutletTable />
        </div>
    )
}