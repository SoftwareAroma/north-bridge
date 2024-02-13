import React from 'react';
import {
    TableCell,
    TableRow
} from 'flowbite-react';

const TableItem = (props: any) => {
    const { name, category, price, currency, onDelete, onEdit, onClick } = props;
    return (
        <React.Fragment>
            <TableRow onClick={onClick} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {name}
                </TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{currency} {price}</TableCell>
                <TableCell className='space-x-2'>
                    <button onClick={onEdit} className="font-medium no-underline bg-success w-20 text-white px-4 py-1 hover:underline dark:text-cyan-500">
                        Edit
                    </button>
                    <button onClick={onDelete} className="font-medium no-underline bg-error w-20 px-4 py-1 text-white hover:underline dark:text-cyan-500">
                        Delete
                    </button>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default TableItem
