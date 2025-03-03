import SelectionField from "../../../common/components/selection-field/SelectionField.jsx";
import InputField from "../../../common/components/input-field/InputField.jsx";
import ButtonComponent from "../../../common/components/button/Button.jsx";
import axios from "axios";
import {useState} from "react";
import {InventoryTable} from "./InventoryTable.jsx";

export const InventoryManagement = () => {

    const [quantity, setQuantity] = useState("");
    const [gasType, setGasType] = useState("");


    function updateInventory() {
        const update = async () => {
            try {
                const amount = parseInt(quantity, 10);  // Convert the string to an integer (base 10)

                // Check if the conversion is successful and is a valid number
                if (isNaN(amount)) {
                    console.error('Invalid Amount');
                    return;
                }

                console.log('Outlet created:', gasType, amount);

                const response = await axios.post('http://localhost:8089/api/gasInventory', {
                    Gas_Type: gasType,  // Send the state values here
                    Amount: amount,  // Use the converted integer value
                });

                console.log('Outlet created:', response.data);
            } catch (error) {
                console.error('Error creating outlet:', error.response.data);
            }
        };

        update();  // Call the async function to update the inventory
    }


    return (
        <div className="flex-1 p-6 bg-yellow-50">
            <h1 className="font-bold text-2xl text-blue-600">Inventory</h1>


            <div className="flex gap-4 w-2/5 pb-4">
                <SelectionField
                    width="100%"
                    label={"Select Gas Type"} name={"GasType"}
                    onChange={(e) => {
                        setGasType(e.target.value);
                    }}
                    value={gasType}
                    options={[
                        { value: "Small", label: "Small" },
                        { value: "Large", label: "Large" },
                    ]}/>

                <InputField
                    width="80%"
                    label="Quantity"
                    name="Quantity"
                    placeholder="Enter GAS Quantity"
                    type="number"
                    required
                    value={quantity}
                    onChange={(e) => {setQuantity(e.target.value)}}
                />
            </div>
            <ButtonComponent
                label="Update Stock"
                onClick={() => {updateInventory()}}
                customColor="#004AB0"
                customWidth="250px"
                customHeight="50px"
                size="medium"
                variant="contained"
            />

           <InventoryTable />

        </div>
    )
}