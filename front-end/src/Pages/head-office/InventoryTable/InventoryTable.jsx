import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    Input,
    CardHeader,
    Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Gas Type", "Quantity"];

const TABLE_ROWS = [
    {
        type: "Large",
        quantity: "50",
    },
    {
        type: "Small",
        quantity: "30",
    },
];

export function InventoryTable() {
    return (
        <Card className="h-50 w-1/4 overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                className="mb-2 rounded-none p-2"
            >
                <div className="w-full md:w-96">
                    <Input
                        label="Search Gas Type"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </div>
            </CardHeader>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b border-gray-300 p-4">
                            <Typography
                                color="blue-gray"
                                variant="small"
                                className="!font-bold"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {TABLE_ROWS.map(({ type, quantity }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                    return (
                        <tr key={type}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    className="font-normal text-gray-600"
                                >
                                    {type}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    className="font-normal text-gray-600"
                                >
                                    {quantity}
                                </Typography>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </Card>
    );
}
