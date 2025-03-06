import { useState } from "react";  // Import useState hook
import barLogo from "../../assets/logo/bar-logo.png";
import dashboardIcon from "../../assets/pages/outlet-page/dashboard-icon.png";
import orderIcon from "../../assets/pages/outlet-page/order-icon.png";
import Schedule from "../../assets/pages/outlet-page/truck.png";
import Outlet from "../../assets/pages/outlet-page/store.png";
import Inventory from "../../assets/pages/outlet-page/inventory.png";
import axios from "axios";
<<<<<<< HEAD
import {OutletManagementPage} from "./outlet-management/OutletManagementPage.jsx";
import {InventoryManagement} from "./inventory-management/InventoryManagement.jsx";
=======
import SelectionField from "../../common/components/selection-field/SelectionField.jsx";
import {InventoryTable} from "./Tables/InventoryTable.jsx";
import Schedules from "./Schedules.jsx"
import ScheduleBg from "../../assets/pages/outlet-page/ScheduleBack.jpg";
import {TokenOrderTable} from "./Tables/TokenOrderTable.jsx";
import {OutletOrderTable} from "./Tables/OutletOrderTable.jsx";
>>>>>>> origin/dev-sathin
// import {tab} from "@material-tailwind/react";

const HeadOfficePage = () => {


    const [tab, setTab] = useState(0);


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
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(3)}>
                            <span className="mr-2"><img src={orderIcon} className="w-5" /></span> Token Orders
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(4)}>
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
                    <OutletManagementPage/>
                ) : null}

                {tab === 2 ? (
                   <InventoryManagement />
                ) : null}

                {tab === 3 ? (
                    <div className="flex-1 p-6 bg-yellow-50">
                        <h1 className="font-bold text-2xl text-blue-600">Token Orders</h1>
                        <TokenOrderTable/>
                    </div>
                ) : null}

                {tab === 4 ? (
                    <div className="flex-1 p-6 bg-yellow-50">
                        <h1 className="font-bold text-2xl text-blue-600">Token Orders</h1>
                        <OutletOrderTable/>
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
