import { useState, useEffect } from "react";
import {ScheduleTable} from "../head-office/Tables/ScheduleTable.jsx";
import axios from "axios";

export default function Schedules() {


    const [outlet, setOutlet] = useState([]);
    const [selectedOutlet, setSelectedOutlet] = useState("");

    useEffect(() => {
        const fetchGasInventory = async () => {
            try {
                const response = await axios.get('http://localhost:8089/api/outlets');
                setOutlet(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchGasInventory();
    }, []);


    const [schedule, setSchedule] = useState({
        sendingDate: "",
        receivingDate: "",
        largeGasQty: 0,
        smallGasQty: 0,
    });
    console.log("Gas Schedule Component Rendered");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchedule((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const ReleaseDate = new Date(schedule.sendingDate);
            const ReachingDate = new Date(schedule.receivingDate);
            const Outlet_Id = selectedOutlet;
            const S_Amount = parseInt(schedule.smallGasQty, 10);
            const L_Amount = parseInt(schedule.largeGasQty, 10);
            const status = "Pending";

        
            const response = await axios.post('http://localhost:8089/api/deliverySchedules', {
                "Outlet_Id": Outlet_Id,
                "ReleaseDate": ReleaseDate,
                "ReachingDate": ReachingDate,
                "Status": status,
                "S_Amount": S_Amount,
                "L_Amount": L_Amount
            });

            console.log(response);

            
        } catch (error) {
            console.error('Error creating outlet', error);
        }

    };

    return (
            <div className="">
                <h2 className="text-white text-2xl font-bold text-center mb-4">
                    Gas By Gas Schedules
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-10 justify-center">
                    <div className="mb-3">
                        <div className="flex justify-between items-center mb-3 gap-2">
                            <label className="text-white">Sending date</label>
                            <input
                                type="date"
                                name="sendingDate"
                                value={schedule.sendingDate}
                                onChange={handleChange}
                                className="bg-white text-black p-2 rounded"
                            />
                        </div>

                        <div className="flex justify-between items-center gap-2">
                            <label className="text-white">Receiving date</label>
                            <input
                                type="date"
                                name="receivingDate"
                                value={schedule.receivingDate}
                                onChange={handleChange}
                                className="bg-white text-black p-2 rounded"
                            />
                        </div>
                    </div>

                   <div>
                       <div className="flex justify-between items-center mb-3 gap-2">
                           <label className="text-white">Large Gas Qty</label>

                           <input
                               type="number"
                               name="largeGasQty"
                               value={schedule.largeGasQty}
                               onChange={handleChange}
                               min="0"
                               className="bg-white text-black p-2 rounded w-20 border border-gray-300"
                           />
                       </div>



                       <div className="flex justify-between items-center mb-3">
                           <label className="text-white">Small Gas Qty</label>

                           <input
                               type="number"
                               name="smallGasQty"
                               value={schedule.smallGasQty}
                               onChange={handleChange}
                               min="0"
                               className="bg-white text-black p-2 rounded w-20 border border-gray-300"
                           />
                       </div>

                   </div>


                   <div>
                   <select
                        className="bg-white text-black p-2 rounded w-full border border-gray-300"
                        value={selectedOutlet}
                        onChange={(e) => setSelectedOutlet(e.target.value)}
                    >
                        <option value="">Select an Outlet</option> 
                        {outlet.map((out) => (
                            <option key={out.Outlet_Id} value={out.Outlet_Id}>
                                {out.Name}
                            </option>
                        ))}
                    </select>

                   </div>

                    </div>

                    <div className="flex justify-center ">
                    <button
                        type="submit"
                        className="w-1/5 bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300"
                    >
                        Add Schedule
                    </button>
                    </div>
                    <ScheduleTable/>
                </form>
        </div>
    );
}