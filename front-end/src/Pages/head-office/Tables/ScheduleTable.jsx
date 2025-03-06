import {useEffect, useState} from "react";
import axios from "axios";

export const ScheduleTable = () => {


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
                    <th className=" py-2 bg-gray-100 border-b">Gas Type</th>
                    <th className=" py-2 bg-gray-100 border-b">Amount</th>
                </tr>
                </thead>
                <tbody>
                {gasInventory.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b pl-64">{row.Gas_Type}</td>
                        <td className="px-4 py-2 border-b pl-64">{row.Amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}