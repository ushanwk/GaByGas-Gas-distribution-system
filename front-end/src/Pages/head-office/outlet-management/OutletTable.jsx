import {useEffect, useState} from "react";
import axios from "axios";

export const OutletTable = () => {
    const [outlet, setOutlet] = useState([]);

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


    return (
        <div className="container mx-auto my-8">
            <table className="min-w-full table-auto border-collapse bg-white">
                <thead>
                <tr>
                    <th className=" py-2 bg-gray-100 border-b">Outlet</th>
                    <th className=" py-2 bg-gray-100 border-b">Location</th>
                </tr>
                </thead>
                <tbody>
                {outlet.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b pl-64">{row.Name}</td>
                        <td className="px-4 py-2 border-b pl-64">{row.Location}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}