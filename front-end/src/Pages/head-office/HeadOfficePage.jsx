import { useState } from "react";  // Import useState hook
import barLogo from "../../assets/logo/bar-logo.png";
import dashboardIcon from "../../assets/pages/outlet-page/dashboard-icon.png";
import orderIcon from "../../assets/pages/outlet-page/order-icon.png";
import Schedule from "../../assets/pages/outlet-page/truck.png";
import Outlet from "../../assets/pages/outlet-page/store.png";
import Inventory from "../../assets/pages/outlet-page/inventory.png";
import InputField from "../../common/components/input-field/InputField.jsx";
import ButtonComponent from "../../common/components/button/Button.jsx";
import axios from "axios";
import SelectionField from "../../common/components/selection-field/SelectionField.jsx";
import {InventoryTable} from "./Tables/InventoryTable.jsx";
import Schedules from "./Schedules.jsx"
import ScheduleBg from "../../assets/pages/outlet-page/ScheduleBack.jpg"
// import {tab} from "@material-tailwind/react";

const HeadOfficePage = () => {
    // Step 1: Define state variables
    const [outletName, setOutletName] = useState("");
    const [location, setLocation] = useState("");

    // Step 2: Handle input change
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

    const [GI_Id, setGI_Id] = useState("");
    const [gasType, setGasType] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleGI_Id = (e) => setGI_Id(e.target.value);
    const handlegasType = (e) => setGasType(e.target.value);
    const handlequantity = (e) => setQuantity(e.target.value);


    const fetchInventory = async () => {
        try {
            const response = await axios.get('http://localhost:8089/api/gasInventory');
            setInventory(response.data);  // Update inventory state
        } catch (error) {
            console.error("Error fetching inventory:", error);
        }
    };

    const onClickUpdateInventory = () => {
        if (!GI_Id) {
            console.error("Inventory ID is required for updating.");
            return;
        }

        const updateGasInventory = async () => {
            try {
                const response = await axios.put(`http://localhost:8089/api/gasInventory/${GI_Id}`, {
                    Gas_Type: gasType,
                    Amount: quantity
                });
                console.log("Updated inventory:", response.data);
                fetchInventory();
            } catch (error) {
                console.error("Error updating inventory:", error.response?.data || error.message);
            }
        };

        updateGasInventory();
    };


    const [tab, setTab] = useState(0);

    const [outletType, setOutletType] = useState("");


    return (
        <div className="flex h-screen bg-yellow-50">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md flex flex-col">
                <div className="py-6 px-4">
                    <div className="text-xl font-bold text-blue-600 flex items-center">
                        <img src={barLogo} className="w-44" />
                    </div>
                </div>
                <nav className="mt-16 ml-8">
                    <ul>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(0)}>
                            <span className="mr-2"><img src={dashboardIcon} className="w-5" /></span> Dashboard
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(1)}>
                            <span className="mr-2"><img src={Outlet} className="w-5" /></span> Outlets
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(2)}>
                            <span className="mr-2"><img src={Inventory} className="w-5" /></span> Inventory
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" >
                            <span className="mr-2"><img src={orderIcon} className="w-5" /></span> Token Orders
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" >
                            <span className="mr-2"><img src={orderIcon} className="w-5" /></span> Outlet Orders
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(5)} >
                            <span className="mr-2"><img src={Schedule} className="w-5" /></span> Schedules
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-white shadow px-6 py-4 flex items-center justify-between">
                    {/* Search Bar */}
                    <div className="relative w-1/3">
                        <input
                            type="text"
                            placeholder="Search plant here..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    {/* Profile Picture */}
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Area */}
                {tab === 0 ? (
                    <div className="flex-1 p-6 bg-yellow-50">
                        <h1 className="font-bold text-2xl text-blue-600">Welcome</h1>
                    </div>
                ) : null}

                {tab === 1 ? (
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
                    </div>
                ) : null}

                {tab === 2 ? (
                    <div className="flex-1 p-6 bg-yellow-50">
                        <h1 className="font-bold text-2xl text-blue-600">Inventory</h1>

                        <InputField
                            width="35%"
                            label="Gas ID"
                            name="GasID"
                            placeholder="Enter GAS ID"
                            type="text"
                            required
                            value={GI_Id}
                            onChange={handleGI_Id}
                        />

                        <div className="flex gap-4 w-2/5 pb-4">
                            <SelectionField
                                width="100%"
                                label={"Select Gas Type"} name={"GasType"}
                                onChange={(e) => setGasType(e.target.value)}
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
                                onChange={handlequantity}
                            />
                        </div>
                        <ButtonComponent
                            label="Update Stock"
                            onClick={onClickUpdateInventory}
                            customColor="#004AB0"
                            customWidth="250px"
                            customHeight="50px"
                            size="medium"
                            variant="contained"
                        />

                        <div className="mt-10">
                        <InventoryTable/>
                        </div>
                    </div>
                ) : null}

                {tab === 5 ? (
                    <div className="flex-1 p-6 pb-5" style={{ backgroundImage: `url(${ScheduleBg})`, height: '100vh' }}>
                        <Schedules/>
                    </div>
                ) : null}
            </div>
        </div>
            );
};

export default HeadOfficePage;
