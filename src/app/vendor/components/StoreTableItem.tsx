import { TableCell, TableRow } from 'flowbite-react';
import React from 'react';

const StoreTableItem = (props: any) => {
    const { name, address, location, onDelete, onEdit, onClick } = props;
    return (
        <React.Fragment>
            <TableRow onClick={onClick} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {name}
                </TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{location}</TableCell>
                <TableCell className='space-x-2'>
                    <button onClick={onEdit} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                        Edit
                    </button>
                    <button onClick={onDelete} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
                        Delete
                    </button>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default StoreTableItem
