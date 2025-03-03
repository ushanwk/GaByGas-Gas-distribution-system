import { useState } from "react";
import {ScheduleTable} from "../head-office/Tables/ScheduleTable.jsx";

export default function Schedules() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Schedule added:", schedule);
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