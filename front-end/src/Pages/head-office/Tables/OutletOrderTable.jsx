import { useEffect, useState } from "react";
import axios from "axios";

export const OutletOrderTable = () => {

    const [gasInventory, setGasInventory] = useState([]);

    useEffect(() => {
        const fetchGasInventory = async () => {
            try {
                const response = await axios.get('http://localhost:8089/api/gasInventory');
                setGasInventory(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchGasInventory();
    }, []);

    return (
        <div className="container mx-auto my-8">
            <table className="min-w-full table-auto border-collapse bg-white">
                <thead>
                <tr>
                    <th className="py-2 bg-gray-100 border-b">User Id</th>
                    <th className="py-2 bg-gray-100 border-b">Outlet Id</th>
                    <th className="py-2 bg-gray-100 border-b">S Gas (Qty)</th>
                    <th className="py-2 bg-gray-100 border-b">L Gas (Qty)</th>
                    <th className="py-2 bg-gray-100 border-b">Schedule</th>
                    <th className="py-2 bg-gray-100 border-b">Date</th>
                </tr>
                </thead>
                <tbody>
                {gasInventory.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b">{row.UserId}</td>
                        <td className="px-4 py-2 border-b">{row.OutletId}</td>
                        <td className="px-4 py-2 border-b">{row.SGasQty}</td>
                        <td className="px-4 py-2 border-b">{row.LGasQty}</td>
                        <td className="px-4 py-2 border-b">{row.ScheduleNo}</td>
                        <td className="px-4 py-2 border-b">{row.OrderedDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
