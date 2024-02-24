import React from 'react';
import {
    TableCell,
    TableRow
} from 'flowbite-react';

const TableItem = (
    props: {
        name: string,
        quantity: number,
        amount: number,
        currency: string,
        onDelete: () => void,
        onEdit: () => void,
        onClick: () => void,
    }
) => {
    const { name, quantity, amount, currency, onDelete, onEdit, onClick } = props;
    return (
        <React.Fragment>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-default">
                <TableCell onClick={onClick} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {name}
                </TableCell>
                <TableCell onClick={onClick}>{quantity}</TableCell>
                <TableCell onClick={onClick}>{currency} {amount}</TableCell>
                <TableCell className='space-x-2'>
                    <button onClick={onEdit} className="font-medium no-underline bg-green-600 w-20 text-white px-4 py-1 hover:underline dark:text-cyan-500">
                        Edit
                    </button>
                    <button onClick={onDelete} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white hover:underline dark:text-cyan-500">
                        Delete
                    </button>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default TableItem
