import barLogo from "../../assets/logo/bar-logo.png"
import dashboardIcon from "../../assets/pages/outlet-page/dashboard-icon.png"
import orderIcon from "../../assets/pages/outlet-page/order-icon.png"
import Schedule from "../../assets/pages/outlet-page/truck 1.png"


const HeadOfficePage = () => {
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
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4">
                            <span className="mr-2"><img src={dashboardIcon} className="w-5" /></span> Dashboard
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4">
                            <span className="mr-2"><img src={orderIcon} className="w-5" /></span> Token Orders
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4">
                            <span className="mr-2"><img src={orderIcon} className="w-5" /></span> Outlet Orders
                        </li>
                        <li className="py-2 px-4 text-gray-700 hover:bg-blue-100 cursor-pointer flex items-center mb-4">
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
                <div className="flex-1 p-6 bg-yellow-50">



                </div>
            </div>
        </div>
    );
};

export default HeadOfficePage;
