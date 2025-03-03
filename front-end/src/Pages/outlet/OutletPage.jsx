import barLogo from "../../assets/logo/bar-logo.png"
import dashboardIcon from "../../assets/pages/outlet-page/dashboard-icon.png"
import TokenIcon from "../../assets/pages/outlet-page/order-icon.png"
import ScheduleIcon from "../../assets/pages/outlet-page/truck 1.png"
import OrderIcon from "../../assets/pages/outlet-page/purchase-order 1.png"
import {useState} from "react";
import {TokenTable} from "./TokenTable/TokenTable.jsx";
import {ScheduleTable} from "./ScheduleTable/ScheduleTable.jsx";


const OutletPage = () => {

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
                            <span className="mr-2"><img src={TokenIcon} className="w-5" /></span> Tokens
                        </li>

                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(2)}>
                            <span className="mr-2"><img src={ScheduleIcon} className="w-5" /></span> Schedules
                        </li>

                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4" onClick={() => setTab(3)}>
                            <span className="mr-2"><img src={OrderIcon} className="w-5" /></span> Order
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
                <div className="flex-1 p-6 pl-20 pt-8 bg-yellow-50">
                    {tab === 0 ? (
                        <div className="p-5 flex flex-col items-center">
                            <h1 className="font-bold text-2xl mb-10">Dashboard</h1>
                            <div className="grid grid-cols-2 gap-10 place-items-center mt-20">

                                <div className="h-56 w-96 hover:scale-110 bg-white border-2 border-yellow-200 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2">
                                    <img src={TokenIcon} alt="Token Icon" className="h-16 w-16" />
                                    <h2 className="text-2xl font-bold">20</h2>
                                    <h1 className="text-lg text-gray-600">Total Tokens</h1>
                                </div>

                                <div className="h-56 w-96 hover:scale-110 bg-white border-2 border-yellow-200 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2">
                                    <img src={TokenIcon} alt="Token Icon" className="h-16 w-16" />
                                    <h2 className="text-2xl font-bold">20</h2>
                                    <h1 className="text-lg text-gray-600">Total Tokens</h1>
                                </div>

                                <div className="col-span-2 flex justify-center">
                                    <div className="h-56 w-96 hover:scale-110 bg-white border-2 border-yellow-200 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2">
                                        <img src={TokenIcon} alt="Token Icon" className="h-16 w-16" />
                                        <h2 className="text-2xl font-bold">20</h2>
                                        <h1 className="text-lg text-gray-600">Total Tokens</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) : null}

                    {tab === 1 ? (
                        <div className="p-5 flex flex-col items-center">
                            <h1 className="font-bold text-2xl mb-10">Tokens</h1>

                            <div className="w-full">
                                <TokenTable/>
                            </div>

                        </div>
                    ) : null}

                    {tab === 2 ? (
                        <div className="p-5 flex flex-col items-center">
                            <h1 className="font-bold text-2xl mb-10">Schedule</h1>

                            <div className="w-full">
                                <ScheduleTable/>
                            </div>
                        </div>
                    ) : null}

                    {tab === 3 ? (
                        <div className="p-5 flex flex-col items-center">
                            <h1 className="font-bold text-2xl mb-10">Order</h1>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default OutletPage;
